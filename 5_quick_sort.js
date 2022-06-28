const list = [4, 1, 2, 3, 4, 6, 7, 2, 4, 6, 8, 8, 2, 11, 2, 4, 67, 0]

function quickSort(arr) {
	if (arr.length <= 1) {
		return arr
	}

	let pivotIndex = Math.floor(arr.length / 2);
	let pivot = arr[pivotIndex]
	let less = [];
	let grander = []

	for (let i = 0; i < arr.length; i++) {
		if (i === pivotIndex)
			continue
		if (pivot > arr[i])
			less.push(arr[i])
		else
			grander.push(arr[i])
	}

	return [...quickSort(less), pivot, ...quickSort(grander)]
}

