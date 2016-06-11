import reverse from '../../src/array/reverse'
import chai from 'chai'
let expect = chai.expect

describe('reverse', function () {
    it('should reverse arr values', function () {
        expect(reverse([1, 2, 4])).to.eql([4, 2, 1])
    })
})
