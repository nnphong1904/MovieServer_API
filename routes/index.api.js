const  express = require('express');
const  router = express.Router();
const  MovieControllers= require('../controllers/movie.controller');

/* GET home page. */
router.get('/movies', MovieControllers.fetchDataFromDB);

module.exports = router;
