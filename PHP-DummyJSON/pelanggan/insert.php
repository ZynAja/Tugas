<?php 
require_once "./jquery.php";

$pelanggan = $_POST['pelanggan'];
$alamat = $_POST['alamat'];
$telp = $_POST['telp'];
$result['pesan']='';

if (empty($pelanggan&&$alamat&&$telp)) {
  $result['pesan'] = "Data Kosong, Harap Mengisi Ulang!";
}else {
  $sql = $conn->query("INSERT INTO `tblpelanggan`(`pelanggan`, `alamat`, `telp`) VALUES ('$pelanggan','$alamat','$telp')");

  if ($sql) {
    $result['pesan'] = "Data Berhasil Ditambahkan !";
  }else{
    $result['pesan'] = "Data Gagal Ditambahkan !";
  }
}

echo json_encode($result);

?>