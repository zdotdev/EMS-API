const mongoose = require('mongoose')

const BusinessSchema = new mongoose.Schema({
  sales: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sales' }],
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Products' }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  violations: [
    {
      violation: { type: mongoose.Schema.Types.ObjectId, ref: 'Violations' },
      violationImage: { type: String, required: true },
      isPaid: { type: Boolean, required: true },
      datePaid: { type: Date, required: true }
    }
  ],
  businessName: { type: String, required: true },
  businessAddress: { type: String, required: true },
  businessLogo: { type: String, required: true },
  contactPerson: { type: String, required: true },
  designationOfContactPerson: { type: String, required: true },
  sexOfContactPerson: { type: String, required: true },
  socialClassification: { type: String, required: true },
  mobileNumber: { type: Number, required: true },
  company: { type: String, required: true },
  facebookPage: { type: String, required: true },
  lazadaShopeeSite: { type: String, required: true },
  companyWebsite: { type: String, required: true },
  paymentOption: { type: String, required: true },
  logisticServiceProvider: { type: String, required: true },
  sole: { type: String, required: true },
  assetSize: { type: Number, required: true },
  industryClassification: { type: String, required: true },
  productLineService: { type: String, required: true },
  productsAndBrandName: { type: String, required: true },
  totalnumberOfFulltimeEmployees: { type: Number, required: true },
  totalNumberOfParttimeEmployees: { type: Number, required: true },
  dateOfEstablishment: { type: Number, required: true },
  annualBusinessIncome: { type: Number, required: true },
  isOccupying: { type: Boolean, default: false },
  boothNumber: { type: Number, required: true },
  category: { type: String, required: true },
  isArchived: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

export default mongoose.model('Business', BusinessSchema)
