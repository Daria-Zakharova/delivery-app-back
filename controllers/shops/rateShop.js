const Shop = require("../../models/Shop");

const rateShop = async (req, res) => {
  const { shopId } = req.params;
  const { rate } = req.body;
  const shop = await Shop.findByIdAndUpdate(
    shopId,
    { $inc: { [`rate.${rate}`]: 1 } },
    { new: true }
  );
  res.status(201).json(shop);
};

module.exports = rateShop;
