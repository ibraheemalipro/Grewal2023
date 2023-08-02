<?php $name = $_POST['name'];
$mobile = $_POST['mobile'];
$send = $_POST['send'];
$formcontent="Name: $name Mobile: $mobile  Message: $send";
$recipient = "grewaltransportservice@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $name \r\n";
mail($recipient, \n $subject, \n $mobile, \n $formcontent, $mailheader) or die("Error!");
echo "Thank You! We will call you a soon ";
?>