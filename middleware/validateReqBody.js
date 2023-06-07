const HttpError = require("../utils/http-error");

const validateReqBody = (schema) => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError({ status: 400, message: error.message }));
    }
    next();
  };
  return func;
};

module.exports = validateReqBody;
