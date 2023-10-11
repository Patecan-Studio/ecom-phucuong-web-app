import _ from "lodash";
 
export const isRequired = (value: string) => {
  return value && !_.isNil(value) && _.gt(_.size(_.trim(value)), 0);
};
 
export const isAlphabetNumberUnderscoreDashDot = (value?: string) => {
  if (!value || _.isNil(value)) {
    return true;
  }
 
  const regex = new RegExp("^[A-Za-z0-9\\_\\-\\.]+$");
  if (regex.test(value)) {
    return true;
  }
 
  return false;
};
 
export const isMaxLengthChar = (value: string, length: number) => {
  if (!value || _.isNil(value)) {
    return true;
  }
 
  const trimValue = _.chain(value)
    .trim(" ") // Halfsize
    .trim("　") // Halfsize
    .size() // Size
    .value();
 
  return _.lte(trimValue, length);
};
 
export const isMaxLengthByte = (value: string, length: number) => {
  if (!value || _.isNil(value)) {
    return true;
  }
 
  const byteSize = new Blob([value]).size;
 
  return !(byteSize > length);
};
 
export const isNumberValue = (value: any) => {
  if (value === "") {
    return true;
  }
  const regEx = new RegExp(/^(\d+|\d{1,3}(,\d{3})*)(\.\d+)?$/);
  return regEx.test(value);
};
 
export const isIntegerDecimalValue = (value: any) => {
  if (value === "") {
    return true;
  }
  const regEx = new RegExp(/^[-+]?[0-9]{1,11}([,.][0-9]{1,3})?$/);
  return regEx.test(value);
};
export const isNumbericDecimalValue = (value: any) => {
  if (value === "") {
    return true;
  }
  const regEx = new RegExp(
    /^(\d{1,11}|\d{1,3}(,\d{3}){1,3})(?:\.[0-9]{1,3})?$/
  );
  return regEx.test(value);
};
export const isIntegerValue = (value: any) => {
  if (value === "") {
    return true;
  }
  const regEx = new RegExp(/^(\d+|\d{1,3}(,\d{3})*)(\.\d+)?$/);
  return regEx.test(value);
};
export const isNumbericWithCommaValue = (value: any) => {
  if (value === "") {
    return true;
  }
  const regEx = new RegExp(/^(?:\d+|\d{1,3}(?:,\d{3})*)?$/);
  return regEx.test(value);
};
export const isNumbericDecimal2DigitsWithCommaValue = (value: any) => {
  if (value === "") {
    return true;
  }
  const regEx = new RegExp(/^([0-9]{1,3})(,?[0-9]{3})*([.][0-9]{1,2})?$/);
  return regEx.test(value);
};
export const isNumbericValueWithDigits14 = (value: any): boolean => {
  if (value === "") {
    return true;
  }
 
  // Convert value to a string and then split by comma
  const values = value.toString().split(",");
 
  // Check each part against the regex pattern
  const regexPattern = /^[0-9]{1}([.][0-9]{1,4})?$/;
  const regEx = new RegExp(regexPattern);
 
  for (const part of values) {
    if (!regEx.test(part)) {
      return false; // Return false if any part doesn't match the pattern
    }
  }
 
  return true;
};
export const isNumbericValueWithDigits315 = (value: any): boolean => {
  if (value === "") {
    return true;
  }
 
  // Convert value to a string and then split by comma
  const values = value.toString().split(",");
 
  // Check each part against the regex pattern
  const regexPattern = /^[0-9]{1,3}([.][0-9]{1,15})?$/;
  const regEx = new RegExp(regexPattern);
 
  for (const part of values) {
    if (!regEx.test(part)) {
      return false; // Return false if any part doesn't match the pattern
    }
  }
 
  return true;
};
export const isNumbericValueWithDigits61 = (value: any): boolean => {
  if (value === "") {
    return true;
  }
 
  // Convert value to a string and then split by comma
  const values = value.toString().split(",");
 
  // Check each part against the regex pattern
  const regexPattern = /^[0-9]{1,6}([.][0-9]{1})?$/;
  const regEx = new RegExp(regexPattern);
 
  for (const part of values) {
    if (!regEx.test(part)) {
      return false; // Return false if any part doesn't match the pattern
    }
  }
 
  return true;
};
export const isNumbericValueWithDigits47 = (value: any): boolean => {
  if (value === "") {
    return true;
  }
 
  // Convert value to a string and then split by comma
  const values = value.toString().split(",");
 
  // Check each part against the regex pattern
  const regexPattern = /^[0-9]{1,4}([.][0-9]{1,7})?$/;
  const regEx = new RegExp(regexPattern);
 
  for (const part of values) {
    if (!regEx.test(part)) {
      return false;
    }
  }
 
  return true;
};
 
export const isNumbericValueWithDigits62 = (value: any): boolean => {
  if (value === "") {
    return true;
  }
 
  const values = value.toString().split(",");
 
  const regexPattern = /^[0-9]{1,6}([.][0-9]{1,2})?$/;
  const regEx = new RegExp(regexPattern);
 
  for (const part of values) {
    if (!regEx.test(part)) {
      return false;
    }
  }
 
  return true;
};
export const isNumbericValueWithDigits65 = (value: any): boolean => {
  if (value === "") {
    return true;
  }
 
  const values = value.toString().split(",");
 
  const regexPattern = /^[0-9]{1,6}([.][0-9]{1,5})?$/;
  const regEx = new RegExp(regexPattern);
 
  for (const part of values) {
    if (!regEx.test(part)) {
      return false;
    }
  }
 
  return true;
};
export const isNumbericValueWithDigits92 = (value: any): boolean => {
  if (value === "") {
    return true;
  }
 
  const values = value.toString().split(",");
 
  const regexPattern = /^[0-9]{1,9}([.][0-9]{1,2})?$/;
  const regEx = new RegExp(regexPattern);
 
  for (const part of values) {
    if (!regEx.test(part)) {
      return false;
    }
  }
 
  return true;
};
export const isNumbericValueWithDigits122 = (value: any): boolean => {
  if (value === "") {
    return true;
  }
 
  const values = value.toString().split(",");
 
  const regexPattern = /^[0-9]{1,12}([.][0-9]{1,2})?$/;
  const regEx = new RegExp(regexPattern);
 
  for (const part of values) {
    if (!regEx.test(part)) {
      return false;
    }
  }
 
  return true;
};
export const isNumbericValueWithDigits32 = (value: any): boolean => {
  if (value === "") {
    return true;
  }
 
  const values = value.toString().split(",");
 
  const regexPattern = /^[0-9]{1,3}([.][0-9]{1,2})?$/;
  const regEx = new RegExp(regexPattern);
 
  for (const part of values) {
    if (!regEx.test(part)) {
      return false;
    }
  }
 
  return true;
};
 
export const isValidCoordinateSL02002 = (value: any): boolean => {
  if (value === "") {
    return true;
  }
  const regexPattern = /^[0-9]{1,3}([.][0-9]{1,6})?$/;
  const regEx = new RegExp(regexPattern);
  return regEx.test(value);
};
 
 
 
 
