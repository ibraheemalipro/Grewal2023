<?php
	if(isset($_POST['submit']))
	{
	    $subject = 'gatihouseshifting';
	    $choosecat1=$_POST['low budget-regular quality'];
	    $choosecat2=$_POST['Prime-upper lavel quality'];
		$name=$_POST['name'];
		$phone=$_POST['phone'];
		$email=$_POST['email'];
		$pick=$_POST['pick'];
		$txtfrom=$_POST['txtfrom'];
		$txtto=$_POST['txtto'];
		$msg=$_POST['msg'];
		$to='gatihouseshifting@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='Grewal Transport';
		$message="Prime-upper lavel quality :".$choosecat1."\n"."low budget-regular quality :".$choosecat2."\n"."Name :".$name."\n"."Phone :".$phone. "\n"."email :".$email."\n"."From :".$txtfrom."\n"."To :".$txtto."\n"."Wrote the following :"."\n\n".$msg;
		$headers="From: ".$email."\n"."$pick :".$pick;
		
		if(mail($to, $subject, $message, $headers))
		{
			echo "<h3>Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h3>";
		}
		else
		{
			echo "Something went wrong!";
			header('refresh:1; url=http://gatihouseshifting.com');
        }
}
?>