const express = require("express");
const {
  getGoods,
  getCategories,
  getGoodById,
} = require("../controllers/goods");

const goodsRouter = express.Router();

goodsRouter.get("/", getGoods); //get all goods / filtered by shop
goodsRouter.get("/id/:goodId", getGoodById);
goodsRouter.get("/categories", getCategories); //get list of categories for all goods / selected shop goods

module.exports = goodsRouter;
