import pull from '../../src/array/pull'
import chai from 'chai'
let expect = chai.expect

describe('pull', function () {
    it('should pull arr values as per the function provided', function () {
        var array = ['a', 'b', 'c', 'a', 'b', 'c']
        expect(pull(array, 'a', 'c')).to.eql(['b', 'b'])
    })
})
