const mongoose = require("mongoose");

const hashSchema = mongoose.Schema(
  {
    bsc: {
      type: String,
      required: [true, "Bsc Address Is Required"],
      unique: true,
    },
    tg: { type: String, required: [true, "Tg Is Required"] },
    amount: { type: Number, required: [true, "Amount Is Required"] },
    ip: { type: String, required: [true, "Ip Address Is Required"] },
    country: { type: String, required: [true, "Country Is Required"] },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Hash = mongoose.model("Hash", hashSchema);
module.exports = Hash;
