const Shop = require("../../models/Shop");
const Good = require("../../models/Good");

const getShops = async (_, res) => {
  const shopIds = await Good.find({}, "shop -_id");
  const uniqueShopIds = Array.from(new Set(shopIds.map(({ shop }) => shop)));
  const shops = await Shop.find({ _id: { $in: uniqueShopIds } });

  res.status(200).json(shops);
};

module.exports = getShops;
