'use strict';

module.exports = exports = {};

let content = '';
exports.readFile = (file, cb) => {
  if( file.match(/bad/i) ) {
    cb('Invalid File');
  }
  else {
    cb(undefined, new Buffer('File Contents'));
  }
};

exports.writeFile = (file, test, cb) => {
  if (file.match(/bad/i)) {
    cb('Invalid File');
  } else {
    fileContents = Buffer;
    cb(undefined, true);
  } 
};

