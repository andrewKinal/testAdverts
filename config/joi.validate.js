const validate = (schema) => {
  return function (req, res, next) {
      const {error} = schema.validate(req['body'], {abortEarly: false});
      if (error) {
          return next(error);
      }
      return next();
  };
}

module.exports = validate;