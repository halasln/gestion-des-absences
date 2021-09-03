<?php
  require_once("_config.php");

  $email = $_POST['email'];
  $password = $_POST['password'];

  $dbResult = $db->query('SELECT * FROM users WHERE email=:email AND password=:password', [':email'=>$email, ':password'=>$password]);

  if ($dbResult) {
    printResult(json_encode($dbResult));
  }else{
    printResult(false);
  }
?>