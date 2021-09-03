<?php
  require_once("_config.php");

  $employeeId = $_POST['employeeId'];
  $message = $_POST['message'];
  $fromDate = $_POST['fromDate'];
  $toDate = $_POST['toDate'];
  $status = REQUEST_SUBMITED;
  $submitDate = $date->getNow();

  $dbResult = $db->query('INSERT INTO requests (employee_id,
    from_date,
    to_date,
    message,
    status,
    submit_date)
    VALUES (
    :employee_id,
    :from_date,
    :to_date,
    :message,
    :status,
    :submit_date)',
     [':employee_id'=>$employeeId,
     ':from_date'=>$fromDate,
     ':to_date'=>$toDate,
     ':message'=>$message,
     ':status'=>$status,
     ':submit_date'=>$submitDate,
    ]);


  printResult(json_encode($dbResult));

?>