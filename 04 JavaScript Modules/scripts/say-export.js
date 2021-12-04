/*
    export:
    - digunakan untuk mengexpose suatu variable, function atau class dari suatu module, sehingga bisa diakses / ditangkap / digunakan dari luar 
    - export bisa ditambahkan diawal sebuah variable, function atau class
*/

export function sayHello(name) {
    console.info(`Hello ${name}`);
}

export function sayGoodbye(name) {
    console.log(`Good Bye ${name}`);
}

const name = 'Amin';  // variable juga dapat diexport