const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function binarySearch(arr, item) {
	let start = 0;
	let end = arr.length;
	let middle;
	let found = false;
	let position = -1;

	while (found === true || start <= end) {
		middle = Math.floor((start + end) / 2);

		if (arr[middle] === item) {
			found = true;
			position = middle;
			return position;
		}

		if (item > arr[middle]) {
			start = middle + 1;
		} else {
			end = middle - 1
		}
	}

	return position
}

function recursiveBinarySearch(arr, item, start, end) {
	const middle = Math.floor((start + end) / 2);
	if (arr[middle] === item) {
		return middle
	}

	if (arr[middle] > item) {
		return recursiveBinarySearch(arr, item, middle + 1, end)
	} else {
		return recursiveBinarySearch(arr, item, start, middle - 1)
	}
}

console.log(binarySearch(list, 8))
console.log(recursiveBinarySearch(list, 8, 0 , list.length))
