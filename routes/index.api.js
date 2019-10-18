const  express = require('express');
const  router = express.Router();
const  MovieControllers= require('../controllers/movie.controller');

/* GET home page. */
router.get('/', MovieControllers.fetchDataFromDB);

module.exports = router;
