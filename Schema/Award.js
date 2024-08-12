import mongoose from 'mongoose'

const AwardSchema = new mongoose.Schema({
  business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business' },
  awardName: { type: String, required: true },
  awardDescription: { type: String, required: true },
  awardPrice: { type: String, required: true },
  isArchived: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

export default mongoose.model('Award', AwardSchema)
