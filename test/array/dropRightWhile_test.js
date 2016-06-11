import dropRightWhile from '../../src/array/dropRightWhile'
import chai from 'chai'
let expect = chai.expect

describe('dropRightWhile', function () {
    it('should dropRightWhile arr values as per the function provided', function () {
        var users = [
            { 'user': 'barney',  'active': true },
            { 'user': 'fred',    'active': false },
            { 'user': 'pebbles', 'active': false }
        ];

        expect(dropRightWhile(users, (o) => !o.active)).to.eql([{ 'user': 'barney', 'active': true }])
    });
});
