import React from "react";

// import icon
import MovieIcon from "../assets/images/the-movie-db-icon.svg";

const MovieCard = ({ movie }) => {
  const { title, release_date, vote_average, poster_path } = movie;

  return (
    <div className="grid max-w-xs gap-6">
      <img
        src={`${import.meta.env.VITE_BASEIMGURL}/${poster_path}`}
        alt="movie poster img"
        className="h-full w-full object-cover object-center"
      />

      <div className="overflow-hidden">
        <p className="section-text pb-3 text-[14px] font-semibold">
          Release: {release_date}
        </p>
        <h3 className="section-title truncate pb-2 text-[28px]">{title}</h3>
        <div className="flex items-center gap-2 pb-3">
          <img src={MovieIcon} alt="the movie db icon" className="w-8" />
          <p className="section-text font-semibold text-gray-900">
            {vote_average} / 10
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
