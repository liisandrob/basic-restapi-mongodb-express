const jwt = require('jsonwebtoken');

const createToken = (dataForToken) => {
  return jwt.sign(dataForToken, process.env.JWT_SECRET, {expiresIn: '24h'})
}

const checkToken = (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) throw new Error('Authentication Error');
    token = token.split(' ');

    if(token[0] !== 'Bearer') throw new Error('Authentication Error');
    token = jwt.verify(token[1], process.env.JWT_SECRET);
    
    // Here goes extra validation of the token
  } catch (error) {
    if(error.name === 'JsonWebTokenError') res.status(401);
    if(error.message === 'Authentication Error') res.status(401)
    next(error);
  }
  next();
}

module.exports = {
  createToken,
  checkToken
}