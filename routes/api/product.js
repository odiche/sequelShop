const Product = require('../../db').Product;
const route = require('express').Router();

route.get('/', (req, res) =>{
    Product.findAll()
        .then((product)=>{
            res.status(200).send(product);
        })
        .catch((err) =>{
            res.status(500).send({
                error: 'Could not get product'
            })
        })
});

route.post('/', (req, res) =>{
    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price)
    })
        .then((product) =>{
            res.status(200).send(product)
        })
        .catch((err) =>{
            res.status(501).send({
                error:"Unable to create product"
            })
        })
});

exports = module.exports = route;