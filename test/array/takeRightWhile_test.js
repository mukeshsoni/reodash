import takeRightWhile from '../../src/array/takeRightWhile'
import chai from 'chai'
let expect = chai.expect

describe('takeRightWhile', function () {
    it('should takeRightWhile arr values as per the function provided', function () {
        var users = [
            { 'user': 'barney',  'active': false },
            { 'user': 'fred',    'active': false },
            { 'user': 'pebbles', 'active': true }
        ]

        expect(takeRightWhile(users, (o) => o.active)).to.eql([{ 'user': 'pebbles', 'active': true }])
    })
})
