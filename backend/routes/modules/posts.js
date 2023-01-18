const express = require('express')
const router = express.Router()
const checkAuth = require('../../utils/checkAuth')
const {create, getAll,getOne} = require('../../controller/postController')

router.post('/',checkAuth,create)
router.get('/',getAll)
router.get('/posts/:_id',getOne)

module.exports = router