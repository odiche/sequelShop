const route = require('express').Router();

route.use('/products', require('./product'));
route.use('/users', require('./user'));

exports = module.exports = {
    route
}