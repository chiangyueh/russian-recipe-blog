const {body} = require('express-validator')

module.exports.registerValidator = [
    body('email','Введите пожалуйста, действительный почта').isEmail(),
    body('password','Неверный формат пароля').isLength({min : 5}),
]