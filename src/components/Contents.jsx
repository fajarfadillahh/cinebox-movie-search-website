import React from "react";

// import movie data & movie card
import { MovieData } from "../Data";
import MovieCard from "./MovieCard";

const Contents = () => {
  return (
    <section className="section relative pt-40">
      <div className="container grid gap-24">
        <div className="text-center">
          <h1 className="section-title pb-8">
            Find your favorite movie<span className="text-blue-600">.</span>
          </h1>
          <form className="grid items-center gap-4">
            <input
              type="text"
              placeholder="Search film, series, or tv show..."
              className="flex h-[55px] items-center bg-gray-200 px-6 font-title font-semibold text-gray-900 outline-none placeholder:font-sans placeholder:font-semibold placeholder:-tracking-[0.9px] placeholder:text-gray-600"
            />
            <button className="btn w-full" onClick={(e) => e.preventDefault()}>
              Search
            </button>
          </form>
        </div>

        <div className="grid justify-center gap-12">
          {MovieData.map((movie, index) => {
            return <MovieCard key={index} movie={movie} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Contents;
