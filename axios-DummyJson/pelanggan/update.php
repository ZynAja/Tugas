<?php 
require_once "jquery.php";

$request = stripslashes(file_get_contents("php://input"));
$updt = json_decode($request, true);

$id = $updt['idpelanggan'];
$pelanggan = $updt['pelanggan'];
$alamat = $updt['alamat'];
$telp = $updt['telp'];
$result['pesan']='';

if (empty($pelanggan&&$alamat&&$telp)) {
  $result['pesan'] = "Data Kosong, Harap Mengisi Ulang!";
}else {
  $sql = $conn->query("UPDATE `tblpelanggan` SET `pelanggan`='$pelanggan',`alamat`='$alamat',`telp`='$telp' WHERE idpelanggan = $id");

  if ($sql) {
    $result['pesan'] = "Data Berhasil Diubah !";
  }else{
    $result['pesan'] = "Data Gagal Diubah !";
  }
}

echo json_encode($result);

?>