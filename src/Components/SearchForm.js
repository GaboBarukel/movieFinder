import React from "react";

import classes from "./SearchForm.module.css";

const SearchForm = (props) => {
  const searchHandler = (e) => {
    e.preventDefault();
    const searchTerm = e.target[0].value;
    props.onSearchPass(searchTerm);
    props.onShow(false);
    // e.target[0].value = "";
  };

  const onChangeHandler = (e) => {
    if (e.target.value === "") {
      props.onInput();
    }
  };

  return (
    <div className={classes.form}>
      <h1>MOVIE FINDER</h1>
      <form onSubmit={searchHandler}>
        <input
          id="searchInput"
          placeholder="Buscar"
          onChange={onChangeHandler}
          className={classes.input}
        />
        <label htmlFor="searchInput" className={classes.inputLabel}>
          Buscar
        </label>
      </form>
    </div>
  );
};

export default SearchForm;
