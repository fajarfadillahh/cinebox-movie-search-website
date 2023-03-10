import React, { useEffect, useState } from "react";

// import Api
import { getMovieList, searchMovie } from "../Api";

// import movie data & movie card
import { MovieData } from "../Data";
import MovieCard from "./MovieCard";

const Contents = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  return (
    <section className="section relative pt-40 transition-all duration-400 dark:bg-gray-900 xl:pt-48">
      {/* gradient */}
      <div className="absolute -top-[50px] -left-[160px] h-[400px] w-[400px] rounded-full bg-gradient-to-t from-purple-500 to-pink-500 blur-[80px] xl:-top-[100px] xl:-left-[200px] xl:h-[600px] xl:w-[600px] xl:blur-[100px]" />

      <div className="container relative grid gap-20">
        <div className="text-center">
          <h1 className="section-title pb-8 md:text-[48px] lg:text-[56px]">
            Find your favorite movie<span className="text-blue-600">.</span>
          </h1>
          <form className="flex flex-col gap-4 sm:mx-auto sm:max-w-md sm:flex-row sm:items-center lg:max-w-lg">
            <input
              onChange={({ target }) => search(target.value)}
              type="text"
              placeholder="Search film, series, or tv show..."
              className="flex h-[55px] w-full items-center bg-gray-200 px-6 font-title font-semibold text-gray-900 outline-none transition-all duration-400 placeholder:font-sans placeholder:font-semibold placeholder:-tracking-[0.9px] placeholder:text-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
            />
            {/* <button
              className="btn w-full sm:w-auto"
              onClick={(e) => e.preventDefault()}
            >
              Search
            </button> */}
          </form>
        </div>

        <div className="grid justify-center gap-12 md:grid-cols-[repeat(2,max-content)] md:gap-x-6 lg:grid-cols-[repeat(3,max-content)] xl:grid-cols-4">
          {popularMovies.map((movie, index) => {
            return <MovieCard key={index} movie={movie} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Contents;
