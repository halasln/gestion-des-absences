<?php
  require_once("_config.php");

  $userId = $_POST['userId'];

  $dbResult = $db->query('SELECT * FROM users WHERE id=:id', [':id'=>$userId]);

  if ($dbResult) {
    printResult(json_encode($dbResult));
  }else{
    printResult(false);
  }

?>