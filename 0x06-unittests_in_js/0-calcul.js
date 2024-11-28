const calculateNumber = (a, b) => {
    return Math.round(a + b)
}
module.exports = {
    calculateNumber
};

console.log(calculateNumber('10', -10))
