<?php

function handleDesc($descStr){
    $descStr = @trim($descStr);
    $descStrArray = explode('|', $descStr);
    return $descStrArray;
}

function extractID($idStr){
    $idStr = @trim($idStr);
    $idStrArray = explode('_', $idStr);
    return $idStrArray[1];
}

?>