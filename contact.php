<?php
session_start();
include 'db.php';

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $sql = "INSERT INTO messages (name,email,message)
            VALUES ('$name','$email','$message')";

    if($conn->query($sql) === TRUE){
        $_SESSION['msg'] = "Message sent successfully 💜";
    } else {
        $_SESSION['msg'] = "Error sending message";
    }

    header("Location: index.html");
    exit();
}
?>
