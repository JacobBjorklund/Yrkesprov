const { resolveSoa } = require('dns');
const express = require('express');
const path = require('path');
const movies = require('./data/movies.json');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join('public')));

app.get('/api/movies', (request, response) => {
  response.status(200).json(movies.map(movie => ({
    id: movie.id,
    title: movie.title,
    age: movie.age,
    genres: movie.genres,
    releaseDate: movie.releaseDate,
    rating: movie.rating
  })));
});

app.get('/api/movies/:id', (req, res) => {
  const movie = movies.find(item => item.id == req.params.id)
  if (!movie) {
    return res.status(200).json({ error: `Person with this id ${req.params.id} not found` })
  }
  res.status(200).json(movie)
})

app.get('/movie/:id', (req, res) => {
  res.status(200).sendFile(path.resolve("public/movie.html"))
})

app.listen(port, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`Server is running at http://localhost:${port}`);
});
