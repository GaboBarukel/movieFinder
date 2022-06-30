import { useState } from "react";

import classes from "./App.module.css";

import PopularMovieList from "./Components/PopularMoviesList";
import SearchForm from "./Components/SearchForm";
import SearchedMoviesList from "./Components/SearchedMoviesList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  const showSearchHandler = (set) => {
    setShowSearch(set);
  };

  const searchTermPass = (search) => {
    setSearchTerm(search);
  };

  const onEmptyInputHandler = () => {
    setShowSearch(true);
  };

  return (
    <div className={classes.app}>
      <SearchForm
        onShow={showSearchHandler}
        onSearchPass={searchTermPass}
        onInput={onEmptyInputHandler}
      />
      {showSearch ? (
        <PopularMovieList />
      ) : (
        <SearchedMoviesList onSearchTerm={searchTerm} />
      )}
    </div>
  );
}

export default App;
