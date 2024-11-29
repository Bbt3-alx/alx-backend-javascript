const calculateNumber = (type, a, b) => {
	if (type === 'SUM') {
		return Math.round(a) + Math.round(b);
	} else if (type === 'SUBTRACT') {
		return Math.round(a) - Math.round(b);
	} else if (type === 'DIVIDE') {
		if (Math.round(b) === 0) {
		return 'Error';
		} else {
		return Math.round(a) / Math.round(b);
		}
	}
}
module.exports = {
    calculateNumber
};
console.log(calculateNumber('SUM', 1.4, 4.5));
console.log(calculateNumber('SUBTRACT', 1.4, 4.5));
console.log(calculateNumber('DIVIDE', 1.4, 4.5));
console.log(calculateNumber('DIVIDE', 1.4, 0));
