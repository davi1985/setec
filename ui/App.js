import { hot } from 'react-hot-loader';
import React, { Component } from 'react';

const movies = [
  {
    name: 'Fast & Furiouss',
    duration: 120,
  },
  {
    name: 'Avanger',
    duration: 150,
  },
  {
    name: 'Forest Gump',
    duration: 100,
  },
  {
    name: 'Iron Man',
    duration: 70,
  }
];


const App = () => {
  // const moviesLess120 = [];
  // for (let i = 0; i < movies.length; ++i) {
  //   const movie = movies[i];
  //   if (movie.duration <= 120) {
  //     moviesLess120.push(movie);
  //   }    
  // }

  const moviesLess120 = movies
  .filter(movie => movie.duration <= 120);

  console.log('movieLess120', moviesLess120);
  return moviesLess120.length;
};
export default hot(module)(App);
