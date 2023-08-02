<?php 
$subject = 'Grewal Transport';
$message = 'Enqury From Grewal Transport';
$moving_from = $_POST['moving_from'];
$moving_to = $_POST['moving_to'];
$moving_date = $_POST['moving_date'];
$name = $_POST['name'];
$mobile = $_POST['mobile'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="Moving From: $moving_from \n \n Moving To: $moving_to Date: $moving_date \n Name: $name \n Email: $email \n mobile: $mobile \n Message: $message";
$recipient = "grewaltransportservice@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $moving_from, $moving_to, $email, $mobile, $subject, $formcontent, $message, $mailheader) or die("Error!");
echo "Thank You! We will call you soon ";
?>
