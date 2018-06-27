<?php
$addr="localhost";
$username="spwuser";
$password="spwpass";
$db="spwebsitedb";

// Create connection
$conn = new mysqli($addr, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>