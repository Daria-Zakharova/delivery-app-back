const Order = require("../../models/Order");

const addOrder = async (req, res) => {
  const order = await Order.create(req.body);
  res.status(201).json(order);
};

module.exports = addOrder;
