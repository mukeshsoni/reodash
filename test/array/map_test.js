import map from '../../src/array/map'
import chai from 'chai'
let expect = chai.expect

describe('map', function () {
    it('should map arr values as per the function provided', function () {
        let add2 = (a) => a + 2
        expect(map([1, 2, 4, 10], add2)).to.eql([3, 4, 6, 12])
    })
})
