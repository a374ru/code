
function rangesOF(...range: string[] | number[]): number[] {

	// составляем массив из измененных входящих значений
	let per33: number[] = [];

	// попробуйте заменить -of- на -in- и внимательно просмотрите результат вывода в консоль
	for (let item of range) {
		per33.push(Number(item) * 2);
	}
	return per33;
}

console.log(rangesOF(22,33).join(', '))


