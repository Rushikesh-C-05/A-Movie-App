import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../card/card";
import { FaSpinner, FaExclamationTriangle } from "react-icons/fa";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { type } = useParams();

  const API_KEY = "4e44d9029b1270a757cddc766a1bcb63";
  const BASE_URL = "https://api.themoviedb.org/3";

  const getMovieList = useCallback(async (pageNum = 1) => {
    try {
      setLoading(true);
      setError(null);
      
      const url = `${BASE_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${pageNum}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (pageNum === 1) {
        setMovieList(data.results || []);
      } else {
        setMovieList(prev => [...prev, ...(data.results || [])]);
      }
      
      setHasMore(data.page < data.total_pages);
    } catch (err) {
      console.error("Error fetching movies:", err);
      setError("Failed to load movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [type]);

  useEffect(() => {
    setPage(1);
    setMovieList([]);
    getMovieList(1);
  }, [getMovieList]);

  const loadMore = () => {
    if (!loading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      getMovieList(nextPage);
    }
  };

  const getTitle = () => {
    switch (type) {
      case "popular":
        return "Popular Movies";
      case "top_rated":
        return "Top Rated Movies";
      case "upcoming":
        return "Upcoming Movies";
      default:
        return "Movies";
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-center">
          <FaExclamationTriangle className="text-red-500 text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">Oops! Something went wrong</h2>
          <p className="text-dark-300 mb-4">{error}</p>
          <button
            onClick={() => getMovieList(1)}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {getTitle()}
          </h1>
          <p className="text-dark-300">
            Discover the latest and greatest movies
          </p>
        </div>

        {/* Movie Grid */}
        {movieList.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {movieList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="text-center">
              <FaSpinner className="text-primary-500 text-3xl animate-spin mx-auto mb-4" />
              <p className="text-dark-300">Loading movies...</p>
            </div>
          </div>
        )}

        {/* No Results */}
        {!loading && movieList.length === 0 && (
          <div className="text-center py-12">
            <div className="text-dark-400 text-6xl mb-4">🎬</div>
            <h3 className="text-xl font-semibold text-white mb-2">No movies found</h3>
            <p className="text-dark-300">Try checking back later for new releases.</p>
          </div>
        )}

        {/* Load More Button */}
        {!loading && hasMore && movieList.length > 0 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMore}
              className="btn-primary flex items-center space-x-2"
            >
              <FaSpinner className="animate-spin" />
              <span>Load More</span>
            </button>
          </div>
        )}

        {/* End of Results */}
        {!loading && !hasMore && movieList.length > 0 && (
          <div className="text-center py-8">
            <p className="text-dark-400">You've reached the end of the list!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;


