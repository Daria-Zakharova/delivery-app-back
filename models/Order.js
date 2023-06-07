const { model, Schema, SchemaTypes } = require("mongoose");

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
        id: { type: SchemaTypes.ObjectId, required: true },
        amount: { type: Number, min: 1, required: true },
      },
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

const Order = model("order", orderSchema);

module.exports = Order;
