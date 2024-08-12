import mongoose from 'mongoose'

const EventSchema = new mongoose.Schema({
  business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business' },
  title: { type: String, required: true },
  isLocal: { type: Boolean, required: true },
  location: { type: String, required: true },
  durationDate: { type: Number, required: true },
  status: { type: String, required: true },
  numberOfParticipants: { type: Number, required: true },
  listOfAvailableBooths: [{ type: Number, required: true }],
  isArchived: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})
export default mongoose.model('Event', EventSchema)
