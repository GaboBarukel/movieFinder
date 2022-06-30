import { useState, useEffect } from "react";
import axios from "axios";

import Loading from "./Loading";
import MovieItem from "./MovieItem";

import classes from "./MovieList.module.css";

const SearchedMoviesList = (props) => {
  const [searchedMovies, setSearchedMovies] = useState(null);

  useEffect(() => {
    const queryTerm = props.onSearchTerm;
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=5ccf9793fb9ce59b758d5b9a8ee6ed6e&language=es-419&query=${queryTerm}&page=1&include_adult=false`
      )
      .then((searchResult) => {
        setSearchedMovies(searchResult.data.results.slice(0, 6));
      });
  }, [props.onSearchTerm]);

  return (
    <div className={classes.movieContainer}>
      <h2 className={classes.title}>RESULTADOS</h2>
      {searchedMovies ? (
        <ul className={classes.list}>
          {searchedMovies.map(
            (movie) =>
              movie.poster_path && (
                <MovieItem movieData={movie} key={movie.id} />
              )
          )}
        </ul>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default SearchedMoviesList;
