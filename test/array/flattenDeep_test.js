import flattenDeep from '../../src/array/flattenDeep'
import chai from 'chai'
let expect = chai.expect

describe('flattenDeep', function () {
    it('should flattenDeep arr values as per the function provided', function () {
        expect(flattenDeep([1, [2, [3, [4, [6]]], 5]])).to.eql([1, 2, 3, 4, 6, 5])
    })
})
