const jwt = require("jsonwebtoken");
const Post = require("../models/post");
const mongoose = require("mongoose");
module.exports.edit = async (req, res) => {
  const decoded = jwt.verify(req.body.param.token, "mySecret");
  try {
    await Post.findOne({ _id: req.params._id }).then((result) => {
      if (result.author.toJSON() === decoded._id) {
        res.json({ message: true });
      } else {
        res.json({ message: false });
      }
    });
  } catch (err) {
    console.log(err);
    res.json({
      message: "Не доступна",
    });
  }
};
