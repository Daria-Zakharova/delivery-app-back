const { model, Schema } = require("mongoose");
const handleMongooseError = require("../utils/handle-mongoose-err");

const shopSchema = new Schema({
  name: { type: String, required: true, unique: true },
  rate: {
    1: { type: Number, default: 0 },
    2: { type: Number, default: 0 },
    3: { type: Number, default: 0 },
    4: { type: Number, default: 0 },
    5: { type: Number, default: 0 },
  },
});

shopSchema.post("save", handleMongooseError);
const Shop = model("shop", shopSchema);

module.exports = Shop;
