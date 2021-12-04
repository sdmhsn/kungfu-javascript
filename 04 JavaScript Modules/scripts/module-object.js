const firstName = 'Saddam';
const middleName = 'Bin';
const lastName = 'Husein';

function hello(name) {
    console.log(`Hello ${name}`);
}

class Person {
    constructor() {
        this.name = 'Amin';
    }
}

export {firstName, middleName, lastName, hello, Person};  // seperti biasa, tetap harus di export