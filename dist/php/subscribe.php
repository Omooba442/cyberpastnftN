<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.hostinger.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'admin@cyberpastnft.com';                     //SMTP username
    $mail->Password   = 'Ad54k0hn@.a';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    $email = $_POST['email'];
    $message = "
        <html>
            <body>
                <h1>Hi CEO</h1>
                <br>
                <p>You have a new subscriber from <a href='cyberpastnft.com'>cyberpastnft.com</a></p>
                <br>
                <h4>Subscriber Email Addreess:  $email</h4>

            </body>
        </html>
    ";


    //Recipients
    $mail->setFrom('admin@cyberpastnft.com', 'subscribers');
    $mail->addAddress('subscribe@cyberpastnft.com', 'Subscriber');
    $mail->isHTML(true);
    $mail->Subject = 'New Subscriber';
    $mail->Body = $message;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    header('Location: ../index.html');
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    header('Location: ../contact.html');
}
