const express = require('express');
const router = express.Router();
const {search} = require('../../controller/searchController')
router.get('/keyword',search)


module.exports = router