const User = require('../../db').User;
const route = require('express').Router();

route.get('/', (req, res) =>{
    User.findAll()
        .then((user)=>{
            res.status(200).send(user);
        })
        .catch((err) =>{
            res.status(500).send({
                error: 'Could not get user'
            })
        })
});

route.post('/', (req, res) =>{
    User.create({
        name: req.body.name,
    })
        .then((user) =>{
            res.status(200).send(user)
        })
        .catch((err) =>{
            res.status(501).send({
                error:"Unable to create user"
            })
        })
});

exports = module.exports = route;