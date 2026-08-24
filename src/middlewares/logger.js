function logger(req, res, next) {
  console.log(
    `${req.method} ${req.path} - IP: ${req.ip}`
  );
  next();
}
module.exports = logger;