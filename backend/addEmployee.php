<?php
  require_once("_config.php");

  $firstName = $_POST['firstName'];
  $lastName = $_POST['lastName'];
  $email = $_POST['email'];
  $mobile = $_POST['mobile'];
  $password = $_POST['password'];
  $position = $_POST['position'];
  $address = $_POST['address'];
  $vDays = $_POST['vDays'];
  $employeeImg = $_POST['employeeImg'];
  $type = EMPLOYEE_CODE;
  $dateAdded = $date->getNow();
  $dbResult = null;

  try {
    $dbResult = $db->query('INSERT INTO users(
      first_name,
      last_name,
      email,
      mobile,
      password,
      position,
      type,
      address,
      image,
      days,
      date_added
      ) VALUES (
        :first_name,
        :last_name,
        :email,
        :mobile,
        :password,
        :position,
        :type,
        :address,
        :image,
        :days,
        :date_added
        )',[
          ":first_name"=>$firstName,
          ":last_name"=>$lastName,
          ":email"=>$email,
          ":mobile"=>$mobile,
          ":password"=>$password,
          ":position"=>$position,
          ":type"=>$type,
          ":address"=>$address,
          ":image"=>$employeeImg,
          ":days"=>$vDays,
          ":date_added"=>$dateAdded
        ]);
  } catch (\Throwable $th) {
    $dbResult = $th;
  }

  printResult(json_encode($dbResult));

?>