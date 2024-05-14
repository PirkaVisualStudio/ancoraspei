<?php 

function error_found(){
    header("Location: ../mail-error");
  }
  set_error_handler('error_found');

  $name = $_POST['name'];
  $email = $_POST['email'];
  $message .= 'Name: ' . $_POST['name'] . "\r\n\r\n";
  $message .= 'Email: ' . $_POST['email'] . "\r\n\r\n";
  $message .= 'Message: ' . $_POST['message'];
  



$mailheader = "From: ".$name."<".$email.">\r\n";

$recipient = "info@pirka.hr";


mail($recipient, "Upit sa pirka.hr", $message, $mailheader)
or die("Something's wrong, please try again.");


header('Location: ../hvala.php');
exit();

?>