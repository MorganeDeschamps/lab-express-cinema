const express = require('express');
const router = express.Router();

const Movies = require("../models/Movie.model")

/* Movies list */
router.get("/", (req, res, next) => {
    Movies.find()
    .then(moviesDB => {
        console.log(moviesDB)
        res.render('movies' , {moviesDB})
    }).catch((err) => console.log("There is an error in it2: ", err) )
});


/* Movie details*/
router.get("/:id", (req, response)=> {
    Movies.findById(req.params.id)
    .then( data => {
        response.render('movie-details', data)
    })
    .catch(err => console.log('Error while searching movie details: ', err))
})


module.exports = router;
