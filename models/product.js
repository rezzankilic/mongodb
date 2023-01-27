const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true}
});

mongoose.model('Product', productSchema)