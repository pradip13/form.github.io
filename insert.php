<?php

        $server = "localhost";
        $user = "root";
        $password = "";
        $db = "signup";

        $con = mysqli_connect($server,$user,$password,$db);

if(isset($_POST ['submit'])){
    $name = mysqli_real_escape_string($con $_POST['name']);
    $email = mysqli_real_escape_string($con$_POST['email']);
    $password = mysqli_real_escape_string ($con $_POST['password']);
    $phone = mysqli_real_escape_string($con $_POST['phone']);
    $dob = mysqli_real_escape_string ($con $_POST['dob']);
    $zip = mysqli_real_escape_string ($con $_POST['zip']);

    $emailquery = "select * from contact where email = '$email' ";
    $query = mysqli_query($con,$emailquery);
  

        $insertquery = " insert into contact (name,email,password,phone,dob,zip) values(' $name',' $email','$password',' $phone',' $dob ',' $zip')"

        $iquery = mysqli_query($con,$insertquery);
}
  

?>
  
