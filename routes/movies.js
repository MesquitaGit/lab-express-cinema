const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');



router.get('/movies', async (req, res, next) => {
    try {
        const allMovies = await Movie.find();
        res.render('movies/movies', {movies: allMovies})
    } catch(error) {
        next(error);
    }
})

router.get('/movies/:movieId', async (req, res, next) => {
    try {
        const { movieId } = req.params;
        const movie = await Movie.findById(movieId)
        res.render('movies/movies-details', movie);
    } catch(error) {
        next(error);
    }
});

  
  module.exports = router;