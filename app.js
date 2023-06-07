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
// app.use(express.static("img"));
app.use("/api/shops", shopsRouter);
app.use("/api/goods", goodsRouter);
app.use("api/orders", orderRouter);

module.exports = app;
