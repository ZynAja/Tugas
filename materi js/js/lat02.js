// document.querySelector("#paragraf").innerHTML = "saya belajar Javascript";

// document.querySelector("#content").innerHTML = "<h1> ganti isi </h1>";

let tanggal = 10
let bulan = 1
let hasil = "tanggal dan bulan benar";

if (bulan == 1) {
    if (tanggal < 20) {
        hasil = "Zodiak anda Capricorn";    
    }else{
        hasil = "Zodiak anda Aquarius";
    }
}

if (bulan == 2) {
    if (tanggal < 20) {
        hasil = "Zodiak anda Aquarius"
    }else{
        hasil = "Zodiak anda Pisces"
    }
}

if (bulan == 3) {
    if (tanggal < 20) {
        hasil = "Zodiak anda Aquarius"
    }else{
        hasil = "Zodiak anda Pisces"
    }
}

if (bulan == 4) {
    if (tanggal < 20) {
        hasil = "Zodiak anda Pisces"
    }else{
        hasil = "Zodiak anda Aries"
    }
}

if (bulan == 5) {
    if (tanggal < 20) {
        hasil = "Zodiak anda Aquarius"
    }else{
        hasil = "Zodiak anda Pisces"
    }
}

console.log(hasil);


