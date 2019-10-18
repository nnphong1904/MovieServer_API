const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const MovieSchema= new Schema({
    title:String,
    year:Number,
    discription:String,
    author:String,
    caster:String,
    poster:String
})
const Movie = mongoose.model('Movie',MovieSchema,'movie');
module.exports = Movie;