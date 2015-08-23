var should = require('chai').should(),
    bowerPackageURL = require('../dist/bowerPackageURL');

describe('bower-package-url', function() {
    it('should get the repository URL associated with a bower package name', function(done) {
        bowerPackageURL('lodash', function(err, url) {
            should.not.exist(err);
            url.should.equal('git://github.com/lodash/lodash.git');
            done();
        });
    });
});