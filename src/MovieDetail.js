// src/MovieDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Movies from './Movies'; // Ensure the case matches the filename

const MovieDetail = () => {
  const { id } = useParams();
  const Movie = Movies.find(m => m.id === parseInt(id));

  if (!Movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail">
      <h1>{Movie.title}</h1>
      <p>{Movie.description}</p>
      <div className="trailer">
        <iframe
          width="560"
          height="315"
          src={Movie.trailer}
          title={Movie.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default MovieDetail;
