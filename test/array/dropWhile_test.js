import dropWhile from '../../src/array/dropWhile'
import chai from 'chai'
let expect = chai.expect

describe('dropWhile', function () {
    it('should dropWhile arr values as per the function provided', function () {
        var users = [
            { 'user': 'barney',  'active': false },
            { 'user': 'fred',    'active': false },
            { 'user': 'pebbles', 'active': true }
        ];

        expect(dropWhile(users, (o) => !o.active)).to.eql([{ 'user': 'pebbles', 'active': true }])
    });
});
