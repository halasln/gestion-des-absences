<?php
  require_once("_config.php");

  $userId = $_POST['userId'];
  $email = $_POST['email'];
  $mobile = $_POST['mobile'];
  $password = $_POST['password'];
  $employeeImg = '';
  $dbResult = null;

  try {
    if (isset($_POST['employeeImg'])) {

      $employeeImg = $_POST['employeeImg'];
  
      $dbResult = $db->query('UPDATE users SET
      email=:email,
      mobile=:mobile,
      password=:password,
      image=:image
      WHERE id=:id',
      [
        ":id"=>$userId,
        ":email"=>$email,
        ":mobile"=>$mobile,
        ":password"=>$password,
        ":image"=>$employeeImg,
      ]);
  
    }else{
  
      $dbResult = $db->query('UPDATE users SET
      email=:email,
      mobile=:mobile,
      password=:password
      WHERE id=:id',[
          ":id"=>$userId,
          ":email"=>$email,
          ":mobile"=>$mobile,
          ":password"=>$password
        ]);
  
    }
  } catch (\Throwable $th) {
    $dbResult = $th;
  }

  

  printResult(json_encode($dbResult));

?>