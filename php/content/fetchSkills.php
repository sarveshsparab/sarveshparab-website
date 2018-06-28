<?php

include("../db/connectGoDaddyDB.php");
include("../util/utility.php");

$type = $_GET['skillType'];

$sql = "SELECT * from skills sk WHERE sk.type='".$type."' ORDER BY sk.display_order";
$result = $conn->query($sql);

$content = '';
$content .= '<div class="sectionHeader"><span>'.ucfirst($type).'  Skills</span></div>';
$content .= '<div class="allskills">';

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $content .= '<div class="skillbar clearfix " data-percent="';
        $content .= $row["level"];
        $content .= '%"><div class="skillbar-title"><span>';
        $content .= $row["name"];
        $content .= '</span></div><div class="skillbar-bar"></div></div>';
    }
    $content .= '</div>';
} else {
    $content = 'ERROR';
}

echo $content;

?>