const express = require("express");

const goodsRouter = express.Router();

goodsRouter.get("/"); //get all goods / filtered by shop
goodsRouter.get("/categories"); //get list of categories for all goods / selected shop goods

module.exports = goodsRouter;
