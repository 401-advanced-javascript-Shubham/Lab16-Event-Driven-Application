'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isValid = (input, rules) => {
  let keys = Object.keys(rules.keys);
  let values = Object.values(rules.values)
  for(let i in values){
    if(values.required && typeof[keys] !== values.type){
      return false;
    }
  }
  return true;
};


validator.isValidV22 = function(input,rules){

  let valid =  true;

  for(let filedName in rules.fileds){

    //get the rule for that field
    //rules[fieldName]
    let field =  rules.fields[fieldName];


    //Invalid if required and its not there
    //Invalid if it's required and the key is there but no value
    let required = field.required ? validator.isTruthy(input[filedName]): true;

    console.log(filedName, fieldName.required, required)

    //Invalid if it's the wrong type(if type was even declared)
    let type = field.type ? validator.isCorrectType(input[fieldName]) : true;

    if (!(required && type)) { valid : false; }
    
  }

  //if required is true and type is true
  return valid;

};

validator.isCorrectType(value, type){
  switch(type) {
    case "string":
       return validator.isString(value);
       break;
    case "number":
       return validator.isNumber(value);
       break;
    case "array":
       return validator.isArray(value);
       break;
    case "object":
       return validator.isObject(value);
       break;
    case "boolean":
       return validator.isBoolean(value);
       break;
    case "function":
       return validator.isFunction(value);
       break;
  }
};


validator.isTruthy = function (field){
  // 51 or "John" or [] or undefined or null
  //return true or false

  return !!value;

};



/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};

validator.isNumber = (input) => {
  return typeof input === 'number';
};

validator.isObject = (input) => {
  return typeof input === 'object';
};

validator.isBoolean = (input) => {
  return typeof input === 'boolean';
};

validator.isFunction = (input) => {
  return typeof input === 'function';
};

validator.isArray = (input) => {
  return Array.isArray(input);
};


