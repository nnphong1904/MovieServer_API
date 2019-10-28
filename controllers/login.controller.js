
module.exports.postlogIn=function(req, res, next){   
    res.cookie('mess',true,{path:'http://localhost:3000'})
    res.json({token:'aqweq12312sdasdas'});
   
}