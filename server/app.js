const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

let index = require('./routes/index');

const app = express();

let db_config = {
  development: 'mongodb://localhost/blog-dev',
  test: 'mongodb://localhost/blog-test'
}

let app_env = app.settings.env;

mongoose.connect(db_config[app_env], function(err, res) {
  console.log('connected to database ' + db_config[app_env]);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', index);

app.listen(3000);
console.log('listening to port 3000 ...');

module.exports = app;
