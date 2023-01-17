const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')

module.exports.register = async (req, res) => {
    try {
      const { email, userName, password } = req.body.param;
      const salt = await bcrypt.genSalt(12);
      const hash = await bcrypt.hash(password, salt);
      const doc = new User({
        email,
        userName,
        hashPassword: hash,
      });
      const user = await doc.save();
    //   const token = jwt.sign(
    //     {
    //       _id: user._id,
    //     },
    //     "mySecret",
    //     {
    //       expiresIn: "1d",
    //     }
    //   );
  
    //   const { hashPassword, ...userData } = user._doc;
      res.send({
        message : "Аккаунт успешно создан"
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Почта уже используется другим пользователем",
      });
    }
}

module.exports.login = async (req, res) => { 
    try {
      const {email,password} = req.body.param
      const user = await User.findOne({ email : email});
      if (!user) {
        return res.status(404).json({ message: "Пользователь не найден" });
      }
  
      const isValidPass = await bcrypt.compare(
        password,
        user._doc.hashPassword
      );
  
      if (!isValidPass)
        return res.status(400).jspn({ message: "Пароль не верна" });
  
      const token = jwt.sign(
        {
          _id: user._id,
        },
        "mySecret",
        {
          expiresIn: "1d",
        }
      );
  
      const { hashPassword, ...userData } = user._doc;
  
      res.send({
        ...userData,
        token,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Не доступна",
      });
    }
}