import remove from '../../src/array/remove'
import chai from 'chai'
let expect = chai.expect

describe('remove', function () {
    it('should remove arr values as per the function provided', function () {
        var array = [1, 2, 3, 4]
        expect(remove(array, (n) =>  n % 2 == 0)).to.eql([1, 3])
    })
})
