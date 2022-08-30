const Hash = require("./../models/hash20Model");

exports.getHashes = async (req, res) => {
  try {
    const hashes = await Hash.find();
    res.status(200).json({
      type: "success",
      results: hashes.length,
      hashes: hashes,
    });
  } catch (err) {
    res.status(404).json({
      type: "error",
      message: err.message,
    });
  }
};
exports.newHash = async (req, res) => {
  try {
    const { bsc, tg, amount, ip, country } = req.body;
    const newHash = await Hash.create({
      bsc: bsc,
      tg: tg,
      amount: amount,
      ip: ip,
      country: country,
    });
    res.status(201).json({
      type: "success",
      newHash,
    });
  } catch (err) {
    res.status(404).json({
      type: "error",
      message: err.message,
    });
  }
};
