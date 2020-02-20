'use strict';
const callbackFunction = require('./lib/file-edit-callback.js');

const fs =  require('fs');
const faker = require('faker');

const commandLineArguments = process.argv;
let file = `${__dirname}/data/${fileName}`;

const fileNames = commandLineArguments.splice(2);

const personRules = {
    fields: {
      id: {type: 'string', required: true},
      name: {type: 'string', required: true},
      age: {type: 'number', required: true},
      children: { type: 'array', valueType: 'string' },
    },
  };    

  exports.read = (file, read) => {
    // use fs to read file
    fs.readFile(file, (err, data) => {
      if (err) {
        throw err;
      }
      else {
        try {
          read(null, JSON.parse(data.toString().trim()));
        }
        catch (err) {
          throw err;
        }
      }
    });
  };
  
  exports.write = (file, data, write) => {
    // change data to string to yse fs.writeFile
    let newData = Buffer.from(JSON.stringify(data));
  
    // write new data to file
    fs.writeFile(file, newData, write);
  };

  const readWriteFile = value => {
    callbackFunction.read(file, (err, data) => {
      if(err) {
        console.error(err);
      }
      else {
        
        data.firstName = faker.name.firstName();
        callbackFunction.write(file, data, (err, results) => {
          if (err) {
            console.error(err);
          }
          else {
            callbackFunction.read(file, (err, newData) => {
              console.log(newData);
            });
          }
        });
      }
    });
  };
  
  readWriteFile();