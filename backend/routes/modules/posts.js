const express = require('express')
const router = express.Router()
const checkAuth = require('../../utils/checkAuth')
const {create, getAll} = require('../../controller/postController')

router.post('/',checkAuth,create)
router.get('/',getAll)

module.exports = router