<?php
  require_once("_config.php");

  $dbResult = $db->query('SELECT * FROM users WHERE type = 2');

  if ($dbResult) {
    printResult(json_encode($dbResult));
  }else{
    printResult(false);
  }

  

?>