/**
 * @module bowerPackageURL
 * @author Matthew Hasbach
 * @copyright Matthew Hasbach 2015
 * @license MIT
 */

/**
 * The bowerPackageURL callback
 * @callback bowerPackageURLCallback
 * @param {Object} err - An error object if an error occurred
 * @param {string} url - The repository URL associated with the provided bower package name
 */

/**
 * Get the repository URL associated with a bower package name
 * @alias module:bowerPackageURL
 * @param {string} packageName - A bower package name
 * @param {bowerPackageURLCallback} cb - A callback to be executed after the repository URL is collected
 * @example
 bowerPackageURL('lodash', function(err, url) {
    if (err) { console.error(err); }
    console.log(url);
});
 */
function bowerPackageURL(packageName, cb) {
    if (typeof cb !== 'function') {
        throw new TypeError('cb must be a function');
    }
    if (typeof packageName !== 'string') {
        cb(new TypeError('packageName must be a string'));
        return;
    }

    http.get('https://bower.herokuapp.com/packages/' + packageName)
        .end(function(err, res) {
            cb(err, res.body.url);
        });
}