const name = 'Amin Bonda';

function sayHello(name) {
    console.info(`Hello ${name}`);
}

class Person {
    static firstName = 'Saddam';
}

export {sayHello, Person, name}  // biasa diletakkan paling bawah. jadi yang diexpose (export) 3 data. menggunakan kurung kurawal