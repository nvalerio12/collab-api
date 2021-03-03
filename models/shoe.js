const mongoose = require('mongoose');
const { Schema } = mongoose;

const shoeSchema = new Schema({
    name: String,
    price: Number
});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;