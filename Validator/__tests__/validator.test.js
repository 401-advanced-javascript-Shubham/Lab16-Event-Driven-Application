'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('strings', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isString(str)).toBeTruthy();
    expect(validator.isString(num)).toBeFalsy();
    expect(validator.isString(arr)).toBeFalsy();
    expect(validator.isString(obj)).toBeFalsy();
    expect(validator.isString(func)).toBeFalsy();
    expect(validator.isString(bool)).toBeFalsy();
  });

  let intializetTest = {
    'string': str,
    'number': num,
    'array': arr,
    'object': obj,
    'function': func,
    'boolean': bool
  }
  it('numbers', () => {
    for(let input in intializetTest){
      if(input === 'number'){
        expect(validator.isNumber(intializetTest[input])).toBeTruthy();
      }else{
        expect(validator.isNumber(intializetTest[input])).toBeFalsy();
      }
    }
  });

 it('string', () => {
    for(let input in intializetTest){
      if(input === 'string'){
        expect(validator.isString(intializetTest[input])).toBeTruthy();
      }else{
        expect(validator.isString(intializetTest[input])).toBeFalsy();
      }
    }
  });

  it('objects', () => {
    for(let input in intializetTest){
      if(input === 'object'){
        expect(validator.isObject(intializetTest[input])).toBeTruthy();
      }else{
        expect(validator.isObject(intializetTest[input])).toBeFalsy();
      }
    }
  });

  it('booleans', () => {
    for(let input in intializetTest){
      if(input === 'boolean'){
        expect(validator.isBoolean(intializetTest[input])).toBeTruthy();
      }else{
        expect(validator.isBoolean(intializetTest[input])).toBeFalsy();
      }
    }
  });

  it('functions', () => {
    for(let input in intializetTest){
      if(input === 'function'){
        expect(validator.isFunction(intializetTest[input])).toBeTruthy();
      }else{
        expect(validator.isFunction(intializetTest[input])).toBeFalsy();
      }
    }
  });

  it('arrays', () => {
    for(let input in intializetTest){
      if(input === 'array'){
        expect(validator.isArray(intializetTest[input])).toBeTruthy();
      }else{
        expect(validator.isArray(intializetTest[input])).toBeFalsy();
      }
    }
  });



describe('validator module performs complex validations', () => {

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(true).toBeFalsy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(true).toBeFalsy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(true).toBeFalsy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(true).toBeFalsy();
  });

  // TODO: Cover so, so many more cases

});

});




