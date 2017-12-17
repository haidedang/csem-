const Product = require('../models/products');

global.router.use('/product', (req, res, next)=>{
    console.log('Accesed products')
    next()
})

global.router.get('/product/:id', (req,res)=>{
    if(global.dbIsMongo){
        //with Mongoose(?)   
    }else{
        Product.findAll({
            where: {
                id: req.params.id
            }
        }).then((data) => {
            res.status(200).send(data)
        })
    }
})

global.router.get('/product', (req,res)=>{
    if(global.dbIsMongo){
        //with Mongoose()
        Product.find({}, function (err, report) {
            if (err) res.send(err);
            res.json(report);
    })     
    }else{
        //with Sequelize
        Product.findAll(
        ).then((data) => {
            res.status(200).send({
                "data": data
            })
        })
    }
})

global.router.post('/product', (req, res)=>{
    if(global.dbIsMongo){
        //with Mongoose(?)  
    }else{
        //with Sequelize
        Owner.create({
            name:req.body.name,
        }).then((data) => {
              res.status(200).send(data);
      });
    }
});

module.exports = global.router