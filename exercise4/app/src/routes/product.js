/**
 * Created by haidang on 10.12.17.
 */

const express = require('express');
const router = express.Router();
const Product = require('../models/products');

const product = (req, res , next) => {
    /**
     * show all Owners
     */
    Product.findAll({
        where: {
            id: req.params.id
        }
    }).then((data) => {
        res.status(200).send({
            "data": data
        })
    })
}

const listAllProducts= (req, res , next) => {
    /**
     * show all Products
     */
    Product.findAll(
    ).then((data) => {
        res.status(200).send({
            "data": data
        })
    })
}

const createProduct = (req, res, next) => {
    console.log('reached');
    // show all Owner
    Product.create({
        shop_id:req.body.shop_id,
        name: req.body.name,
        price: req.body.price
    }).then((data) => {
        res.status(200).send(data);
    });
};


/**
 * list Product with specific id
 */
router.get('/:id', product);

router.get('/', product);

/**
 * create a new Product
 */
router.post('/', createProduct);



module.exports= router;
