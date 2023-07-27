// MoviesPage.js
import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import MoviesList from './MoviesList'; // Corrected import path
import MovieShow from './MovieShow'; // Corrected import path
import moviesData from '../data'; // Corrected import path

function MoviesPage() {
  const match = useRouteMatch();
  return (
    <div>
      <h1>Movies Page</h1>
      <MoviesList movies={moviesData} />
      <Route path={`${match.path}/:movieId`}>
        <MovieShow movies={moviesData} />
      </Route>
    </div>
  );
}

export default MoviesPage;
