"use strict";
//Пример кода на TypeScript касательно ТИПА.
function fio(name) {
    return name.name.concat(name.lastName ? ` ${name.lastName}` : ` ???`);
}
let user = { name: "Oleg", lastName: "Borodkin" };
class RRR {
    constructor() {
        this.name = "Vasilisa";
        this.lastName = "Ryaguzova";
        this.heigth = 180;
    }
}
let vasilisa = new RRR;
// инит переменной типом string по ключу `typeof` и присваиванием значения
let rrr = "Васёк девочка";
console.log(rrr, fio(user), fio(vasilisa), typeof (user) == typeof (vasilisa));
