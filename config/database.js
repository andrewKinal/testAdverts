const mongoose = require('mongoose');
require('dotenv').config();

const connect = async () => {
  try {
    const URL = process.env.MONGODB_URI;
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log('DB Connection established successfully');
  } catch(err) {
    console.log(err.message);
    process.exit();
  }
}

module.exports = connect;