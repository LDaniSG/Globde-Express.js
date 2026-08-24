function authCheck(rolPermitido) {
  return (req, res, next) => {
    const rol = req.headers['x-user-role'];
    if (rol === rolPermitido) {
      next();
    } else {
      res.status(403).json({
        mensaje: 'Acceso denegado'
      });
    }
  };
}
module.exports = authCheck;