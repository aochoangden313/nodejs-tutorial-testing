const utils = require('./utils');
const expect = require('expect');

it('should add 2 numbers', () => {
    let res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
});

it('It should return square value', () => {
    let res = utils.square(9);

    expect(res).toBe(81).toBeA('number');
});

// should verify first name and last name are set
// assert it includes firstName and lastName with proper values
it('set user with first name and last name', () => {
    let user = {location: 'Ha Noi', age: 25};
    let result = utils.setName(user, 'Quan Le');

    // expect(result).toEqual({
    //     firstName: 'Quan',
    //     lastName: 'Le'
    // });

    expect(result).toInclude({
        firstName: 'Quan',
        lastName: 'Le'
    });
});
