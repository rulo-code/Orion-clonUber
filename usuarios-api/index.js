
const express = require('express');
const app = express();

const { config } = require('./config/index');
const usersApi = require('./routes/users.js');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
usersApi(app);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});