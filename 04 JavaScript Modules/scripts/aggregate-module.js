/*
    Aggregating Module:
    - menyatukan beberapa module
    - module - module dikumpulkan ke dalam sebuah aggregate module
    - jika ada nama variable, function, class dll yang sama, maka dapat ditangani menggunakan alias
    - direkomendasikan apabila module sudah semakin banyak, sehingga tidak diimport satu persatu dari tiap-tiap module secara manual
*/

export {name} from './variable-module.js';
export {sayHello} from './say-export.js';
export {Person} from './class-module.js';