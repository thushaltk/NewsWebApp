const newsModel = require("../Models/news");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const addNews = async (req, res) => {
  newsModel
    .create({
      id: req.body.id,
      mainHeading: req.body.mainHeading,
      subHeading: req.body.subHeading,
      imgUrl: req.body.imgUrl,
      date: req.body.dateCreated,
      time: req.body.timeCreated,
      summary: req.body.sumDesc,
      detailedDesc: req.body.desc,
      category: req.body.category,
      comments: [],
    })
    .then((data) => {
      if (data) {
        return res
          .status(200)
          .send({ msg: "News added successfully", data: data });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send({ msg: "Server Error Occured!" });
    });
};

const getAllNews = async (req, res) => {
  newsModel
    .find()
    .then((data) => {
      if (data) {
        return res.status(200).send({
          success: true,
          data: data,
        });
      } else {
        return res
          .status(500)
          .send({ success: false, msg: "News not retreived!.", data: data });
      }
    })
    .catch((err) => {
      return res
        .status(500)
        .send({ success: false, msg: "Server error occured!", data: data });
    });
};

const updateNews = async (req, res) => {
  newsModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      if (data) {
        return res.status(200).send({
          success: true,
          msg: "News updated successfully.",
          data: data,
        });
      } else {
        return res
          .status(500)
          .send({ success: false, msg: "News not updated!.", data: data });
      }
    })
    .catch((err) => {
      return res
        .status(500)
        .send({ success: false, msg: "Server error occured!", data: data });
    });
};

const deleteNews = async (req, res) => {
  newsModel
    .findByIdAndRemove(req.params.id)
    .then((data) => {
      if (data) {
        return res.status(200).send({
          success: true,
          msg: "News Deleted Successfully",
          data: data,
        });
      } else {
        return res
          .status(500)
          .send({ success: false, msg: "News not deleted!.", data: data });
      }
    })
    .catch((err) => {
      return res
        .status(500)
        .send({ success: false, msg: "Server error occured!", data: data });
    });
};

const addComment = async (req, res) => {
  newsModel
    .updateOne(
      { _id: req.params.id },
      {
        $push: {
          comments: {
            commentID: req.body.commentID,
            userImg: req.body.userImg,
            username: req.body.username,
            content: req.body.content,
          },
        },
      }
    )
    .then((result) => {
      return res.status(200).send({
        success: true,
        msg: "Comment added successfully.",
      });
    })
    .catch((err) => {
      return res
        .status(500)
        .send({ success: false, msg: "Server error occured!" });
    });
};

const deleteComment = async (req, res) => {
  newsModel
    .updateOne(
      { _id: req.params.id },
      { $pull: { comments: { commentID: req.body.commentID } } }
    )
    .then((result) => {
      return res.status(200).send({
        success: true,
        msg: "Comment deleted successfully.",
      });
    })
    .catch((err) => {
      return res
        .status(500)
        .send({ success: false, msg: "Server error occured!" });
    });
};

module.exports = {
  addNews,
  getAllNews,
  updateNews,
  deleteNews,
  addComment,
  deleteComment,
};
