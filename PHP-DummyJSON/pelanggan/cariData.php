<?php 
require_once "./jquery.php";

$id = $_POST['idpelanggan'];
$response = array();

$sql = $conn->query("SELECT*FROM tblpelanggan WHERE idpelanggan = $id");
$fetch = $sql->fetch_assoc();
$response = $fetch;

echo json_encode($response);
?>
