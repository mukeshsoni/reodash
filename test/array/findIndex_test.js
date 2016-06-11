import findIndex from '../../src/array/findIndex'
import chai from 'chai'
let expect = chai.expect

describe('findIndex', function () {
    it('should findIndex arr values as per the function provided', function () {
        var users = [
            { 'user': 'barney',  'active': false },
            { 'user': 'fred',    'active': false },
            { 'user': 'pebbles', 'active': true }
        ]

        expect(findIndex(users, (o) => o.user === 'barney')).to.eql(0)
        expect(findIndex(users, (o) => o.active === true)).to.eql(2)
        expect(findIndex(users, (o) => o.user === 'nobody')).to.eql(-1)
    })
})
