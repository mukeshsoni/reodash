import fromPairs from '../../src/array/fromPairs'
import chai from 'chai'
let expect = chai.expect

describe('fromPairs', function () {
    it('should fromPairs arr values as per the function provided', function () {
        expect(fromPairs([['fred', 30], ['barney', 40]])).to.eql({ 'fred': 30, 'barney': 40 })
    })
})
