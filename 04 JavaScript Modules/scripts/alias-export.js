/*
// 1. alias pada export (tidak direkomendasikan)
const name = 'Amin Bonda';

function sayHello(name) {
    console.info(`Hello ${name}`);
}

class Person {
    static firstName = 'Saddam';
}

export {name as nama, sayHello as hello, Person as Orang}; // pemberian alias pada export
*/

// 2. alias pada import (direkomendasikan)
const name = 'Amin Bonda';

function sayHello(name) {
    console.info(`Hello ${name}`);
}

class Person {
    static firstName = 'Saddam';
}

export {name, sayHello, Person};  // nama variable, function dan class tetap