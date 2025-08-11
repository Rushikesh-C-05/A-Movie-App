import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MovieCard from "../../components/card/card";
import { FaPlay, FaStar, FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "4e44d9029b1270a757cddc766a1bcb63";
  const BASE_URL = "https://api.themoviedb.org/3";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        
        // Fetch popular movies for hero carousel
        const popularResponse = await fetch(
          `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        );
        const popularData = await popularResponse.json();
        setPopularMovies(popularData.results?.slice(0, 5) || []);

        // Fetch top rated movies
        const topRatedResponse = await fetch(
          `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        );
        const topRatedData = await topRatedResponse.json();
        setTopRatedMovies(topRatedData.results?.slice(0, 6) || []);

        // Fetch upcoming movies
        const upcomingResponse = await fetch(
          `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
        );
        const upcomingData = await upcomingResponse.json();
        setUpcomingMovies(upcomingData.results?.slice(0, 6) || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-dark-300">Loading amazing movies...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Carousel */}
      {popularMovies.length > 0 && (
        <section className="relative">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
            showIndicators={true}
            interval={5000}
            className="hero-carousel"
          >
            {popularMovies.map((movie) => (
              <div key={movie.id} className="relative h-[70vh] md:h-[80vh]">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                    <div className="max-w-2xl">
                      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        {movie.title}
                      </h1>
                      <div className="flex items-center space-x-4 mb-4 text-white">
                        <div className="flex items-center space-x-1">
                          <FaStar className="text-yellow-400" />
                          <span className="font-semibold">
                            {movie.vote_average?.toFixed(1)}
                          </span>
                        </div>
                        <span className="text-dark-300">
                          {formatDate(movie.release_date)}
                        </span>
                      </div>
                      <p className="text-lg text-dark-200 mb-6 line-clamp-3">
                        {movie.overview}
                      </p>
                      <Link
                        to={`/movie/${movie.id}`}
                        className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                      >
                        <FaPlay className="text-sm" />
                        <span>Watch Now</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </section>
      )}

      {/* Featured Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Rated Movies */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Top Rated Movies
              </h2>
              <p className="text-dark-300">
                The highest rated movies of all time
              </p>
            </div>
            <Link
              to="/movies/top_rated"
              className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200"
            >
              <span className="font-medium">View All</span>
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {topRatedMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>

        {/* Upcoming Movies */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Coming Soon
              </h2>
              <p className="text-dark-300">
                New releases you won't want to miss
              </p>
            </div>
            <Link
              to="/movies/upcoming"
              className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200"
            >
              <span className="font-medium">View All</span>
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {upcomingMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>

        {/* Popular Movies */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Popular Now
              </h2>
              <p className="text-dark-300">
                What everyone is watching right now
              </p>
            </div>
            <Link
              to="/movies/popular"
              className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200"
            >
              <span className="font-medium">View All</span>
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {popularMovies.slice(0, 6).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
