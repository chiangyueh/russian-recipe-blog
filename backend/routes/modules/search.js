const express = require('express');
const router = express.Router();
const {search} = require('../../controller/searchController')
router.post('/',search)


module.exports = router