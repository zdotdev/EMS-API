const mongoose = require('mongoose')
const orderSchema = require('../Schema/API.js')

const orderModel = mongoose.model('Order', orderSchema)

module.exports = orderModel
