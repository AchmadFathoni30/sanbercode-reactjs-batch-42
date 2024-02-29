// Soal 1
function cetakFunction() {
    return "Hallo nama saya <Achmad Fathoni>";
}

var tampung = cetakFunction();

console.log(tampung);

// Soal 2
function myFunction(angka, angka2) {
    return angka + angka2;
}

let output = myFunction(20, 7);

console.log(output);

// Soal 3
const Hello = () => {
    return "Hello";
}

console.log(Hello())

// Soal 4
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992];
let objDaftarPeserta = {
    Name : "John Doe",
    JK : "laki-lki",
    Hobi : "baca buku",
    Tahun : 1992
}

console.log(objDaftarPeserta)

// Soal 5
var buah =[
    {nama : "Nanas", warna : "Kuning", adaBijinya : "false", harga : 9000},
    {nama : "Jeruk", warna : "Orange", adaBijinya : "true", harga : 8000},
    {nama : "Semangka", warna : "Hijau & Merah", adaBijinya : "true", harga : 10000},
    {nama : "Pisang", warna : "Kuning", adaBijinya : "false", harga : 5000}
]
var arrayBuahFilter = buah.filter(function(item){
    return item.adaBijinya != "true";
})

console.log(arrayBuahFilter)

// Soal 6
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020
 }
 
 let {name, brand, year} = phone
 console.log(name, brand, year) 

 // Soal 7
 let dataBukuTambahan = {
    penulis : "john doe",
    tahunTerbit : 2020
 }

 let buku = {
    nama : "pemprograman dasar",
    jumlahHalaman : 172
 }

 let objOutput = {...dataBukuTambahan, ...buku}

 console.log(objOutput)

 // Soal 8
 let mobil = {
    merk : "bmw",
    color : "red",
    year : 2002
 }

 const functionObject = () => {
    return mobil
 }

 console.log(functionObject())