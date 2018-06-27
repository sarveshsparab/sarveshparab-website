<?php

include("../db/connectGoDaddyDB.php");
include("../util/utility.php");

$sql = "SELECT * from skills";
$result = $conn->query($sql);

$content = '';

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $content .= '<a>';
        $content .= $row["name"];
        $content .= '</a>';
    }
} else {
    $content = 'ERROR';
}

echo $content;

?>