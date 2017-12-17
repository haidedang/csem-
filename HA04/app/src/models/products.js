
const Sequelize = require('sequelize');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


if(global.dbIsMongo){
console.log('Modeling Product in Mongoose')
module.exports= new Schema({
    shop_id: Number,
    name: String,
    price: Number,
})
}else{
    console.log('Modeling Product in Sequelize')
    module.exports = global.db.define('products', {
        shop_id: { type: Sequelize.STRING},
        name : { type: Sequelize.STRING},
        price: { type: Sequelize.STRING}
    },
    { timestamps: false }
)
}