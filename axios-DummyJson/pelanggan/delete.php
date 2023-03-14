<?php 
require_once "jquery.php";

$request = stripslashes(file_get_contents('php://input'));
$del = json_decode($request, true);

$idpelanggan = $del['idpelanggan'];
$result['pesan']='';

$sql = $conn->query("DELETE FROM `tblpelanggan` WHERE idpelanggan = $idpelanggan");
if ($sql) {
  echo $result['pesan'] = "Data Berhasil Dihapus !";
}else {
  echo $result['pesan'] = "Data Gagal Dihapus !";
}

?>
