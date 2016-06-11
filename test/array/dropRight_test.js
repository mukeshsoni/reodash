import dropRight from '../../src/array/dropRight'
import chai from 'chai'
let expect = chai.expect

describe('dropRight', function () {
    it('should add number', function () {
        expect(dropRight([1, 2, 3])).to.eql([1, 2])
        expect(dropRight([1, 2, 3], 2)).to.eql([1])
        expect(dropRight([1, 2, 3], 5)).to.eql([])
        expect(dropRight([1, 2, 3], 0)).to.eql([1, 2, 3])
    })
})
