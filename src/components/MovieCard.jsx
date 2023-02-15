import React from "react";

// import icon
import MovieIcon from "../assets/images/the-movie-db-icon.svg";

const MovieCard = ({ movie }) => {
  return (
    <div className="grid max-w-xs gap-6">
      <img src={movie.movieImg} alt="movie poster img" />

      <div className="overflow-hidden">
        <p className="section-text pb-3 font-semibold">
          {movie.location}, {movie.date_release}
        </p>
        <h3 className="section-title truncate pb-2 text-[28px]">
          {movie.title}
        </h3>
        <div className="flex items-center gap-2 pb-3">
          <img src={MovieIcon} alt="the movie db icon" className="w-8" />
          <p className="section-text font-semibold text-gray-900">
            {movie.rating} / 100
          </p>
        </div>
        <div className="flex items-center gap-2">
          {movie.tags.map((tag, index) => {
            return (
              <div
                key={index}
                className="rounded-full bg-gray-200 py-1 px-3 text-[12px] font-semibold text-gray-600"
              >
                {tag.text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
