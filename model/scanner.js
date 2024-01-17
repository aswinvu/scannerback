const mongoose = require("mongoose");

const scannerschema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    price:{
        type: String,
        required: true,
    },

    imageurls: [],


    description: {
      type: String,
      required: true,
    },

    display: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const scannerModel = mongoose.model("scanners", scannerschema);

module.exports = scannerModel;