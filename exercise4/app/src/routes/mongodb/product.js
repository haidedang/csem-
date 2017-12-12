const express = require('express');
const router = express.Router();
const Product = require('../../models/mongodb/products');

const product = (req, res , next) => {
    /**
     * show all Owners
     */
    Product.find({

            productId: req.params.id

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
    Product.find(
    ).then((data) => {
        res.status(200).send({
            "data": data
        })
    })
}

const createProduct = (req, res, next) => {
    console.log('reached');
    // show all Owner
    let product = new Product({
        shop_id:req.body.shop_id,
        name: req.body.name,
        price: req.body.price
    })
    product.save((err, report) => {
        if (err)
            res.send(err);
        res.json(report);
        console.log(report);
    });
};

router.get('/:id', product);
router.get('/', listAllProducts);
router.post('/', createProduct);

module.exports = router;
