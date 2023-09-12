const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const accessLogStream = fs.createWriteStream(path.join(__dirname, '..', '/logs', 'access.log'), { flags: 'a' });

morgan.token('userAgent', function (req, res) {
  const headers = req.headers
  const userAgent = headers[ 'user-agent' ]
  return JSON.stringify(userAgent)
})
const errorLogStream = fs.createWriteStream(path.join(__dirname, '..', '/logs', 'error.log'), { flags: 'a' });

module.exports = {

  morganLogger: morgan(':method :url :status :res[content-length] - :response-time ms  :date[web] :userAgent', { stream: accessLogStream }),

  errorHandler: (err, req, res) => {

    if (req && res) {
      errorLogStream.write(`MESSAGE: Ha ocurrido un error en la ruta ${req.method} ${req.originalUrl},\n  ERROR: ${err.stack}\n\n`);
      res.status(500).send('Internal server error');
      return;
    }
    else {
      errorLogStream.write(`ERROR: ${err.stack}\n\n`);
    }
  }
  
}


