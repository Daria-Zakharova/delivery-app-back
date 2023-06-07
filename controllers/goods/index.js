const getCategories = require("./getCategories");
const getGoods = require("./getGoodsList");
const getGoodById = require("./getGoodById");
const ctrlWrap = require("../../utils/ctrlWrap");

module.exports = {
  getGoods: ctrlWrap(getGoods),
  getGoodById: ctrlWrap(getGoodById),
  getCategories: ctrlWrap(getCategories),
};
