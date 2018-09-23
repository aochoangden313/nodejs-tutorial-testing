const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it ('should return hello world respone', (done) => {
    // request(app)
    //     .get('/')
    //     .expect(202)
    //     .expect('Hello world')
    //     .end(done);

    request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
            expect(res.body).toInclude({
                error: 'Page not found.'
            });
        }) 
        .end(done);
});

// Make a new test
// assert 200
// Assert that you exist in users array

it ('should return specify user', (done) => {
    const user = {
        name: 'Quan Le Van',
        age: 25
    };

    request(app)
        .get('/user')
        .expect(200)
        .expect((res) => {
            expect(res.body).toInclude(
                user
            );
        }) 
        .end(done);
});