const  express = require('express');
const  router = express.Router();
const  MovieControllers= require('../controllers/movie.controller');
const  LogInControllers = require('../controllers/login.controller');

/* GET home page. */
router.get('/movies', MovieControllers.fetchDataFromDB);
router.post('/login',LogInControllers.logIn);
module.exports = router;
