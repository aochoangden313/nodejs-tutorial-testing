const utils = require('./utils');
const expect = require('expect');


describe('Utils', () => {
    describe('number', () => {
        it('should add 2 numbers', () => {
            let res = utils.add(33, 11);
        
            expect(res).toBe(44).toBeA('number');
        });
    })
    
    it('It should return square value', () => {
        let res = utils.square(9);
    
        expect(res).toBe(81).toBeA('number');
    });
    
    // Add done to notify mocha this is async function
    it('It should async add 2 numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
    
    it('It should square number', (done) => {
        // utils.asyncAdd(4, 3, (sum) => {
        //     expect(sum).toBe(1).toBeA('number');
        //     done();
        // });
    
        utils.asyncSquare(5, (squareValue) => {
            expect(squareValue).toBe(25).toBeA('number');
            done();
        });
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
})

