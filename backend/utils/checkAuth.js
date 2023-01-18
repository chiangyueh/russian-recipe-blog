const jwt = require('jsonwebtoken')

const auth = (req,res,next) => {
    const token = req.body.param.token
    if(token){
        try{
            const decoded = jwt.verify(token,"mySecret")
            req.userId = decoded._id
            next()
        }catch(e){
            return res.status(403).json({
                message : 'Не доступна'
            })
        }
    }else{
        return res.status(403).json({
            message : 'Не доступна'
        })
    }
}

module.exports = auth