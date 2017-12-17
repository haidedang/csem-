//const mongoose = require('mongoose')
const Owner = require('../models/owner')
//const OwnerSchema = mongoose.model('Owner', Owner, 'owners')


global.router.use('/owner', (req, res, next)=>{
    console.log('Accesed owners')
    next()
})

global.router.get('/owner/:id', (req,res)=>{
    console.log(global.dbIsMongo)
    if(global.dbIsMongo){
        //with Mongoose(?)
        Owner.find({}, function (err, report) {
            if (err) res.send(err);
            res.json(report);
    })   
    }else{
        //with Sequelize
        Owner.findAll({
            where: {
                id: req.params.id
            }
        }).then((data) => {
            res.status(200).send(data)
        })
    }
  
})

global.router.get('/owner', (req,res)=>{

    if(global.dbIsMongo){
        //with Mongoose(?)
        Owner.find({}, function (err, report) {
            if (err) res.send(err);
            res.json(report);
    }).exec()   
    }else{
        //with Sequelize
        Owner.findAll({}).then((data)=>{
        res.status(200).send(data)
        })
    }
    
    
})

global.router.post('/owner', (req, res)=>{
    if(global.dbIsMongo){
        //with Mongoose(?)
        let owner = new Owner({
            name: req.body.name
        })
        owner.save((err, report) => {
            if (err)
                res.send(err);
            res.json(report);
            console.log(report);
    });
    }else{
        //with Sequelize
        Owner.create({
            name:req.body.name,
        }).then((data) => {
              res.status(200).send(data);
      });
    }
})

module.exports = global.router