'use strict';

const events = require('./events.js');

events.on('save', (payload) => {
  console.log('A file was read and re-written', payload);
});

events.on('Error', (payload) => {
  console.error('error', payload);
});
