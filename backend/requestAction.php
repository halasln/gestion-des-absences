<?php
  require_once("_config.php");

  $userId = $_POST['userId'];
  $requestId = $_POST['requestId'];
  $rDays = $_POST['rDays'];
  $requestStatus = $_POST['requestStatus'];

  $dbResult = $db->query('UPDATE requests SET status = :status WHERE id=:id',
  [':id'=>$requestId, ':status'=>$requestStatus]);



  $dbResult = $db->query('UPDATE users SET r_days = :r_days WHERE id=:id',
  [':id'=>$userId, ':r_days'=>$rDays]);

  if ($dbResult) {
    printResult(json_encode($dbResult));
  }else{
    printResult(false);
  }

?>