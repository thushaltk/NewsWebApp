const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const dbconnection = mongoose.connection;

module.exports = dbconnection;
