// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MoviesPage from './MoviesPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/">
            <div>Home Page</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
