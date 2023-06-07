const express = require("express");
const { getShops, rateShop } = require("../controllers/shops");
const { rateSchema } = require("../utils/validation");
const validateReqBody = require("../middleware/validateReqBody");
const shopsRouter = express.Router();

shopsRouter.get("/", getShops); //get list of shops
shopsRouter.patch("/rate/:shopId", validateReqBody(rateSchema), rateShop);

module.exports = shopsRouter;
