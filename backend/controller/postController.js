const Post = require("../models/post");

module.exports.create = async (req, res) => {
  try {
    const { title, recipe, tags, imgUrl } = req.body.param;
    const doc = new Post({
      title,
      recipe,
      tags,
      imgUrl,
      author: req.userId,
    });
    const postData = await doc.save();

    res.json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Создание не удалось",
    });
  }
};

module.exports.getAll = async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить статьи",
    });
  }
};
