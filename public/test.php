<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


    

//Load Composer's autoloader
require 'vendor/autoload.php';


    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    try {
//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);


    //Server settings

    //SMTPDebug set to 0 so you can redirect to page after sending (use only after the messege can be sent properly)
    $mail->SMTPDebug = 0; 
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'franemiro@gmail.com';                     //SMTP username
    $mail->Password   = 'xnlqecspedkvhoqz';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($email, $name);
    $mail->addAddress('franemiro@gmail.com', 'Frane Miro Dobrovic');     //Add a recipient
               //Name is optional
    $mail->addReplyTo($email, $name);
   


    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Poruka sa weba';
    $mail->Body    = $message;
    $mail->AltBody = strip_tags($message);

    
    if ($mail->Send()) { 
        header("Location:/thanks/");//echo "Message Sent!";            
    }
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

