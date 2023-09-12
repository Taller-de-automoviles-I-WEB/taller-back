const tokenHandler = require('../utils/handle.jwt')
const handleHttp = require('../utils/handle.logs')

const checkJwt = async (req, res, next) => {
  try {
    const bearerJwt = req.headers.authorization
    const jwtByUser = bearerJwt?.split(' ').pop()
    const isUser = await tokenHandler.verifyToken(jwtByUser)
    if (!isUser) return res.status(401).send('NOT AUTHORIZED')
    req.user = isUser
    next()
  } catch (error) {
    handleHttp.errorHandler(error)
  }
}

module.exports = checkJwt;