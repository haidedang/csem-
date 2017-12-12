/**
 * Created by haidang on 10.12.17.
 */

const express = require('express');
const router = express.Router();
const Shop = require('../models/shops');
const Product = require('../models/products')


const shops = (req, res , next) => {
    /**
     * show all Owners
     */
    Shop.findAll({
        where: {
            id: req.params.id
        }
    }).then((data) => {
        res.status(200).send({
            "data": data
        })
    })
}

const createShop = (req, res, next) => {
    // create a new Shop
    Shop.create({
        owner_id: req.body.owner_id,
        name: req.body.name
    }).then((data) => {
        res.status(200).send(data);
    });
};

const listAllProducts = (req, res, next) => {
    Product.findAll({
        where: {
            shop_id: req.params.id
        }
    }).then((data) => {
        res.status(200).send({
            "data": data
        })
    })
}

router.get('/:id', shops);
router.get('/:id/products', listAllProducts);

router.post('/', createShop);



module.exports= router;
