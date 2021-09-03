<?php
  require_once("_config.php");

  $dbResult = $db->query('SELECT 
  users.id AS user_id, users.first_name, users.last_name, users.email, users.image, users.days, users.r_days, requests.id, requests.from_date, requests.to_date, requests.message
  FROM 
    users
  INNER JOIN 
    requests 
  ON
    users.id=requests.employee_id
  WHERE 
    requests.status = 0');

  if ($dbResult) {
    printResult(json_encode($dbResult));
  }else{
    printResult(false);
  }

  

?>