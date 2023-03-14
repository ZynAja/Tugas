<?php 
require_once "./jquery.php";

$idpelanggan = $_POST['idpelanggan'];
$result['pesan']='';

$sql = $conn->query("DELETE FROM `tblpelanggan` WHERE idpelanggan = $idpelanggan");

?>