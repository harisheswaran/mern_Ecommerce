const mongoose = require('mongoose')

const orderProduct = new mongoose.Schema({
    cartItems: Array,
    amount: String,
    status: String,
    createdAt: Date
},[])

const OrderModel = mongoose.model('Order',orderProduct);

module.exports = OrderModel;