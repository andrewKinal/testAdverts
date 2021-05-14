const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
app.set('port', process.env.PORT || 3000);

const corsOptions = {
  origin: `http://localhost:${app.get('port')}`,
};

app.use(cors(corsOptions));
app.use(express.json());

module.exports = app;
