const utils = require('./utils');

it('should add 2 numbers', () => {
    let res = utils.add(33, 11);

    if (res != 44) {
        throw new Error(`Do not return 44 actual value is ${res}`);
    }
});

it('It should return square value', () => {
    let res = utils.square(9);

    if (res != 81) {
        throw new Error(`Do not return 81 actual value is ${res}`);
    }
});