const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    name:{type:String, required: true},
    email:{type: String},
    phone:{type: String}
});

const address = mongoose.model('address', addressSchema);
module.exports = address;