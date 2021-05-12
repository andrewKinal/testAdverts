module.exports = function(err, req, res, next) {
    if (err.isJoi) {
        const error = {
            code: 500,
            message: 'Bad Request',
            details: err.details && err.details.map(err => {
                return {
                    message: err.message,
                    param: err.path
                };
            })
        };
        return res.status(500).json(error);
    }
    // If this isn't a Joi error, send it to the next error handler
    return next(err);
};