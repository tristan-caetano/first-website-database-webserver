<?php

$servername = "127.0.0.1";
$username = "root";
$pass = "";
$dbname = "testdb";

$conn = new mysqli($servername, $username, $pass, $dbname);

if($conn->connect_error){
    echo "Connection Failed :(\n";
}else{
    echo "Connection Success :)\n";
}

echo "Epic cookie: " . $_COOKIE["test"];

$sql= "CREATE TABLE login (id INT(6), username VARCHAR(30) NOT NULL, passkey VARCHAR(30) NOT NULL)";

if($conn->query($sql) == true){
    echo "Table Added Successfully\n";
}else{
    echo "Table Could not be Added: " . $conn->error;
    echo "\n";
}

$sql = "INSERT INTO login (id, username, passkey) VALUES ('0', 'test@email.com', 'testpass')";

if($conn->query($sql) == true){
    echo "Record Added Successfully\n";
}else{
    echo "Record Could not be Added: " . $conn->error;
    echo "\n";
}

$sql = "DELETE FROM login WHERE id = 0";


if($conn->query($sql) == true){
    echo "Record Deleted Successfully\n";
}else{
    echo "Record Could not be Deleted: " . $conn->error;
    echo "\n";
}


?>