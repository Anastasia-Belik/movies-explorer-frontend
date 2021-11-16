export default function checkSavedMovies(allMovies, savedMovies) {
  allMovies.forEach((movie) => {
    if(savedMovies){
      savedMovies.forEach((savedMovie) => {
        if (savedMovie.movieId === movie.id) {
          movie.isSaved = true;
          movie._id = savedMovie._id;
        }
      })
    }
  })

  return allMovies
}
