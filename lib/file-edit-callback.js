'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.read = (file, cb) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      throw err;
    }
    else {
      try {
        cb(null, JSON.parse(data.toString().trim()));
      }
      catch (err) {
        throw err;
      }
    }
  });
};

exports.write = (file, data, cb) => {
  let newData = Buffer.from(JSON.stringify(data));

  fs.writeFile(file, newData, cb);
};