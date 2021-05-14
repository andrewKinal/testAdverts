const express = require('express');
const app = express();

require('dotenv').config();
app.set('port', process.env.PORT || 3000);
app.set('host', process.env.HOST || 'localhost')

app.use(express.json());

module.exports = app;
