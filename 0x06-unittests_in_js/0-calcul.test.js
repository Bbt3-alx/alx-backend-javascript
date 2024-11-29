const { calculateNumber } = require('./0-calcul.js');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('Tests Cases for calculateNumber', function() {
    
    it('should return 0 when calculating the sum of 0 and 0', function() {
        const calculNum = calculateNumber(0, 0);
        assert.strictEqual(calculNum, 0);
    });

    it('should return -10 when calculating the sum of -10 and 0', () => {
        const result = calculateNumber(-10, 0);
        assert.strictEqual(result, -10);
    });
    
    it('should return 3 when calculating the sum of 1 and 2', function() {
        const calculNum = calculateNumber(1, 2);
        assert.strictEqual(calculNum, 3);
    });

    it('should return 7 when calculating the sum of -3 and 10', () => {
        const result = calculateNumber(-3, 10);
        assert.strictEqual(result, 7);
    });

    it('should return 8 when calculating the sum of 5.3 and 3.1', () => {
        const result = calculateNumber(5.3, 3.1);
        assert.strictEqual(result, 8);
    });

    it('should return -2 when calculating the sum of -5.3 and 3.1', () => {
        const result = calculateNumber(-5.3, 3.1);
        assert.strictEqual(result, -2);
    });

    it('should return -37 when calculating the sum of -2.3 and -34.5', () => {
        const result = calculateNumber(-2.5, -34.7);
        assert.strictEqual(result, -37);
    });

    it('should return 600028000000 when calculating the sum of 100004000000 and 500024000000', function() {
        const calculNum = calculateNumber(100004000000, 500024000000);
        assert.strictEqual(calculNum, 600028000000);
    });
});
