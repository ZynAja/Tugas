<?php 
require_once "jquery.php";

$data = stripslashes(file_get_contents("php://input"));
$cari = json_decode($data, true);

$id = $cari['idpelanggan'];
$response = array();

$sql = $conn->query("SELECT*FROM tblpelanggan WHERE idpelanggan = $id");
$fetch = $sql->fetch_assoc();
$response = $fetch;

echo json_encode($response);
?>