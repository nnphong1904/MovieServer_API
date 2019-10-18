const Movie= require('../modules/movie.modules');

module.exports.fetchDataFromDB= async function (req,res,next){
    const Movies= await Movie.find();
    res.json(Movies);
}