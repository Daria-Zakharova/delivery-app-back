const rateShop = require("./rateShop");
const getShops = require("./getShops");
const ctrlWrap = require("../../utils/ctrlWrap");

module.exports = { rateShop: ctrlWrap(rateShop), getShops: ctrlWrap(getShops) };
