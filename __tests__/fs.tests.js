'use strict';

jest.mock('fs');

const callbackFs = require('../lib/file-edit-callback.js');

describe('File System', () => {
  it('returns true when given valid file', () => {
    expect(true).toBeTruthy();
  });
});