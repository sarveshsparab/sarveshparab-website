<?php
/**
 * Created by PhpStorm.
 * User: sarve
 * Date: 11/20/2019
 * Time: 10:48 AM
 */

$existingJson = file_get_contents("companyData_dynamic.json");
$existingJsonDecoded = json_decode($existingJson, true);

$compList = array('dummy' => true);

foreach($existingJsonDecoded['companyData'] as $cd) {
    $compList[strtolower($cd['name'])] = true;
}

$resultJson = $existingJson;

if (isset($_GET['func']) && strtoupper($_GET['func']) == 'ADD') {
    if (isset($_GET['comp'])) {
        $compName = strtolower($_GET['comp']);
        $compList[$compName] = true;
        $resultJson = populateComp($compList);
    }
} elseif (isset($_GET['func']) && strtoupper($_GET['func']) == 'REMOVE') {
    if (isset($_GET['comp'])) {
        $compName = strtolower($_GET['comp']);
        $compList[$compName] = false;
        $resultJson = populateComp($compList);
    }
} elseif (isset($_GET['func']) && strtoupper($_GET['func']) == 'STATUS') {
    echo print_r($compList, true);
    exit();
}

//echo print_r($compList, true);

file_put_contents('companyData_dynamic.json', $resultJson);

function populateComp($compList){
    $emptyJson = json_decode(file_get_contents("companyData_empty.json"), true);

    foreach ($compList as $key => $value) {
        if ($value) {
            $file_loc = 'compData/' . $key . '.json';
            if (file_exists($file_loc)) {
                array_push($emptyJson['companyData'], json_decode(file_get_contents($file_loc), true));
            }


        }
    }

    $jsonData = json_encode($emptyJson);
    return $jsonData;
}

?>

