// ============== 1 ===============
/*
Buatlah kode javascript menggunakan pseudocode di bawah ini

FOR i FROM 1 TO 10 INCREMENT BY 1
    DISPLAY "Perkalian " CONCAT i
    FOR j FROM 1 TO 10 INCREMENT BY 1
        DISPLAY "Hasil dari " CONCAT i CONCAT " x " CONCAT j CONCAT " adalah " CONCAT (i TIMES j)
    END FOR
END FOR
*/

// tulis kode dibawah sini

for(i = 1; i < 10;i++){
    console.log("Perkalian " + i);
    for (j = 1; j < 10; j++){
        console.log("Hasil dari " + i + j + "adalah " + (i * j));
    }
}