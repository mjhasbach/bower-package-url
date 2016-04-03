<a name="module_bowerPackageURL"></a>

## bowerPackageURL
**Author:** Matthew Hasbach  
**License**: MIT  
**Copyright**: Matthew Hasbach 2015  

* [bowerPackageURL](#module_bowerPackageURL)
    * [bowerPackageURL(packageName, cb)](#exp_module_bowerPackageURL--bowerPackageURL) ⏏
        * [~bowerPackageURLCallback](#module_bowerPackageURL--bowerPackageURL..bowerPackageURLCallback) : <code>function</code>

<a name="exp_module_bowerPackageURL--bowerPackageURL"></a>

### bowerPackageURL(packageName, cb) ⏏
Get the repository URL associated with a bower package name

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| packageName | <code>string</code> | A bower package name |
| cb | <code>bowerPackageURLCallback</code> | A callback to be executed after the repository URL is collected |

**Example**  
```js
bowerPackageURL('lodash', function(err, url) {
    if (err) { console.error(err); }
    console.log(url);
});
```
<a name="module_bowerPackageURL--bowerPackageURL..bowerPackageURLCallback"></a>

#### bowerPackageURL~bowerPackageURLCallback : <code>function</code>
The bowerPackageURL callback

**Kind**: inner typedef of <code>[bowerPackageURL](#exp_module_bowerPackageURL--bowerPackageURL)</code>  

| Param | Type | Description |
| --- | --- | --- |
| err | <code>Object</code> | An error object if an error occurred |
| url | <code>string</code> | The repository URL associated with the provided bower package name |

