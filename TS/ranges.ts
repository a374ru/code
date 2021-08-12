
function rangeOf(...range: number[] | string[]) {

	// составляем массив из измененных входящих значений
	let per33: number[] = [];

	// попробуйте заменить -of- на -in- и внимательно просмотрите результат вывода в консоль
	for (let item of range) {
		per33.push(Number(item) * 2);
	}
	return per33;
}

let array = rangeOf("111", "2", "3", "4", "55", "6", "7", "8");

for (let item of array) {
	console.log(item);
}


