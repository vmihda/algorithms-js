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

console.log(binarySearch(list, 8))
