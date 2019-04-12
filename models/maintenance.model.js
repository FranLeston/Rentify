const mongoose = require("mongoose");
const constants = require("../constants");
const User = require("../models/user.model");

const maintenanceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    title: {
      type: String,
      required: false
    },
    imageURL: {
      type: String,
      required: false

    },
    description: {
      type: String,
      required: false
    },
    isFixed: {
      type: Boolean,
      required: true,
      default: false
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

const Maintenance = mongoose.model("Maintenance", maintenanceSchema);

module.exports = Maintenance;
