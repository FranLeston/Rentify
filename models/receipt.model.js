const mongoose = require('mongoose');
const constants = require('../constants');

const receiptsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  landlord: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Landlord",
  },
  paydate: {
    type: Date,
    required: 'Start date is required'
  },
  rentamount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contract"
  },
  subject: {
    type: String,
    default: "Rent Receipt"
  },
  contract: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contract"
  }
}, {
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
      delete ret.__v;
      delete ret.password;
      return ret;
    }
  }
});

const Receipt = mongoose.model('Receipt', ReceiptSchema);
module.exports = Receipt;