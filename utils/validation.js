const Joi = require("joi");

const NUMBER_REGEXP =
  /\+?\d{1,4}?[-\d\s]?\(?\d{1,3}?\)?[-\d\s]?\d{1,4}[-\d\s]?\d{1,4}[-\d\s]?\d{1,9}/;
const NUMBERS_ONLY_REGEXP = /^\+?[\d\s-()]*$/;
const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validation = {
  orderSchema: Joi.object({
    user: Joi.object({
      name: Joi.string().min(3).trim().required(),
      email: Joi.string().pattern(EMAIL_REGEXP).trim().required(),
      phone: Joi.string()
        .pattern(NUMBER_REGEXP, { name: "valid phone number" })
        .pattern(NUMBERS_ONLY_REGEXP, { name: "numbers and special symbols" })
        .trim()
        .required(),
      adress: Joi.string().required(),
    }),
    cart: Joi.object({
      goods: Joi.array()
        .items(
          Joi.object({
            productId: Joi.string().required(),
            amount: Joi.number().min(1).required(),
          })
        )
        .min(1)
        .required(),
      status: Joi.string()
        .valid("pending", "processing", "shipped", "delivered", "cancelled")
        .default("pending"),
      createdAt: Joi.date().default(Date.now),
    }),
  }),
  rateSchema: Joi.number().integer().min(1).max(5).required(),
};

module.exports = validation;
