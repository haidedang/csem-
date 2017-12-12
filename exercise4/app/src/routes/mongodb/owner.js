const express = require('express');
const router = express.Router();
const Owner = require('../../models/mongodb/owners');

const listOwner = (req,res, next) => {
    console.log('reached.');
    Owner.find({}, function (err, report) {
        if (err) res.send(err);
        console.log('reached.');
        res.json(report);
    })
}

const createOwnerMongo = (req, res) => {
    console.log('hungry');
    let owner = new Owner({
        name: req.body.name
    })
    owner.save((err, report) => {
        if (err)
            res.send(err);
        res.json(report);
        console.log(report);
    });
};

router.get('/', listOwner);
router.post('/', createOwnerMongo);

module.exports = router;
