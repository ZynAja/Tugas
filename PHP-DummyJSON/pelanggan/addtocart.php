<?php 
require_once "jquery.php";

$response = stripslashes(file_get_contents('php://input'));
$ordrDtl = json_decode($response, true);

$idorder = $ordrDtl['idorder'];
$idbarang = $ordrDtl['idbarang'];
$jumlah = $ordrDtl['jumlah'];
$harga = $ordrDtl['harga'];
$barang = $ordrDtl['barang'];
$idpelanggan = $ordrDtl['idpelanggan'];
$pelanggan = $ordrDtl['pelanggan'];
$alamat = $ordrDtl['alamat'];

if (!empty($idorder&&$idbarang&&$jumlah&&$harga&&$barang&&$idpelanggan&&$pelanggan&&$alamat)) {
  $sql = "INSERT INTO `tblorderdetail`(`idorderdetail`, `idorder`, `idbarang`, `jumlah`, `harga`, `barang`, `idpelanggan`, `pelanggan`, `alamat`) VALUES ('','$idorder','$idbarang','$jumlah','$harga','$barang','$idpelanggan','$pelanggan','$alamat')";
  
  $result = mysqli_query($conn,$sql);

  echo "Data Berhasil Masuk Ke Keranjang !";
}else {
  echo "Data Gagal CheckOut !";
};

?>