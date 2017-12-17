const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Sequelize = require('sequelize')

if(global.dbIsMongo){
console.log('Modeling Owner in Mongoose')
module.exports= new Schema({
    name: String,
})

}else{
    console.log('Modeling Owner in Sequelize')
    module.exports = global.db.define('owner',{
        name: {type: Sequelize.STRING}
    },
        {timestamps: false}
    )
}