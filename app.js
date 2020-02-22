'use strict';

const fs = require('fs');
const util = require('util');

const events =  require('./events.js')
require('./logger.js')

const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);
