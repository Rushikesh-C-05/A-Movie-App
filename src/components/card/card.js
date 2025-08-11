import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaHeart, FaRegHeart, FaPlay } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    
    // Get existing favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(fav => fav.id !== movie.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      // Add to favorites
      const updatedFavorites = [...favorites, movie];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).getFullYear();
  };

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <div className="group relative bg-dark-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Movie Poster */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/300x450/1f2937/6b7280?text=No+Image"
          }
          alt={movie.title || movie.original_title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-1">
                <FaStar className="text-yellow-400 text-sm" />
                <span className="text-white text-sm font-medium">
                  {movie.vote_average?.toFixed(1) || "N/A"}
                </span>
              </div>
              <button
                onClick={toggleFavorite}
                className="p-2 rounded-full bg-dark-800/80 hover:bg-primary-600 transition-colors duration-200"
              >
                {isFavorite ? (
                  <FaHeart className="text-red-500 text-sm" />
                ) : (
                  <FaRegHeart className="text-white text-sm" />
                )}
              </button>
            </div>
            <Link
              to={`/movie/${movie.id}`}
              className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200"
            >
              <FaPlay className="text-xs" />
              <span>View Details</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-4">
        <h3 className="font-semibold text-white text-sm mb-1 line-clamp-2">
          {movie.title || movie.original_title}
        </h3>
        <div className="flex items-center justify-between text-xs text-dark-400">
          <span>{formatDate(movie.release_date)}</span>
          <div className="flex items-center space-x-1">
            <FaStar className="text-yellow-400" />
            <span>{movie.vote_average?.toFixed(1) || "N/A"}</span>
          </div>
        </div>
        {movie.overview && (
          <p className="text-xs text-dark-300 mt-2 line-clamp-2">
            {truncateText(movie.overview, 80)}
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;