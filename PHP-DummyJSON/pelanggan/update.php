<?php 
require_once "./jquery.php";

$id = $_POST['idpelanggan'];
$pelanggan = $_POST['pelanggan'];
$alamat = $_POST['alamat'];
$telp = $_POST['telp'];
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