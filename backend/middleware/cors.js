const corsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://172.26.0.217:3004');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-jwt-token');
  res.header('Access-Control-Allow-Credentials', true);

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
};

module.exports = corsMiddleware;
