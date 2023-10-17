const express = require("express");
const newsController = require("../Controllers/news-controller");

const router = express.Router();

//routes
router.post("/add-news", newsController.addNews);
router.patch("/update-news/:id", newsController.updateNews);
router.delete("/delete-news/:id", newsController.deleteNews);
router.patch("/add-comment/:id", newsController.addComment);
router.delete("/delete-comment/:id", newsController.deleteComment);

module.exports = router;
