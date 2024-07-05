// src/MovieList.js
import React from 'react';
import { Link } from 'react-router-dom';
import Movies from './Movies'; // Ensure the case matches the filename

const MovieList = () => {
  return (
    <div className="movie-list">
      <h1>Movie List</h1>
      <ul>
        {Movies.map(Movie => (
          <li key={Movie.id}>
            <Link to={`/Movie/${Movie.id}`}>
              <h2>{Movie.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
