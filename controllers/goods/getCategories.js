const Good = require("../../models/Good");

const getCategories = async (_, res) => {
  const categories = await Good.find({}, "category");
  const uniqueCategories = Array.from(
    new Set(categories.map(({ category }) => category))
  );
  res.status(200).json(uniqueCategories);
};

module.exports = getCategories;
