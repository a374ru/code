"use strict";
/**
 * Расширение класса и переопределение методов надкласса (суперкласса).
 */
class Az {
    constructor(paramm) {
        this.name1 = paramm;
    }
    methodAz() {
        let az = Math.random();
        console.log(`${az}`);
    }
    move(rrr = 99) {
        console.log(rrr);
    }
}
let superClass = new Az("Отправляем в конструктор суперкласса эту строку");
superClass.methodAz();
class Buki extends Az {
    constructor(name) {
        super(name);
    }
    print2(name) {
        console.log(`${this.name1}-${name}`);
    }
    // переопределение метода надкласса-родителя
    move(rrr = 12) {
        super.move(rrr);
    }
}
let extendSuperClass = new Buki("Изменяем строку суперкласса отправленную ранее");
extendSuperClass.print2("123");
extendSuperClass.move(1235);
