const Good = require("../../models/Good");

const getGoods = async (req, res) => {
  const {
    page = 1,
    limit = 9,
    shop = null,
    category = null,
    sort = "name",
  } = req.query;
  const skip = (page - 1) * limit;
  const query = shop ? { shop } : {};
  category && (query.category = category);
  const goods = await Good.find(query, "", { skip, limit }).sort({ [sort]: 1 });

  res.status(200).json(goods);
};

module.exports = getGoods;
