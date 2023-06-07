const express = require("express");
const { addOrder } = require("../controllers/orders");
const { orderSchema } = require("../utils/validation");
const validateReqBody = require("../middleware/validateReqBody");

const ordersRouter = express.Router();

ordersRouter.put("/", validateReqBody(orderSchema), addOrder); //create order

module.exports = ordersRouter;
