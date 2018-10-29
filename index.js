const Comparator = require('./comparator');

const merge = (a, b, comparator) => {
	let i = 0;
	let j = 0;
	const result = [];

	while (i < a.length && j < b.length) {
		result.push(comparator.lessThan(a[i], b[j]) ? a[i++] : b[j++]);
	}
	return result.concat(i < a.length ? a.slice(i) : b.slice(j));
};

module.exports = (a, compareFunction) => {
	const comparator = new Comparator(compareFunction);

	return (function mergeSort(a) {
		if (a.length > 1) {
			const middle = a.length >> 1;
			const left = mergeSort(a.slice(0, middle));
			const right = mergeSort(a.slice(middle));
			a = merge(left, right, comparator);
		}

		return a;
	})(a);
};
