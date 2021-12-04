/*
    Export Default:
    - tidak boleh dalam satu module, membuat lebih dari satu export default
    - rekomendasi: 
        * Bedakan antara default dan named di dalam sebuah module, karena jika digabungkan kadang akan membingungkan ketika melakukan import
        * Sebisa mungkin selalu gunakan export named dibandingkan export default. karena pada export default tidak memiliki named, sehingga tidak dapat dideteksi oleh fitur auto complete. selain itu pada export default, susah untuk di debug. 
*/

/*
// 1. export default function
// membuat default function
export default function (name) {  // default function berupa anonymous function. tidak menggunakan nama function
    console.log(`Hello ${name}, ini menggunakan export default`);
}
*/

/*
// 2. export default variable
export default name = 'saddam';
*/

/*
// 3. export default class
export default class {  // tidak menggunakan nama class
    static fullName = 'saddam bin husein';

    constructor(firstName) {
        this.firstName = firstName;
    }

    sayHello(name) {
        console.log(`Hello ${name}, my name is ${this.firstName}`);
        
    }

}
*/

// 4. export default dan named export
export const title = 'Belajar JavaScript Module'; // named export

const content = 'Content Belajar JavaScript Module';

const author = 'Saddam Bin Husein'

export {content};  // named export (export multiple)

export default author;  // export default (hanya boleh satu)





