const express = require("express");
const app = express();
const routes = require('./routes');
const cors = require('cors')
require('./config/mongoose')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(routes)

app.listen(80, () => {
    console.log(`This project is now running on localhost:${80}`)
})