const mongoose = require("mongoose");
const furnitureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

module.exports = new mongoose.model("FurnitureSchema", furnitureSchema);

