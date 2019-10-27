
module.exports.postlogIn=function(req, res, next){   
    res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.redirect('http://localhost:3001/movies');
}