<?php

include("../db/connectGoDaddyDB.php");
include("../util/utility.php");

$sql = "SELECT * from experience exp ORDER BY exp.display_order DESC";
$result = $conn->query($sql);

$content = '';
$content .= '<div class="sectionHeader"><span>Experience</span></div>';
$content .= '<section class="cd-timeline js-cd-timeline"><div class="cd-timeline__container">';

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $content .= '<div class="cd-timeline__block js-cd-block"><div class="cd-timeline__sym js-cd-img"><span>';
        $content .= $row["symbol"];
        $content .= '</span></div><div class="cd-timeline__content js-cd-content"><h2>';
        $content .= $row["designation"];
        $content .= '</h2>';
        if($row["short_desc"]!=null){
            $content .= '<p>';
            foreach(handleDesc($row["short_desc"]) as $descLine){
                $content .= $descLine.'<br>';
            }
            $content .= '</p>';
        }
        if($row["meta"]!=0){
            $content .= '<a id="exp_'.$row["id"].'" class="cd-timeline__read-more">Read more</a>';
        }
        $content .= '<span class="cd-timeline__name">';
        $content .= $row["organisation"];
        $content .= '</span><br><span class="cd-timeline__date">';
        $content .= $row["time_frame"];
        $content .= '</span></div></div>';
    }
    $content .= '</div></section>';
} else {
    $content = 'ERROR';
}

echo $content;

?>