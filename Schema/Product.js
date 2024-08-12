import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business' },
  productName: { type: String, required: true },
  productPrice: { type: String, required: true },
  isArchived: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})
export default mongoose.model('Product', ProductSchema)
