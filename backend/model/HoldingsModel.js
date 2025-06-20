const {model} = require("mongoose");

const {HoldingsSchema} = require("../schemas/HoldingsSchema");

const HoldingsModel = new model("holding", HoldingsSchema);
module.exports = {HoldingsModel};

// our collection name will be holding + s = holdings