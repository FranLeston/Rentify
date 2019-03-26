const mongoose = require("mongoose");
const constants = require("../constants");
const User = require("../models/user.model");

const contractSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    startdate: {
      type: Date
    },
    enddate: {
      type: Date
    },
    rentamount: {
      type: Number
    },
    homeproperty: {
      type: String
    },
    generalinfo: {
      type: String
    },
    contractURL: {
      type: String
    },
    numcatastral: {
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
