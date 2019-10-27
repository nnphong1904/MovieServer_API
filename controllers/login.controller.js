
module.exports.postlogIn=function(req, res, next){   
    res.header("Access-Control-Allow-Origin", "*");
    res.redirect('http://localhost:3001/movies');
}