<?php
  require_once("_config.php");

  $id = $_POST['id'];

  $dbResult = $db->query('SELECT * FROM users WHERE id=:id', [':id'=>$id]);

  if ($dbResult) {
    printResult(json_encode($dbResult));
  }else{
    printResult(false);
  }

  

?>