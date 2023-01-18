const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    recipe: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        default:[]
    },
    viewsCount : {
        type:Number,
        default : 0
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bloguser',
        require:true
    },
    imgUrl:String
}, {
    timestamps: true
})

module.exports =  mongoose.model('Post', PostSchema)