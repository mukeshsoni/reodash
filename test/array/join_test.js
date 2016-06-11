import join from '../../src/array/join'
import chai from 'chai'
let expect = chai.expect

describe('join', function () {
    it('should join arr values as per the function provided', function () {
        expect(join(['a', 'b', 'c'], '~')).to.eql('a~b~c')
        expect(join(['a', 'b', 'c'])).to.eql('a,b,c')
        expect(join([])).to.eql('')
        expect(join(['a'])).to.eql('a')
    });
});
