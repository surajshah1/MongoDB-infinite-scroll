// Import npm packages
const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    OrderID: String,
    Restaurant : String,
    ItemName : String,
    Quantity : String,
    ProductPrice : String,
    TotalProducts : String,
    OrderDate : String,
});

// Model
const Order = mongoose.model('orders', orderSchema);

module.exports =  Order;