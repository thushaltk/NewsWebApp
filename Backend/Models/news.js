const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const news = new Schema({
  id: {
    type: String,
    required: true,
  },
  mainHeading: {
    type: String,
    required: true,
  },
  subHeading: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  detailedDesc: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  comments: [
    {
      commentID: {
        type: String,
        required: true,
      },
      userImg: {
        type: String,
      },
      username: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("News", news);
