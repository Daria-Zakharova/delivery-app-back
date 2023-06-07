const Good = require("../../models/Good");

const getGoodById = async (req, res) => {
  const { goodId } = req.params;

  const good = await Good.findById(goodId);

  res.status(200).json(good);
};

module.exports = getGoodById;
