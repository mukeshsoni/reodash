import first from '../../src/array/first'
import chai from 'chai'
let expect = chai.expect

describe('first', function () {
    it('should first arr values as per the function provided', function () {
        expect(first([2, 1])).to.eql(2)
        expect(first([])).to.eql(undefined)
    })
})
