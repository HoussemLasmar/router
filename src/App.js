// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import './App.css';

function App() {
  return (

      <div className="App">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/Movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
   
  );
}

export default App;
