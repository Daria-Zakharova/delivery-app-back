const { model, Schema, SchemaTypes } = require("mongoose");

const goodSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: {
    type: [String],
    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: [
      "М'ясо та птиця",
      "Риба та морепродукти",
      "Молочні продукти",
      "Фрукти та овочі",
      "Хлібобулочні вироби",
      "Кондитерські вироби",
      "Олії та жири",
      "Крупи та бобові",
      "Напої",
      "Консерви",
      "Соуси та приправи",
      "Заморожені продукти",
    ],
    required: true,
  },
  imgUrl: {
    type: String,
    default: function () {
      const rootPath = process.cwd();
      return `${rootPath}/img/default-goods-img.png`;
    },
  },
  unit: {
    type: String,
    enum: ["кг", "літр", "шт"],
    required: true,
  },
  sizePerItem: {
    type: Number,
    min: 0.001,
    required: true,
  },
  price: {
    type: Number,
    min: 0.01,
    required: true,
  },
  shop: { type: SchemaTypes.ObjectId, required: true },
  inStock: {
    type: Number,
    min: 0,
    required: true,
  },
});

const Good = model("good", goodSchema);

module.exports = Good;
