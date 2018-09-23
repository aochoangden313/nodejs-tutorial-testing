const express = require('express');

var app = express();

app.get('/', (req, res) => {
    // res.status(202).send('Hello world');

    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });

});

// GET /user
// Give users a name prop and age prop
app.get('/user', (req, res) => {
    const users = [
        {
            name: 'Quan Le Van',
            age: 25
        },
        {
            name: 'Nam',
            age: 20
        },
        {
            name: 'A Son',
            age: 60
        },
    ];
    
    res.status(200).send(users);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports.app = app;