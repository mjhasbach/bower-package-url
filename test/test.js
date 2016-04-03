var uuid = require('uuid'),
    should = require('chai').should(),
    bowerPackageURL = require('../dist/bowerPackageURL');

describe('bower-package-url', function() {
    var pkg = 'lodash';

    it('should throw an error if cb is not a function', function(done) {
        (function() {bowerPackageURL(pkg);}).should.throw();
        done();
    });
    it('should call back an error if packageName is not a string', function(done) {
        bowerPackageURL(null, function(err) {
            err.should.be.an('error');
            done();
        });
    });
    it('should call back an error if packageName is not found on Bower', function(done) {
        bowerPackageURL(uuid.v4(), function(err) {
            err.should.be.an('error');
            done();
        });
    });
    it('should get the repository URL associated with a Bower package name', function(done) {
        bowerPackageURL(pkg, function(err, url) {
            should.not.exist(err);
            url.should.equal('git://github.com/lodash/lodash.git');
            done();
        });
    });
});