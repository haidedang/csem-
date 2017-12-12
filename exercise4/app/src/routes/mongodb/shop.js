/**
 * Created by haidang on 11.12.17.
 */

const express = require('express');
const router = express.Router();
const Shop = require('../../models/mongodb/shops');
const Product = require('../../models/mongodb/products');

const shop = (req, res , next) => {
    /**
     * show all Owners
     */
    Shop.find({

        shopId: req.params.id

    }).then((data) => {
        res.status(200).send({
            "data": data
        })
    })
}

const listAllShops= (req, res , next) => {
    /**
     * show all Products
     */
    Shop.find(
    ).then((data) => {
        res.status(200).send({
            "data": data
        })
    })
}

const listAllProducts= (req, res , next) => {
    /**
     * show all Products
     */
    Product.find({
            shop_id: req.params.id
    }
    ).then((data) => {
        res.status(200).send({
            "data": data
        })
    })
}

const createShop = (req, res, next) => {
    console.log('reached');
    // show all Owner
    let shop = new Shop({
        owner_id:req.body.owner_id,
        name: req.body.name
    })
    shop.save((err, report) => {
        if (err)
            res.send(err);
        res.json(report);
        console.log(report);
    });
};

router.get('/:id', shop);
router.get('/', listAllShops);
router.get('/:id/products', listAllProducts);
router.post('/', createShop);

module.exports = router;
