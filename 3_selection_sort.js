const arr = [-4, -2, 4, 5, 3, 41, 10, 12, -5, 2, 3, 4, 5, 9, 8, 6, 32, 5, 45, 6];

function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let indexMin = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[indexMin]) {
				indexMin = j
			}
		}
		let tmp = array[i];
		array[i] = array[indexMin];
		array[indexMin] = tmp;
	}
	return array
}


console.log("selectionSort", selectionSort(arr))
