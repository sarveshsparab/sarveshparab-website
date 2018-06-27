<?php

function handleDesc($descStr){
    $descStr = @trim($descStr);
    $descStrArray = explode('|', $descStr);
    return $descStrArray;
}

?>