'use strict';



jest.mock('fs');

const fileEdit = require('../lib/file-edit-await.js');

describe('tests file handler', () =>{
  
  it ('writes to a file', () => {
    fileEdit.write('test.json', {name: 'test'}, (err, data) => {
      expect(err).not.toBeDefined();
      expect(data).toBeDefined();
    });
  });

  it ('test for error', () => {
    fileEdit.write('bad.txt', {name: 'test'}, (err, data) => {
      expect(err).toBe('Invalid File');
      expect(data).not.toBeDefined();
    });
  });
});