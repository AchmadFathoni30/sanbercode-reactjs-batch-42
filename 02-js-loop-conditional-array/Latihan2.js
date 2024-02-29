// Soal 1
let namaLengkap = 'Ahcmad Fathoni';

console.log(namaLengkap)

// Soal 2
let word = 'JavaScript';
let second = 'is';
let third = 'awesome';

let outputGabunganVariable = (word + " " +second+ " " +third);
console.log(outputGabunganVariable);

// Soal 3
let hello = 'Hello';
let world = 'World!!';

let output = (`${hello} ${world}`);
console.log(output);

// Soal 4
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";
let kelilingPersegiPanjang = 2 * ( parseInt(panjangPersegiPanjang) + parseInt(lebarPersegiPanjang));

console.log(kelilingPersegiPanjang);

// Soal 5
let sentences = 'wah javascript itu keren sekali';

let firstWords = sentences.substring(0, 3);
let secondWords = sentences.substring(4, 14);
let thirdWords = sentences.substring(15, 18);
let fourthWords = sentences.substring(19, 24);
let fifthWords = sentences.substring(25, 31)

console.log('Kata Pertama: ' + firstWords);
console.log('Kata Kedua: ' + secondWords);
console.log('Kata Ketiga: ' + thirdWords);
console.log('Kata Keempat: ' + fourthWords);
console.log('Kata Kelima: ' + fifthWords);

// Soal 6
var sentence = "I am going to be React JS Developer";

var exampleFirstWord = sentence[0];
var exampleSecondWord = sentence[2] + sentence[3];
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];
var fourthWord = sentence[11] + sentence[12];
var fifthWord = sentence[14] + sentence[15];
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21];
var seventhWord = sentence[23] + sentence[24];
var eighthWord = sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34];

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + exampleSecondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
console.log('Sixth Word: ' + sixthWord);
console.log('Seventh Word: ' + seventhWord);
console.log('Eighth Word: ' + eighthWord);

// Soal 7
let txt = "I can eat bananas all day";
let hasil = txt.slice(10, 17);

console.log(hasil);

// Soal 8
var nilaiDoe = 50;

if (nilaiDoe >= 80) {
    console.log("indeksnya A");
} else if(nilaiDoe >= 70 && nilaiDoe < 80) {
    console.log("indeksnya B");
} else if(nilaiDoe >= 60 && nilaiDoe < 70) {
    console.log("indeksnya C");
} else if(nilaiDoe >= 50 && nilaiDoe < 60) {
    console.log("indeksnya D");
} else if(nilaiDoe < 50) {
    console.log("indeksnya E");
}

// Soal 9
const angka = 2;

const jawaban = angka == 2 ? "angka nya 2" : "bukan angka 2";
console.log(jawaban);

// Soal 10
var traffic_lights = "red";

switch (traffic_lights) {
    case "red":
        console.log("berhenti");
        break;
    case "yellow":
        console.log("hati-hati");
        break;
    case "green":
        console.log("berjalan");
        break;
}

// Soal 11
let a = 0;
for (let a = 0; a < 10; a++) {
    console.log(a);
}

// Soal 12
let b = 0;
for (let b = 0; b < 10; b++) {
    if (b % 2 == 1) {
        console.log(b);
    }
}

// Soal 13
let c = 0;
for (let c = 0; c < 10; c++) {
    if (c % 2 == 0) {
        console.log(c);
    }
}

// Soal 14
let array1 = [1,2,3,4,5,6];

console.log(array1[5]);

// Soal 15
let array2 = [5,2,4,1,3,5];

array2.sort();
console.log(array2);

// Soal 16
let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"];

for (let i = 0; i < array3.length; i++) {
    console.log(array3[i]);
}

// Soal 17
let array4 = [1,2,3,4,5,6,7,8,9,10];

for (let array4 = 1; array4 <= 10; array4++) {
    if (array4 % 2 == 0) {
        console.log(array4);
    }
}

// Soal 18
let kalimat = ["saya", "sangat", "senang", "belajar", "javascript"];

let hasilnya = kalimat.join();
console.log(hasilnya);

// Soal 19
var sayuran = [];

sayuran.push('Kangkung', 'Bayam', 'Buncis', 'Kubis', 'Timun', 'Seledri', 'Tauge');
console.log(sayuran);