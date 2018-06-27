<?php

include("../db/connectGoDaddyDB.php");
include("../util/utility.php");

$type = $_GET['type'];
$id = $_GET['id'];

$table = '';

if ($type == 'edu') {
    $table = 'education';
} elseif ($type == 'exp') {
    $table = 'experience';
} elseif ($type == 'prj') {
    $table = 'projects';
}

$sql = "SELECT * from " . $table . " t WHERE t.id=" . extractID($id);
$result = $conn->query($sql);

$content = array();

if ($result->num_rows > 0) {
    $content = $result->fetch_assoc();
    $content['status'] = 'SUCCESS';
} else {
    $content['status'] = 'ERROR';
}

echo json_encode($content);

?>