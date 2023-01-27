
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.apsjcns.mongodb.net/products_test?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to datbse')
}).catch(()=>{
    console.log('Connection failedd')
});

const createProduct = async(req, res, next) => {
    const createdProduct = new Product({
        name: req.body.name,
        price: req.body.price
    });

    const result = await createdProduct.save();

    res.json(result);
}

const getProducts = async(req, res, next) => {
    const products = await Product.find().exec();
    res.json(products)
}

exports.createProduct = createProduct;
exports.getProducts = getProducts;
