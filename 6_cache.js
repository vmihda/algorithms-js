function cacheFunction(fn) {
	const cache = {};
	return function (n) {
		if (cache[n]) {
			console.log('from cache')
			return cache[n];
		}
		const result = fn(n);
		cache[n] = result;
		console.log('new value of cache')
		return result;
	}
}

function factorial(n) {
	let result = 1
	while (n !== 1) {
		result *= n
		n -= 1
	}

	return result
}

const cacheFactr = cacheFunction(factorial)

console.log(cacheFactr(4))
console.log(cacheFactr(4))

