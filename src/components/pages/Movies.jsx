import React, { useState, useEffect } from "react";
import axios from "axios";

const Movies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetch = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDQ5MzY4MjI5ZDE4NzA2MTczOTZiNDdhYmNjOWJjOCIsInN1YiI6IjY2MzhkYTZkNWE0NjkwMDEyMjNlYWI5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yvZ61BN6MC84OoeD0CgqAyC2_BRikVW0Qekw-6Ayb4I", // Replace with your actual TMDb API key
        },
      });

      setPopularMovies(response.data.results);
    } catch (err) {
      console.error("Error fetching movies:", err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="w-full">
      {isLoading && <p className="text-center">Loading movies...</p>}
      {error && (
        <p className="text-center text-red-500">
          Error fetching movies: {error.message}
        </p>
      )}
      {popularMovies.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {popularMovies.map((movie) => (
            <div key={movie.id} className="flex flex-col items-center">
              <div className="mb-4">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                      : "IMAGE_URL"
                  }
                  alt={movie.title}
                  className="w-full h-auto"
                />
              </div>
              <div className="">
                <h3 className="text-xl text-center font-semibold mb-2">
                  {movie.title}
                </h3>
                <span>
                  <span className="font-semibold text-[#c74747]">
                    Release Date:
                  </span>{" "}
                  {movie.release_date}
                </span>
                <p className="text-sm text-justify">{movie.overview}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
