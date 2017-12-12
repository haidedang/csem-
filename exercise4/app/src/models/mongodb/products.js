/**
 * Created by haidang on 11.12.17.
 */

const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
mongoose.connect('mongodb://mongodb:27017/dev');

var Schema = mongoose.Schema;

var productSchema = new Schema({
    shop_id:Number,
    name: String,
    price: Number
})

productSchema.plugin(AutoIncrement, {inc_field: 'productId'});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;
