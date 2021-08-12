//Пример кода на TypeScript касательно ТИПА.

interface Description {
	hair?: string;
	eyes?: string;
	heigth: number;
	weigth?: string;
}

type User = {
	name: string;
	lastName?: string;
}

function fio(name: User): string {
	return name.name.concat(name.lastName ? ` ${name.lastName}` : ` ???`)
}

let user: User = { name: "Oleg", lastName: "Borodkin" }

class RRR implements Description {
	name: string = "Vasilisa";
	lastName: string = "Ryaguzova";
	heigth = 180;
}

let vasilisa = new RRR;

// инит переменной типом string по ключу `typeof` и присваиванием значения
let rrr: typeof vasilisa.name = "Васёк-девочка"

console.log(rrr, fio(user), fio(vasilisa), typeof (user) == typeof (vasilisa));


