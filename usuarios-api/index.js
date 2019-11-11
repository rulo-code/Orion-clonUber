
const express = require('express');
const app = express();

const { config } = require('./config/index');
const usersApi = require('./routes/users.js');


// body parser
app.use(express.json());
usersApi(app);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});