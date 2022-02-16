const httpStatus = require("http-status");
const httpMocks = require("node-mocks-http");
const { errorHandler } = require("../src/middlewares/error");
const ApiError = require("../src/utils/ApiError");
const config = require("../src/config/config");

describe("Error handler", () => {
  test("should send proper error response and put the error message in res.locals", () => {
    const error = new ApiError(httpStatus.BAD_REQUEST, "Any error");
    const res = httpMocks.createResponse();
    const sendSpy = jest.spyOn(res, "send");

    errorHandler(error, httpMocks.createRequest(), res);

    expect(sendSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        code: error.statusCode,
        message: error.message,
      })
    );
    expect(res.locals.errorMessage).toBe(error.message);
  });
  test("should put the error stack in the response if in development mode", () => {
    config.env = "development";
    const error = new ApiError(httpStatus.BAD_REQUEST, "Any error");
    const res = httpMocks.createResponse();
    const sendSpy = jest.spyOn(res, "send");

    errorHandler(error, httpMocks.createRequest(), res);

    expect(sendSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        code: error.statusCode,
        message: error.message,
        stack: error.stack,
      })
    );
  });
  test("should send internal server error status and message if in production mode", () => {
    config.env = "production";
    const error = new ApiError(httpStatus.BAD_REQUEST, "Any error", false);
    const res = httpMocks.createResponse();
    const sendSpy = jest.spyOn(res, "send");

    errorHandler(error, httpMocks.createRequest(), res);

    expect(sendSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        code: httpStatus.INTERNAL_SERVER_ERROR,
        message: httpStatus[httpStatus.INTERNAL_SERVER_ERROR],
      })
    );
    expect(res.locals.errorMessage).toBe(error.message);
  });
});
