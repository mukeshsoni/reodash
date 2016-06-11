import takeWhile from '../../src/array/takeWhile'
import chai from 'chai'
let expect = chai.expect

describe('takeWhile', function () {
    it('should takeWhile arr values as per the function provided', function () {
        var users = [
            { 'user': 'barney',  'active': false },
            { 'user': 'fred',    'active': false },
            { 'user': 'pebbles', 'active': true }
        ]

        expect(takeWhile(users, (o) => !o.active)).to.eql([{ 'user': 'barney', 'active': false }, { 'user': 'fred',    'active': false }])
    })
})
