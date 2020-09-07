
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')
const config = require('../config')

var authMiddleware = function (req, res, next) {
  if(!req.headers.token){
    return res.status(401).send({
      statusCode: 401,
      message: 'invalid token'
    })
  }
  next()
};

app.use(bodyParser.json());

app.get('/',(req,res,next) => {
  res.send({ message: 'hello dasa, ME CONTRATA :)' });
})

app.use(authMiddleware);

app.use('/api/v1',routes)


// basic middleware
app.use((err, req, res, next) => {
  if (err) {
    console.error(err.message)
    if (!err.statusCode) {
      err.statusCode = 500
    }
    // if status code not setted, its a server error
    return res.status(err.statusCode).send({
      statusCode: err.statusCode,
      message: err.message
    })
  }

  next()
})

// 404 middleware
app.use(function (req, res) {
  res.status(404).json({
    status: 'Route not exist'
  });
});


const PORT = config.PORT || 3000

app.listen(PORT, () => {
    console.log('----------------------------');
    console.log(`Listening on PORT: ${PORT}`);
    console.log('----------------------------');
})

