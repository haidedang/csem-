/**
 * Created by haidang on 10.12.17.
 */

const express = require('express');
const router = express.Router();
const Owner = require('../models/owners');

const owner = (req, res , next) => {
    /**
     * show all Owners
     */
    Owner.findAll({}).then((data) => {
        res.status(200).send({
            "data": data
        })
    })
}



const createOwner = (req, res, next) => {
    // show all Owner
  Owner.create({
      name:req.body.name,
  }).then((data) => {
        res.status(200).send(data);
    });
};

router.get('/', owner);
router.post('/', createOwner);

module.exports= router;
