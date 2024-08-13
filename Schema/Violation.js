import mongoose from 'mongoose'

const ViolationSchema = new mongoose.Schema({
  business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business' },
  violationName: { type: String, required: true },
  violationFee: { type: String, required: true },
  violationDescription: { type: String, required: true },
  isArchived: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

export default mongoose.model('Violation', ViolationSchema)
