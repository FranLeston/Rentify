const mongoose = require("mongoose");
const constants = require("../constants");
const User = require("../models/user.model");

const contractSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    tenantEmail: {
      type: String,
      required: true
    },
    contractURL: {
      type: String
    },
    startDate: {
      type: Date,
      required: false
    },
    endDate: {
      type: Date,
      required: false
    },
    rentPrice: {
      type: Number,
      required: false
    },
    address: {
      type: String,
      required: true
    },
    info: {
      type: String
    },
    regNumber: {
      type: String
    },
    deposit: {
      type: String
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
  }
);

const Contract = mongoose.model("Contract", contractSchema);

module.exports = Contract;
