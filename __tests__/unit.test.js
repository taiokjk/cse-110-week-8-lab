// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('valid phone number', () => {
    expect(functions.isPhoneNumber('510-766-8006')).toBe(true);
});
test('valid phone number', () => {
    expect(functions.isPhoneNumber('1-800-381-8042')).toBe(true);
});
test('invalid phone number', () => {
    expect(functions.isPhoneNumber('hello-world')).toBe(false);
});
test('invalid phone number', () => {
    expect(functions.isPhoneNumber('123-567-890')).toBe(false);
});

test('valid email', () => {
    expect(functions.isEmail('lnguyen@ucsd.edu')).toBe(true);
});
test('valid email', () => {
    expect(functions.isEmail('anothervalid@gmail.com')).toBe(true);
});
test('invalid email', () => {
    expect(functions.isEmail('nonvalid@gmail')).toBe(false);
});
test('invalid email', () => {
    expect(functions.isEmail('wrongemail')).toBe(false);
});

test('valid password', () => {
    expect(functions.isStrongPassword('letterpassword')).toBe(true);
});
test('valid password', () => {
    expect(functions.isStrongPassword('pass1_hello')).toBe(true);
});
test('invalid password', () => {
    expect(functions.isStrongPassword('123wrong')).toBe(false);
});
test('invalid password', () => {
    expect(functions.isStrongPassword('wrongbecauseitistoolongofapassword')).toBe(false);
});

test('valid date', () => {
    expect(functions.isDate('1/1/1970')).toBe(true);
});
test('valid date', () => {
    expect(functions.isDate('05/06/2022')).toBe(true);
});
test('invalid date', () => {
    expect(functions.isDate('01-10-2021')).toBe(false);
});
test('invalid date', () => {
    expect(functions.isDate('1992/06/20')).toBe(false);
});

test('valid hex color', () => {
    expect(functions.isHexColor('#92c')).toBe(true);
});
test('valid hex color', () => {
    expect(functions.isHexColor('#e7bba9')).toBe(true);
});
test('invalid hex color', () => {
    expect(functions.isHexColor('#ABCDEFG')).toBe(false);
});
test('invalid hex color', () => {
    expect(functions.isHexColor('#veryWrong')).toBe(false);
});