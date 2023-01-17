const mongoose = require('mongoose');
require('dotenv').config()
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection

db.on('error',()=>console.log('err'))
db.once('open',()=>console.log('ok'))

module.exports = db