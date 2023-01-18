const Post = require("../models/post");

module.exports.search = async (req,res)=>{
    const keyword = req.body.param.value.trim()
    const keywordRegExp = new RegExp(keyword, 'i')
    try{
        const data = await Post.find({
            $or: [{
                title: {
                    $regex : keywordRegExp
                }
            }, {
                tags: {
                    $regex : keywordRegExp
                }
            }]
        })
        res.json({data})
    }catch(e){
        console.log(err);
        res.status(500).json({
          message: "Не доступна",
        });
    }
}