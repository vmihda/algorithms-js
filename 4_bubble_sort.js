const list = [4, 1, 2, 3, 4, 6, 7, 2, 4, 6, 8, 8, 2, 11, 2, 4, 67, 0]

function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				let tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}

	return arr
}

console.log("bubbleSort", bubbleSort(list))
