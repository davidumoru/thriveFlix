const movies = [
    {
      id: 1,
      title: "Hacksaw Ridge",
      year: 2016,
      genre: "Biography, Drama, History",
      posterImage: "./images/hacksaw_ridge.jpg"
    },
    {
      id: 2,
      title: "Interstellar",
      year: 2014,
      genre: "Adventure, Drama, Sci-Fi",
      posterImage: "./images/interstellar.jpg"
    },
    {
      id: 3,
      title: "The Social Network",
      year: 2010,
      genre: "Biography, Drama",
      posterImage: "./images/social_network.jpg"
    },
    {
      id: 4,
      title: "Inception",
      year: 2010,
      genre: "Action, Adventure, Sci-Fi",
      posterImage: "./images/inception.jpg"
    },
    {
      id: 5,
      title: "The Shawshank Redemption",
      year: 1994,
      genre: "Drama",
      posterImage: "./images/shawshank_redemption.jpg"
    },
    {
      id: 6,
      title: "Pulp Fiction",
      year: 1994,
      genre: "Crime, Drama",
      posterImage: "./images/pulp_fiction.jpg"
    },
    {
      id: 7,
      title: "The Dark Knight",
      year: 2008,
      genre: "Action, Crime, Drama",
      posterImage: "./images/dark_knight.jpg"
    },
    {
      id: 8,
      title: "Fight Club",
      year: 1999,
      genre: "Drama",
      posterImage: "./images/fight_club.jpg"
    },
    {
      id: 9,
      title: "The Matrix",
      year: 1999,
      genre: "Action, Sci-Fi",
      posterImage: "./images/matrix.jpg"
    },
    {
      id: 10,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
      genre: "Adventure, Drama, Fantasy",
      posterImage: "./images/lotr.jpg"
    },
    {
      id: 11,
      title: "Forrest Gump",
      year: 1994,
      genre: "Drama, Romance",
      posterImage: "./images/forest_gump.jpg"
    },
    {
      id: 12,
      title: "The Godfather",
      year: 1972,
      genre: "Crime, Drama",
      posterImage: "./images/godfather.jpg"
    },
    {
      id: 13,
      title: "Schindler's List",
      year: 1993,
      genre: "Biography, Drama, History",
      posterImage: "./images/schindlers_list.jpg"
    },
    {
      id: 14,
      title: "The Avengers",
      year: 2012,
      genre: "Action, Adventure, Sci-Fi",
      posterImage: "./images/avengers.jpg"
    },
    {
      id: 15,
      title: "Inglourious Basterds",
      year: 2009,
      genre: "Adventure, Drama, War",
      posterImage: "./images/inglourious_basterds.jpg"
    }
  ];  

const movieCard = document.getElementById('card-container');

function displayMovieCard(movies) {
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];

    const movieDetails = document.createElement('div');
    movieDetails.classList.add('movie-card');

    const posterImage = document.createElement('img');
    posterImage.src = movie.posterImage;
    posterImage.classList.add('poster-image');
    movieDetails.appendChild(posterImage);

    const title = document.createElement('h2');
    title.textContent = movie.title;
    movieDetails.appendChild(title);

    const year = document.createElement('p');
    year.textContent = `Year: ${movie.year}`;
    movieDetails.appendChild(year);

    const genre = document.createElement('p');
    genre.textContent = `Genre: ${movie.genre}`;
    movieDetails.appendChild(genre);

    movieCard.appendChild(movieDetails);
  }
}

displayMovieCard(movies);