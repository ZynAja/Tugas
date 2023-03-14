<?php 
require_once "jquery.php";

$data = stripslashes(file_get_contents("php://input"));
$dataPlgn = json_decode($data, true);

$pelanggan = $dataPlgn['pelanggan'];
$alamat = $dataPlgn['alamat'];
$telp = $dataPlgn['telp'];
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