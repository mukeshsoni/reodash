import intersection from '../../src/array/intersection'
import chai from 'chai'
let expect = chai.expect

describe('intersection', function () {
    it('should intersection arr values as per the function provided', function () {
        expect(intersection([2, 1], [2, 3])).to.eql([2])
        expect(intersection([2, 1, 5], [2, 5, 3])).to.eql([2, 5])
        expect(intersection([2, 1], [4, 3])).to.eql([])
        expect(intersection([2, 1], [])).to.eql([])
        expect(intersection([], [])).to.eql([])
        expect(intersection([], [2, 4])).to.eql([])
    })
})
