const express = require('express')
const router = express.Router()

const auth = require('./modules/auth')
router.use('/auth',auth)

const post = require('./modules/posts')
router.use('/posts',post)

module.exports = router