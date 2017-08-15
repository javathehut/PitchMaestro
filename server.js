const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const knex = require('knex')({
    client: 'postgres',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'postgres',
        database: 'pitchmaestrostats',
        charset: 'utf8'
    }
});
const bookshelf = require('bookshelf')(knex);

const User = bookshelf.Model.extend({
    tableName: 'users'
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded 
app.use(bodyParser.json());// parse application/json 


app.post('/newuser', (req, res)=>{
    console.log(req.body);
    const newUser = new User(req.body);

    newUser
        .save()
        .then(newuser => {
            // users.push({username:req.body.username});
            return res.json(newuser.attributes);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
})

//post request on front end and at endpoint
app.post('/login', (req, res) => {
    console.log(req.body.login);

    User
    .find({userName: req.body.login})
    .then( user => res.send(user))

});

app.listen(8080, () => {
    console.log('server running on 8080')
});