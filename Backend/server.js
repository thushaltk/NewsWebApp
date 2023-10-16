const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log("Server connected :)");
});
