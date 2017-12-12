/**
 * Created by haidang on 12.12.17.
 */


const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
mongoose.connect('mongodb://mongodb:27017/dev');

var Schema = mongoose.Schema;

var shopSchema = new Schema({
    owner_id:Number,
    name: String,
})

shopSchema.plugin(AutoIncrement, {inc_field: 'shopId'});

var Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;
