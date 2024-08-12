import mongoose from 'mongoose'

const SaleSchema = new mongoose.Schema({
  business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business' },
  product: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  totalPrice: { type: Number, required: true },
  isArchived: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
})
export default mongoose.model('Sale', SaleSchema)
