import fill from '../../src/array/fill'
import chai from 'chai'
let expect = chai.expect

describe('fill', function () {
    it('should fill arr values as per the function provided', function () {
        expect(fill([1, 2, 3], 'a')).to.eql(['a', 'a', 'a'])
        expect(fill(Array(3), 2)).to.eql([2, 2, 2])
        expect(fill([4, 6, 8, 10], '*', 1, 3)).to.eql([4, '*', '*', 10])
    })
})
