const Shop = require('../models/shops');
const Product = require('../models/products')


global.router.use('/shop', (req, res, next)=>{
    console.log('Accesed shop')
    next()
})

global.router.get('/shop', (req,res)=>{
    if(global.dbIsMongo){
        Shop.find({}, function (err, report) {
            if (err) res.send(err);
            res.json(report);
    })  
    }else{
        Shop.findAll({}).then((data) => {
            res.status(200).send({
                "data": data
            })
        })
    }
})

global.router.get('/shop/:id', (req,res)=>{
    if(global.dbIsMongo){
        //with Mongoose(?)    
    }else{
        //with Sequelize
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
})

global.router.get('/shop/:id/products', (req,res)=>{
    if(global.dbIsMongo){
        //with Mongoose(?)   
    }else{
        //with Sequelize
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
})

global.router.post('/shop', (req,res)=>{
    if(global.dbIsMongo){
        //with Mongoose(?)
        console.log('Getting owners...')    
    }else{
        //with Sequelize
        Shop.create({
            owner_id: req.body.owner_id,
            name: req.body.name
        }).then((data) => {
            res.status(200).send(data);
        });
    }
})

module.exports = global.router