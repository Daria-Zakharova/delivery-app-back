const { model, Schema, SchemaTypes } = require("mongoose");
const handleMongooseError = require("../utils/handle-mongoose-err");

const orderSchema = new Schema({
  user: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  cart: {
    goods: [
      {
        productId: { type: SchemaTypes.ObjectId, required: true },
        amount: { type: Number, min: 1, required: true },
      },
      { id: false },
    ],
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
});

orderSchema.post("save", handleMongooseError);
const Order = model("order", orderSchema);

module.exports = Order;
