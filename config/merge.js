'use strict';
const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files5 = [
        './dist/ngsdk-elem/runtime-es5.js',
        './dist/ngsdk-elem/polyfills-es5.js',
        './dist/ngsdk-elem/scripts.js',
        './dist/ngsdk-elem/main-es5.js',
    ]
    const files2015 = [
        './dist/ngsdk-elem/runtime-es2015.js',
        './dist/ngsdk-elem/polyfills-es2015.js',
        './dist/ngsdk-elem/scripts.js',
        './dist/ngsdk-elem/main-es2015.js',
    ]
    await fs.ensureDir('./dist/ngsdk-elem');
    await concat(files5, './dist/ngsdk-elem/ngsdk-es5.js');
    await concat(files2015, './dist/ngsdk-elem/ngsdk-es2015.js');
})();