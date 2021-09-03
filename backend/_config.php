<?php

  // error_reporting(0); 
  set_time_limit(0);

  header('Content-Type: application/json');
  header('Access-Control-Allow-Origin: *');
  // header("Access-Control-Allow-Headers: Authorization");

  require_once("_databaseConnection.php");
  require_once("_timestamp.php");

  $db = new DB("127.0.0.1", "gestion_absences", "root", "");
  $date = new Dates();

  define("DOMAIN_LINK", 'http://127.0.0.1:3000');

  //REQUEST STATUS  *******************************************************
  define("REQUEST_SUBMITED", 0);
  define("REQUEST_ACCEPTED", 1);
  define("REQUEST_REJECTED", 2);


  //User STATUS  *******************************************************
  define("ADMIN_CODE", 1);
  define("EMPLOYEE_CODE", 2);



  //Functions  *******************************************************
  function printResult($data){
    echo $data;
    http_response_code(200);
  }

?>