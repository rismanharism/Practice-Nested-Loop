/*
Buatlah program yang digunakan untuk mengasilkan output seperti di bawah ini
dimana program akan mencetak baris # sejumlah karakter yang ada di variabel str
dimana setiap barisnya akan dicetak sejumlah angka yang terdapat di string

contoh input:
var stringAngka = '263';

output: 
##
######
###

Penjelasan:
- Karakter pertama dari StringAngka adalah 2 sehingga menghasilkan ##
- Karakter kedua dari StringAngka adalah 6 sehingga menghasilkan ######
- Karakter ketiga dari StringAngka adalah 2 sehingga menghasilkan ###

contoh 2
var stringAngka = '23567123';
output:
##
###
#####
######
#######
#
##
###

*/

// tulis code di bawah sini

var stringAngka = '234';
let hasil = "0";
for ( let i = 0; i < stringAngka.length; i++){
    let pager = "";
    hasil = Number(stringAngka[i])
    for (let j = 0; j < hasil; j++){
        pager += "#"
}
console.log(pager); 
}