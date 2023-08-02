<?php
if(isset($_POST['email'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "info@rehousingpackers.in";
    $email_subject = "New Enquiry - Packers And Movers";
 
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
 
    // validation expected data exists
    if(!isset($_POST['type']) ||
        !isset($_POST['size']) ||
        !isset($_POST['from']) ||
        !isset($_POST['to']) ||
        !isset($_POST['quality']) ||
        !isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['phone'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
     
 
    $type = $_POST['type']; // required
    $size = $_POST['size']; // required
    $from = $_POST['from']; // required
    $to = $_POST['to']; // required
    $quality = $_POST['quality']; // required
    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $phone = $_POST['phone']; // not required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
 	$email_message .= "Packing Type: ".clean_string($type)."\n";
    $email_message .= "Goods: ".clean_string($size)."\n";
    $email_message .= "From: ".clean_string($from)."\n";
    $email_message .= "To: ".clean_string($to)."\n";
    $email_message .= "Quality Reqd.: ".clean_string($quality)."\n";
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Phone: ".clean_string($phone)."\n";
 
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers); 
header('Location:../thankyou.php');
exit(); 
?>
 
<?php
 
}
?>