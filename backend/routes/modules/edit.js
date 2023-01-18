const express = require('express')
const router = express.Router()
const {edit} = require('../../controller/editController')
const checkAuth = require('../../utils/checkAuth')
router.post('/:_id',checkAuth,edit)


module.exports = router