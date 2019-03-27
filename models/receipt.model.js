const mongoose = require('mongoose');
const constants = require('../constants');

const receiptSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  datePaid: {
    type: Date,
    default: Date.now,
    required: 'Start date is required'
  },
  rentAmount: {
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

const Receipt = mongoose.model('Receipt', receiptSchema);

module.exports = Receipt;