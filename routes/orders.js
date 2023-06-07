const express = require("express");

const ordersRouter = express.Router();

ordersRouter.put("/"); //create order
ordersRouter.patch("/cancel/:orderId"); //cansel order

module.exports = ordersRouter;
