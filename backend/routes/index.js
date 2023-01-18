const express = require('express')
const router = express.Router()

const auth = require('./modules/auth')
router.use('/auth',auth)

const post = require('./modules/posts')
router.use('/posts',post)

const edit = require('./modules/edit')
router.use('/edit',edit)

const search = require('./modules/search')
router.use('/search',search)

module.exports = router