import flatten from '../../src/array/flatten'
import chai from 'chai'
let expect = chai.expect

describe('flatten', function () {
    it('should flatten arr values as per the function provided', function () {
        expect(flatten([1, [2, [3, [4]], 5]])).to.eql([1, 2, [3, [4]], 5])
    })
})
