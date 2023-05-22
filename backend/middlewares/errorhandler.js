const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.send('Something wnet wrong');
  };
  
  module.exports = errorHandler;