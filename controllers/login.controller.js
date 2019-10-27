
module.exports.postlogIn=function(req, res, next){   
   res.cookie('message',true);
   res.redirect('google.com.vn');
}