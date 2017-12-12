const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
mongoose.connect('mongodb://mongodb:27017/dev');

var Schema = mongoose.Schema;

var ownerSchema = new Schema({
    name: String
})

ownerSchema.plugin(AutoIncrement, {inc_field: 'id'});

var Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;
