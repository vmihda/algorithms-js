function linearSearch(arr, item) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === item) {
			return i
		}
	}

	return null
}

console.log(linearSearch([9,3,5,6,11,4], 3))
