'use strict';


const fs = require('fs');
const { Validator } = require('./Validator/lib/validator.js');
const schema = {
  fields: {
    firstName: { type: 'string', required: true },
    lastName: { type: 'string', required: true },
    hair: {
      type: { type: 'string', required: false },
      color: { type: 'string', required: true },
    },
    favoriteFoods: { type: 'array', valueType: 'string' },
    married: { type: 'boolean' },
    kids: { type: 'number', required: true },
  },
};
