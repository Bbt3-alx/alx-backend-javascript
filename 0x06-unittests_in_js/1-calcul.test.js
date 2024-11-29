const { expect } = require('chai');
const { describe, it } = require('mocha')
const should = require('chai').should();
const assert = require('assert');
const { calculateNumber } = require('./1-calcul');


describe('Tests Cases of chai', () => {
  describe('Test SUM', () => {
    it('should return 0 when calculating the sum of 0 and 0', function() {
      const result = calculateNumber('SUM', 0, 0);
      assert.strictEqual(result, 0);
    });

    it('should return -10 when calculating the sum of -10 and 0', () => {
      const result = calculateNumber('SUM', -10, 0);
      assert.strictEqual(result, -10);
    });

    it('should return 3 when calculating the sum of 1 and 2', function() {
      const calculNum = calculateNumber('SUM', 1, 2);
      assert.strictEqual(calculNum, 3);
    });

    it('should return 7 when calculating the sum of -3 and 10', () => {
      const result = calculateNumber('SUM', -3, 10);
      assert.strictEqual(result, 7);
    });

    it('should return 8 when calculating the sum of 5.3 and 3.1', () => {
      const result = calculateNumber('SUM', 5.3, 3.1);
      assert.strictEqual(result, 8);
    });

    it('should return -2 when calculating the sum of -5.3 and 3.1', () => {
      const result = calculateNumber('SUM', -5.3, 3.1);   
      assert.strictEqual(result, -2);
    });

    it('should return -37 when calculating the sum of -2.3 and -34.5', () => {
      const result = calculateNumber('SUM', -2.5, -34.7);
      assert.strictEqual(result, -37);
    });
	
    it('should return 600028000000 when calculating the sum of 100004000000 and 500024000000', function() {
      const calculNum = calculateNumber('SUM', 100004000000, 500024000000);
      assert.strictEqual(calculNum, 600028000000);
    });
  });

  // TEST SUBTRACT
  describe('Test Cases for Subtraction', () => {
    it('should return 0 when subtracting 0 and 0', () => {
      const result = calculateNumber('SUBTRACT', 0, 0);
      assert.strictEqual(result, 0);
    });

    it('should return 1 when subtrating 3 and 2', () => {
      const result = calculateNumber('SUBTRACT', 3, 2);
      assert.strictEqual(result, 1);
    });

    it('should return -1 when subtrating 10 and 11', () => {
      const result = calculateNumber('SUBTRACT', 10, 11);
      assert.strictEqual(result, -1);
    });

   it('should return -2 when subtracting -11 and -9', () => {
     const result = calculateNumber('SUBTRACT', -11, -9);
     assert.strictEqual(result, -2);
   });

   it('should return -25 when subtracting -15 and 10', () => {
     const result = calculateNumber('SUBTRACT', -15, 10);
     assert.strictEqual(result, -25);
   });

   it('should return -110111000110 when subtrating 245355000145 and 355466000255', () => {
     const result = calculateNumber('SUBTRACT', 245355000145, 355466000255);
     assert.strictEqual(result, -110111000110);
   });
  });

  // TEST DIVIDE
  describe('Test Cases for Division', () => {
    it('should return 5 when dividing 10 by 2', () => {
      const result = calculateNumber('DIVIDE', 10, 2);
      assert.strictEqual(result, 5);
    });

    it('should return 0 when deviding 0 by 10', () => {
      const result = calculateNumber('DIVIDE', 0, 10);
      assert.strictEqual(result, 0);
    });

    it('should return "Error" when deviding 10 by 0', () => {
      const result = calculateNumber('DIVIDE', 10, 0);
      assert.strictEqual(result, 'Error');
    });

    it('should return 5.5 when deviding 11 by 2', () => {
      const result = calculateNumber('DIVIDE', 11, 2);
      assert.strictEqual(result, 5.5);
    });

    it('should return -10 when deviding -100 by 10', () => {
      const result = calculateNumber('DIVIDE', -100, 10);
      assert.strictEqual(result, -10);
    });

    it('should return -11.5 when deviding -23 by 2', () => {
      const result = calculateNumber('DIVIDE', -23, 2);
      assert.strictEqual(result, -11.5);
    });

    it('should return 1 when deviding -23 by -23', () => {
      const result = calculateNumber('DIVIDE', -23, -23);
      assert.strictEqual(result, 1);
    });	  

    it('should return 0.6902347903005916 when deviding 245355000145 by 355466000255', () => {
      const result = calculateNumber('DIVIDE', 245355000145, 355466000255);
      assert.strictEqual(result, 0.6902347903005916);
    });
  });
});

