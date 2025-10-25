const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  // Sometimes an error comes in with a 200 status code, we want to default to 500
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // Specific Mongoose error for duplicate keys
  if (err.code === 11000) {
    statusCode = 400;
    message = 'An account with that email already exists.';
  }

  res.status(statusCode).json({
    message: message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
