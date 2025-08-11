import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaStar, FaHeart, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-dark-800/95 backdrop-blur-sm border-b border-dark-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <FaStar className="text-white text-sm" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              ChillPill
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/movies/popular"
              className="text-dark-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Popular
            </Link>
            <Link
              to="/movies/top_rated"
              className="text-dark-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Top Rated
            </Link>
            <Link
              to="/movies/upcoming"
              className="text-dark-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Upcoming
            </Link>
            <Link
              to="/favorites"
              className="text-dark-300 hover:text-primary-400 transition-colors duration-200 font-medium flex items-center space-x-1"
            >
              <FaHeart className="text-sm" />
              <span>Favorites</span>
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden sm:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search movies..."
                className="w-full bg-dark-700 border border-dark-600 text-white placeholder-dark-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400" />
            </div>
          </form>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-dark-300 hover:text-white hover:bg-dark-700 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-dark-700 py-4 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/movies/popular"
                className="text-dark-300 hover:text-white transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Popular
              </Link>
              <Link
                to="/movies/top_rated"
                className="text-dark-300 hover:text-white transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Top Rated
              </Link>
              <Link
                to="/movies/upcoming"
                className="text-dark-300 hover:text-white transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Upcoming
              </Link>
              <Link
                to="/favorites"
                className="text-dark-300 hover:text-primary-400 transition-colors duration-200 font-medium flex items-center space-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaHeart className="text-sm" />
                <span>Favorites</span>
              </Link>
              
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="pt-4">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search movies..."
                    className="w-full bg-dark-700 border border-dark-600 text-white placeholder-dark-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400" />
                </div>
              </form>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;