var expect = require('chai').expect;
var linesCount = require('../src/files');

describe('test server-side callback', function() {

    it('should pass this canary test', function () {
        expect(true).to.eql(true);
    });

    it('should return correct lines count for a valid file', function(done) {
        var callback = function(count) {
            expect(count).to.be.eql(15);
            done();
        };

        linesCount('src/files.js', callback);
    });

    it('should report error for an invalid file name', function(done) {
        var onError = function(error) {
            expect(error).to.be.eql('unable to open file src/flies.js');
            done();
        };
        linesCount('src/flies.js', undefined, onError);
    });
});