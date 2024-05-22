const express = require('express')
const orderModel = require('../Model/API.js')
const router = express.Router()

async function getOrder (req, res, next) {
  try {
    const order = await orderModel.findById(req.params.id)
    if (!order) {
      return res.status(404).json({ message: 'Order not found' })
    }
    res.order = order
    next()
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

router.get('/', async (req, res) => {
  try {
    const order = await orderModel.find()
    res.status(200).json(order)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
router.get('/:businessName', async (req, res) => {
  try {
    const order = await orderModel.findOne()
    res.status(200).json(order)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/:id', getOrder, (req, res) => {
  try {
    res.json(res.order)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
router.post('/', async (req, res) => {
  try {
    if (!req.body.orderItems || !req.body.orderPrices || !req.body.businessId) {
      return res
        .status(400)
        .json({ message: 'Please provide all required fields' })
    }
    const order = new orderModel(req.body)
    const newOrder = await order.save()
    res.status(201).json({ message: 'Order saved!', newOrder })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
router.put('/:id', getOrder, async (req, res) => {
  try {
    const updatedOrder = await orderModel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    )
    res.status(200).json({ message: 'Order updated!', updatedOrder })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
router.delete('/:id', getOrder, async (req, res) => {
  try {
    await orderModel.findByIdAndDelete(req.params.id)
    res.json({ message: 'Order deleted!' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
module.exports = router
