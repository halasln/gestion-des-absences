<?php
  require_once("_config.php");

  $employeeId = $_POST['employeeId'];

  $dbResult = $db->query("SELECT 
  users.first_name, users.last_name, users.email, users.image, requests.id, requests.from_date, requests.to_date, requests.message, requests.status
  FROM 
    users
  INNER JOIN 
    requests 
  ON
    users.id=requests.employee_id
  WHERE 
    requests.employee_id = $employeeId ");

  if ($dbResult) {
    printResult(json_encode($dbResult));
  }else{
    printResult(false);
  }

  

?>