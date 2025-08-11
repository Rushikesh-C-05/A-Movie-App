import React, { useState, useEffect } from "react";
import MovieCard from "../../components/card/card";
import { FaHeart, FaTrash } from "react-icons/fa";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load favorites from localStorage
    const loadFavorites = () => {
      try {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error('Error loading favorites:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, []);

  const removeFavorite = (movieId) => {
    const updatedFavorites = favorites.filter(movie => movie.id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const clearAllFavorites = () => {
    setFavorites([]);
    localStorage.removeItem('favorites');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-dark-300">Loading your favorites...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaHeart className="text-red-500 text-2xl" />
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  My Favorites
                </h1>
              </div>
              <p className="text-dark-300">
                {favorites.length === 0 
                  ? "You haven't added any movies to your favorites yet."
                  : `You have ${favorites.length} favorite movie${favorites.length !== 1 ? 's' : ''}`
                }
              </p>
            </div>
            
            {favorites.length > 0 && (
              <button
                onClick={clearAllFavorites}
                className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <FaTrash className="text-sm" />
                <span>Clear All</span>
              </button>
            )}
          </div>
        </div>

        {/* Favorites Grid */}
        {favorites.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {favorites.map((movie) => (
              <div key={movie.id} className="relative group">
                <MovieCard movie={movie} />
                <button
                  onClick={() => removeFavorite(movie.id)}
                  className="absolute top-2 right-2 p-2 rounded-full bg-red-600 hover:bg-red-700 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                  title="Remove from favorites"
                >
                  <FaTrash className="text-sm" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-red-400 text-6xl mb-4">💔</div>
            <h3 className="text-xl font-semibold text-white mb-2">No favorites yet</h3>
            <p className="text-dark-300 mb-6">
              Start adding movies to your favorites by clicking the heart icon on any movie card.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/movies/popular"
                className="btn-primary"
              >
                Browse Popular Movies
              </a>
              <a
                href="/movies/top_rated"
                className="btn-secondary"
              >
                Browse Top Rated
              </a>
            </div>
          </div>
        )}

        {/* Tips */}
        {favorites.length > 0 && (
          <div className="mt-8 p-4 bg-dark-800 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">💡 Tips</h3>
            <ul className="text-dark-300 space-y-1 text-sm">
              <li>• Click the heart icon on any movie to add it to your favorites</li>
              <li>• Your favorites are saved locally in your browser</li>
              <li>• Hover over a movie card to see the remove button</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
