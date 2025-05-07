// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


// tests for isPhoneNumber, 2 false and 2 true
test('isPhoneNumber: 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber: (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber: ', () => {
  expect(isPhoneNumber()).toBe(false);
});

test('isPhoneNumber: 1234567890', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});


// tests for isEmail, 2 false and 2 true
test('isEmail: mo@ucsd.edu', () => {
  expect(isEmail('mo@ucsd.edu')).toBe(true);
});

test('isEmail: o.minjoo14@gmail.com', () => {
  expect(isEmail('ominjoo14@gmail.com')).toBe(true);
});

test('isEmail: ', () => {
  expect(isEmail()).toBe(false);
});

test('isEmail: email.com@ucsd.com@edu', () => {
  expect(isEmail('email.com@ucsd.com@edu')).toBe(false);
});


// tests for isStrongPassword, 2 false and 2 true
test('isStrongPassword: Minjoo_14', () => {
  expect(isStrongPassword('Minjoo_14')).toBe(true)
});

test('isStrongPassword: Minjoo', () => {
  expect(isStrongPassword('Minjoo')).toBe(true)
});

test('isStrongPassword: 1234', () => {
  expect(isStrongPassword('1234')).toBe(false)
});

test('isStrongPassword: Minjoo_14_1234567890', () => {
  expect(isStrongPassword('Minjoo_14_1234567890')).toBe(false)
});


// tests for isDate, 2 false and 2 true
test('isDate: 12/31/2023', () => {
  expect(isDate('12/31/2023')).toBe(true);
});

test('isDate: 1/1/2023', () => {
  expect(isDate('1/1/2023')).toBe(true);
});

test('isDate: 12/31/23', () => {
  expect(isDate('12/31/23')).toBe(false);
});

test('isDate: 13/45/2023/1', () => {
  expect(isDate('12/31/2023/1')).toBe(false);
});


// tests for isHexColor, 2 false and 2 true
test('isHexColor: #123456', () => {
  expect(isHexColor('#123456')).toBe(true);
});

test('isHexColor: #123', () => {
  expect(isHexColor('#123')).toBe(true);
});

test('isHexColor: 123456', () => {
  expect(isHexColor('#123456789')).toBe(false);
});

test('isHexColor: #12345', () => {
  expect(isHexColor('#12345')).toBe(false);
});