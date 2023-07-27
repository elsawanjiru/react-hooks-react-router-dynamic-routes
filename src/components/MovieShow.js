// MovieShow.js
import React from 'react';
import { useParams } from 'react-router-dom';

function MovieShow({ movies }) {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(movieId));

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Time: {movie.time}</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieShow;
