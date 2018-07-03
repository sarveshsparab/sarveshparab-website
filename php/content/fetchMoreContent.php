<?php

include("../db/connectGoDaddyDB.php");
include("../util/utility.php");

$id = $_GET['id'];
$type = $_GET['type'];

$table = '';
$titleCol = '';

if ($type == 'edu') {
    $table = 'education';
    $titleCol = 'degree';
} elseif ($type == 'exp') {
    $table = 'experience';
    $titleCol = 'designation';
} elseif ($type == 'prj') {
    $table = 'projects';
    $titleCol = 'title';
}

$retData = array();

$tableSql = "SELECT * FROM ".$table." t WHERE t.id=" . extractID($id);
$tableResult = $conn->query($tableSql);

if ($tableResult->num_rows > 0) {
    $retData['status'] = 'SUCCESS';
    while($row = $tableResult->fetch_assoc()) {
        $retData['title'] = $row[$titleCol];
    }

    $metaSql = "SELECT m.type AS metaType, m.data AS metaData FROM meta m WHERE m.ref_type='".$type."' AND m.ref_id=" . extractID($id) . " ORDER BY m.display_order";
    $metaResult = $conn->query($metaSql);

    if ($metaResult->num_rows > 0) {
        while($row = $metaResult->fetch_assoc()) {
            if($retData['body'][$row['metaType']]==''){
                $retData['body'][$row['metaType']] = $row['metaData'];
            } else {
                $retData['body'][$row['metaType']] .= '|'.$row['metaData'];
            }
        }
    }else{
        $retData['status'] = 'ERROR';
    }

    $skillSql = "SELECT sk.type, sk.name from skills sk WHERE sk.id IN (SELECT DISTINCT t_sk.skill_id FROM ".$table."_skills t_sk where t_sk.".$type."_id=" . extractID($id) . ") ORDER BY sk.type";
    $skillResult = $conn->query($skillSql);

    if ($skillResult->num_rows > 0) {
        $retData['status'] = 'SUCCESS';
        while($row = $skillResult->fetch_assoc()) {
            if($retData['body']['Skills'][$row['type']]==''){
                $retData['body']['Skills'][$row['type']] = $row['name'];
            } else {
                $retData['body']['Skills'][$row['type']] .= '|'.$row['name'];
            }
        }
    }

} else {
    $retData['status'] = 'ERROR';
}

echo json_encode($retData);

?>