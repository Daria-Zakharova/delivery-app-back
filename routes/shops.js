const express = require("express");

const shopsRouter = express.Router();

shopsRouter.get("/"); //get list of shops
shopsRouter.patch("/rate/:shopId");

module.exports = shopsRouter;
