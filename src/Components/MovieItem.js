import { useState } from "react";

import classes from "./MovieItem.module.css";

const MovieItem = ({ movieData }) => {
  const [showExtraInfo, setShowExtraInfo] = useState(false);

  const extraInfoHandler = () => {
    if (!showExtraInfo) {
      setShowExtraInfo(true);
    } else {
      setShowExtraInfo(false);
    }
  };

  const imgSRC = `https://image.tmdb.org/t/p/w500${movieData.poster_path}`;

  return (
    <li className={classes.item}>
      <div
        key={movieData.id}
        className={showExtraInfo ? classes.itemContainer : ""}
      >
        <img
          src={imgSRC}
          alt="Poster original de la película"
          className={!showExtraInfo ? classes.poster : classes.extraInfoPoster}
          onClick={extraInfoHandler}
        />
        {showExtraInfo && (
          <div
            className={
              showExtraInfo ? classes.extraInfoShown : classes.extraInfoHide
            }
          >
            <h3 className={classes.extraInfoTitle}>{movieData.title}</h3>
            <p className={classes.extraInfoText}>{movieData.overview}</p>
          </div>
        )}
      </div>
    </li>
  );
};

export default MovieItem;
