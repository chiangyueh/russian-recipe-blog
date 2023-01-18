const Post = require("../models/post");
const jwt = require('jsonwebtoken')
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

module.exports.getOne = async (req,res) => {
    try {
        const postId = req.params._id;
        const {token} = req.body.param
        const decoded = jwt.verify(token,"mySecret")
        const data = await Post.findOneAndUpdate(
          {
            _id: postId,
          },
          {
            $inc: { viewsCount: 1 },
          },
          {
            returnDocument: "after",
          },
        ).populate('author').exec();
        res.json({
          data,
          decoded
        })
      } catch (err) {
        console.log(err);
        res.status(500).json({
          message: "Не доступна",
        });
      }
}
