let tabel = document.querySelector("#tabel");
let cart = document.querySelector("#cart");
let no = 1;

function allProducts() {
  axios.get("https://dummyjson.com/products").then(function (response) {
    let produk = response.data.products;
    let out =
      "<tr><th>No</th><th>Barang</th><th>Harga</th><th>Update</th><th>Hapus</th><th>Beli</th></tr>";
    produk.forEach((el) => {
      out += `<tr>
        <td>${el.id}</td>
        <td>${el.title}</td>
        <td>${el.price}</td>
        <td><button
        type="button"
        class="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#updtProduk"
        onclick="cariProduk(${el.id})"
      >
        Update
      </button>
      <!-- Modal -->
      <div
        class="modal fade"
        id="updtProduk"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                UPDATE PRODUCTS
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
              <table>
                <tr>
                  <td><input type="text" id="id" name="id" hidden/></td>
                <tr>
                  <td><label for="barang">Barang : </label></td>
                  <td><input type="text" id="barang" name="barang" /></td>
                </tr>
                <tr>
                  <td><label for="harga">Harga : </label></td>
                  <td><input type="text" id="harga" name="harga" /></td>
                </tr>
              </table>
            </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onclick="updtProduk()"
              >
                Kirim
              </button></td>
              <td><button class="btn btn-danger" onclick="delProduk(${el.id})">Hapus</button></td>
              <td><button class="btn btn-success" onclick="cartProduk(${el.id})">Beli</button></td>
      </tr>`;
    });
    tabel.innerHTML = out;
  });
}

function cariBarang() {
  let id = document.getElementById("cariId").value;

  axios.get("https://dummyjson.com/products/" + id).then(function (response) {
    let out = "<tr><th>no</th><th>title</th><th>Harga</th></tr>";

    out += `<tr>
            <td>${response.data.id}</td>
            <td>${response.data.title}</td>
            <td>${response.data.price}</td>
          </tr>`;

    tabel.innerHTML = out;
  });
}

function categoryBarang() {
  let category = document.querySelector("#cariCategory").value;

  axios
    .get("https://dummyjson.com/products/category/" + category)
    .then(function (response) {
      let category = response.data.products;
      let out = "<tr><th>no</th><th>title</th><th>Harga</th></tr>";
      category.forEach((el) => {
        out += `<tr>
            <td>${el.id}</td>
            <td>${el.title}</td>
            <td>${el.price}</td>
          </tr>`;

        tabel.innerHTML = out;
      });
    });
}

function cariProduk(id) {
  let idP = id;

  axios.get("https://dummyjson.com/products/" + idP).then(function (response) {
    document.getElementById("id").value = response.data.id;
    document.getElementById("barang").value = response.data.title;
    document.getElementById("harga").value = response.data.price;
  });
}
function updtProduk() {
  let id = document.getElementById("id").value;
  let data = {
    title: document.getElementById("barang").value,
    price: document.getElementById("harga").value,
  };

  axios
    .put("https://dummyjson.com/products/" + id, JSON.stringify(data))
    .then(function (response) {
      console.log(data);
    });
}

function delProduk(id) {
  let idP = id;
  let data = {
    title: document.getElementById("barang").value,
    price: document.getElementById("harga").value,
  };

  axios
    .delete("https://dummyjson.com/products/" + idP, JSON.stringify(data))
    .then(function (response) {
      console.log(data);
    });
}

var idbrg = "";
var brg = "";
var hrg = "";
function cartProduk(id) {
  axios.get("https://dummyjson.com/products/" + id).then(function (response) {
    let out =
      "<tr><th>No</th><th>Pembeli</th><th>Title</th><th>Harga</th><th>Jumlah</th><th>Pembayaran</th></tr>";

    out += `<tr>
            <td>${(idbrg = response.data.id)}</td>
            <td id="orderBy"></td>
            <td>${(brg = response.data.title)}</td>
            <td>${(hrg = response.data.price)}</td>
            <td><input type="number"  id="jumlah"></td>
            <td id="pembayaran"></td>
          </tr>`;

    cart.innerHTML = out;
  });
}

//      PELANGGAN
function allPelanggan() {
  axios
    .get("http://localhost/pelanggan/select.php")
    .then(function (response) {
      let pelanggan = response.data;
      let out =
        "<tr><th>No</th><th>Pelanggan</th><th>Alamat</th><th>Telp</th><th>Update</th><th>Delete</th><th>OrderBy</th></tr>";
      pelanggan.forEach((el) => {
        out += `<tr>
        <td>${el.idpelanggan}</td>
        <td>${el.pelanggan}</td>
        <td>${el.alamat}</td>
        <td>${el.telp}</td>
        <td><button
        type="button"
        class="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1"
        onclick="cariPelanggan(${el.idpelanggan})"
      >
        Update
      </button>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                UPDATE PELANGGAN
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
              <table>
                <tr>
                  <td><input type="text" id="idPelanggan" name="idPelanggan" hidden/></td>
                <tr>
                  <td><label for="pelanggan">Pelanggan : </label></td>
                  <td><input type="text" id="plgn" name="pelanggan" /></td>
                </tr>
                <tr>
                  <td><label for="alamat">Alamat : </label></td>
                  <td><input type="text" id="almt" name="alamat" /></td>
                </tr>
                <tr>
                  <td><label for="telp">Telp : </label></td>
                  <td><input type="text" id="tlp" name="telp" /></td>
                </tr>
              </table>
            </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onclick="updatePelanggan()"
              >
                Kirim
              </button></td>
              <td><button class="btn btn-danger" onclick="delPelanggan(${
                el.idpelanggan
              })">Hapus</button></td>
              <td><button class="btn btn-secondary" onclick="orderPelanggan(${
                el.idpelanggan
              })">Order</button></td>
      </tr>`;
      });
      tabel.innerHTML = out;
    });
  allPelanggan();
}

function addPelanggan() {
  let data = {
    pelanggan: document.getElementById("pelanggan").value,
    alamat: document.querySelector("#alamat").value,
    telp: document.querySelector("#telp").value,
  };
  console.log(data);
  axios
    .post(
      "http://localhost/pelanggan/insert.php",
      JSON.stringify(data)
    )
    .then(function (response) {
      alert(response.data["pesan"]);

      allPelanggan();
    });
}

function cariPelanggan(id) {
  let data = {
    idpelanggan: id,
  };

  axios
    .post(
      "http://localhost/pelanggan/cariData.php",
      JSON.stringify(data)
    )
    .then(function (response) {
      document.querySelector("#idPelanggan").value = response.data.idpelanggan;
      document.querySelector("#plgn").value = response.data.pelanggan;
      document.querySelector("#almt").value = response.data.alamat;
      document.querySelector("#tlp").value = response.data.telp;
    });
}

function updatePelanggan() {
  let data = {
    idpelanggan: document.querySelector("#idPelanggan").value,
    pelanggan: document.querySelector("#plgn").value,
    alamat: document.querySelector("#almt").value,
    telp: document.querySelector("#tlp").value,
  };
  axios
    .post(
      "http://localhost/pelanggan/update.php",
      JSON.stringify(data)
    )
    .then(function (response) {
      document.querySelector("#pesan").innerHTML = response.data.pesan;
      allPelanggan();
    });
}

function delPelanggan(id) {
  let data = {
    idpelanggan: id,
  };
  axios
    .post(
      "http://localhost/pelanggan/delete.php",
      JSON.stringify(data)
    )
    .then(function (response) {
      document.querySelector("#pesan").innerHTML = response.data;
      allPelanggan();
    });
}

function orderPelanggan(id) {
  axios
    .get("http://localhost/pelanggan/selechwhere.php/?id=" + id)
    .then(function (response) {
      let order = response.data.pelanggan;
      document.querySelector("#orderBy").innerHTML = order;

      plgn = response.data.pelanggan;

      jumlah = document.getElementById("jumlah").value;

      idplgn = response.data.idpelanggan;
      alamat = response.data.alamat;

      let pmbyrn = `<button class="btn btn-primary" onclick="checkOut('${idbrg}', '${brg}', '${hrg}')"">CheckOut</button>`;
      document.querySelector("#pembayaran").innerHTML = pmbyrn;
    });
}

function checkOut(idbrg, brg, hrg) {
  let idordr = 4;
  let data = {
    idorder: idordr,
    idbarang: idbrg,
    jumlah: jumlah,
    harga: hrg,
    barang: brg,
    idpelanggan: idplgn,
    pelanggan: plgn,
    alamat: alamat,
  };

  axios
    .post(
      "http://localhost/pelanggan/addtocart.php",
      JSON.stringify(data)
    )
    .then(function (response) {
      document.querySelector("#pesan").innerHTML = response.data;
    });
}