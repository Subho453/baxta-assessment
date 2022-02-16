const httpStatus = require("http-status");
const config = require("../config/config");

const errorHandler = (err, req, res) => {
  let { statusCode, message } = err;
  if (config.env === "production") {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
  }

  res.locals.errorMessage = err.message;
  res.locals.errorStack = err.stack;

  const response = {
    code: statusCode,
    message,
    ...(config.env === "development" && { stack: err.stack }),
  };

  res.status(statusCode).send(response);
};

module.exports = {
  errorHandler,
};
