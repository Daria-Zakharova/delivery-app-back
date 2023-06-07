const ctrlWrap = require("../../utils/ctrlWrap");
const addOrder = require("./addOrder");

module.exports = { addOrder: ctrlWrap(addOrder) };
