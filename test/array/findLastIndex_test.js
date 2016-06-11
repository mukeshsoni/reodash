import findLastIndex from '../../src/array/findLastIndex'
import chai from 'chai'
let expect = chai.expect

describe('findLastIndex', function () {
    it('should findLastIndex arr values as per the function provided', function () {
        var users = [
            { 'user': 'barney',  'active': false },
            { 'user': 'fred',    'active': false },
            { 'user': 'pebbles', 'active': true }
        ]

        expect(findLastIndex(users, (o) => o.user === 'barney')).to.eql(0)
        expect(findLastIndex(users, (o) => o.active === false)).to.eql(1)
        expect(findLastIndex(users, (o) => o.user === 'nobody')).to.eql(-1)
    })
})
