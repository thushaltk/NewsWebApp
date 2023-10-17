const express = require("express");
const dbconnection = require("./db");
const adminRouter = require("./Routes/admin-routes");
const userRouter = require("./Routes/user-routes");
const newsRouter = require("./Routes/news-routes");

const app = express();
const PORT = process.env.PORT || 5000;

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", adminRouter);
app.use("/user", userRouter);
app.use("/news", newsRouter);

//Server and database connection
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} :)`);
  dbconnection.on(
    "error",
    console.error.bind(console, "MongoDB connection error")
  );

  dbconnection.once("open", () => {
    console.log("Connected to MongoDB :)");
  });
});
