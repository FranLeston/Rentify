const mongoose = require("mongoose");
const constants = require("../constants");
const User = require("../models/user.model");

const contractSchema = new mongoose.Schema(
  {
    tenantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    contractURL: {
      type: String
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    rentAmount: {
      type: Number,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    generalInfo: {
      type: String
    },
    numCatastral: {
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
