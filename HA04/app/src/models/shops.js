const Sequelize = require('sequelize');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

if(global.dbIsMongo){
console.log('Modeling Shops in Mongoose')
module.exports= new Schema({
    owner_id: Number,
    name: String,
})
}else{
    console.log('Modeling Shops in Mongoose')
    module.exports = global.db.define('shops', {
        owner_id: { type: Sequelize.STRING},
        name : { type: Sequelize.STRING}
    },
        { timestamps: false }
    )
}