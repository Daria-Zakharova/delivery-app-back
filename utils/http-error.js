const errorMessage = {
  400: "Bad request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
};

const HttpError = ({ status, message = errorMessage[status] }) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = HttpError;