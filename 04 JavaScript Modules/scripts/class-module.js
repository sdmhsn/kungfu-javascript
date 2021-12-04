export class Person {
    constructor(firstName) {
        this.firstName = firstName;
    }

    sayHello(name) {
        console.log(`Hello ${name}, my name is ${this.firstName}`);
    }

}