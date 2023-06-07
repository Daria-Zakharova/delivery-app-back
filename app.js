const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

const shopsRouter = require("./routes/shops");
const goodsRouter = require("./routes/goods");
const orderRouter = require("./routes/orders");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/shops", shopsRouter);
app.use("/api/goods", goodsRouter);
app.use("/api/orders", orderRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, _, res, __) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
