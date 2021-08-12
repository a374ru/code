/**
 * Расширение класса и переопределение методов надкласса (суперкласс).
 */


let name1: string;

class Az {

	constructor(paramm: string) {
		name1 = paramm;
	}
	methodAz() {
		let az = Math.random();
		console.log(`${az}`);
	}
	move(rrr: number = 99) {
		console.log(rrr);
	}
}

let superClass = new Az("Отправляем в конструктор суперкласса эту строку");
superClass.methodAz();


class Buki extends Az {

	constructor(name: string) {
		super(name);
	}

	print2(name: string) {
		console.log(`${name1}-${name}`);
	}

	// переопределение метода надкласса-родителя
	move(rrr: number = 12) {
		super.move(rrr);
	}
}

let extendSuperClass = new Buki("Изменяем строку суперкласса отправленную ранее");
extendSuperClass.print2("123");
extendSuperClass.move(1234);

