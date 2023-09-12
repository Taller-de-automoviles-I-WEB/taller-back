const { sign, verify } = require('jsonwebtoken');
const handleHttp = require('../utils/handle.logs');

const JTW_SECRET = process.env.JWT_SECRET || 'secret.key';

module.exports = {
  generateToken: async (payload) => {
    const jwt = sign({ payload }, JTW_SECRET, { expiresIn: '1h' });
    return jwt
  },
  verifyToken: async (jwt) => {
    try {
      
      const isVerified = verify(jwt, JTW_SECRET);
     
      return isVerified
      
    } catch (error) {
      handleHttp.errorHandler(error)
    }

  }
};
