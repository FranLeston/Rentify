const mongoose = require('mongoose');
const constants = require('../constants');

const contractSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  landlord: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Landlord",
  },
  startdate: {
    type: Date,
    required: 'Start date is required'
  },
  enddate: {
    type: Date,
    required: 'End date is required'
  },
  rentamount: {
    type: Number,
    required: 'Rent amount is required',
    min: 0
  },
  homeproperty: {
    type: String,
    required: "Home address is required"
  },
  generalinfo: {
    type: String,
    maxlength: [500, "Message limit exceeded"]
  },
  contractURL: {
    type: String
  },
  numcatastral: {
    type: String
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

const Contract = mongoose.model('Contract', contractSchema);
module.exports = Contract;
