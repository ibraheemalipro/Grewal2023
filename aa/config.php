<?php  
define('DB_SERVER','87.98.134.189');
define('DB_USER','packersm_api');
define('DB_PASS' ,'Star@159');
define('DB_NAME', 'packersm_api');

$con = mysqli_connect(DB_SERVER,DB_USER,DB_PASS,DB_NAME);
// Check connection
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
 }
 else{
 	echo "connected";
 }

?>