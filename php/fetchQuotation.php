<?php
/**
 * Created by PhpStorm.
 * User: Sarvesh
 * Date: 27-06-2018
 * Time: 15:09
 */

include("db/connectGoDaddyDB.php");

$sql = "SELECT q.id AS quote_id, q.content AS content, q.author AS author FROM quotations q ORDER BY RAND() LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo '<blockquote><p>'.$row["content"].'”</p><footer>- '.$row["author"].'</footer></blockquote>';
    }
} else {
    echo "0 results";
}

$conn->close();

?>