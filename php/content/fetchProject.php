<?php

include("../db/connectGoDaddyDB.php");
include("../util/utility.php");

$sql = "SELECT * from projects prj ORDER BY prj.display_order DESC";
$result = $conn->query($sql);

$content = '';
$content .= '<div class="sectionHeader"><span>Projects</span></div>';
$content .= '<div class="grid">';

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $content .= '<div class="item"><div class="content"><div class="title"><h3>';
        $content .= $row["title"];
        $content .= '</h3></div>';
        if($row["title_photo"]!=null){
            $content .= '<img class="photothumb" src="'.$row["title_photo"].'">';
        }
        $content .= '<div class="desc">';
        if($row["short_desc"]!=null){
            $content .= '<p>';
            foreach(handleDesc($row["short_desc"]) as $descLine){
                $content .= $descLine.'<br>';
            }
            $content .= '</p>';
        }
        $content .= '<hr><div class="tileInfo">';
        if($row["code_link"]!=null){
            $content .= '<a href="'.$row["code_link"].'" target="_blank"><i class="fab fa-github"></i></a>';
        }
        $content .= '<span>'.$row["time_frame"].'</span></div>';
        if($row["meta"]!=0){
            $content .= '<div id="prj_'.$row["id"].'" class="tileReadMore"><a>Read More</a></div>';
        }
        $content .= '</div></div></div>';
    }
    $content .= '</div>';
} else {
    $content = 'ERROR';
}

echo $content;

?>