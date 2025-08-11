# 🎬 ChillPill - Modern Movie Discovery App

A professional-grade React movie application built with modern best practices, featuring a beautiful dark theme UI and comprehensive movie browsing experience.

![ChillPill Movie App](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css)
![TMDB API](https://img.shields.io/badge/TMDB_API-3.0-01D277?style=for-the-badge)

## ✨ Features

### 🎯 Core Functionality
- **Movie Discovery**: Browse popular, top-rated, and upcoming movies
- **Search Movies**: Real-time search with TMDB API integration
- **Movie Details**: Comprehensive movie information with cast, similar movies, and external links
- **Favorites System**: Save and manage your favorite movies with localStorage
- **Responsive Design**: Mobile-first design that works on all devices

### 🎨 Modern UI/UX
- **Dark Theme**: Beautiful dark mode interface with purple accent colors
- **Smooth Animations**: Hover effects, transitions, and loading states
- **Professional Layout**: Clean, modern design with proper spacing and typography
- **Interactive Elements**: Hover effects on cards, buttons, and navigation

### 🔧 Technical Features
- **React Hooks**: Modern React patterns with useState, useEffect
- **React Router v7**: Client-side routing with URL parameters
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **TMDB API**: Integration with The Movie Database for real movie data
- **Error Handling**: Comprehensive error states and loading indicators
- **Performance**: Optimized images, lazy loading, and efficient API calls

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/chill-pill.git
   cd chill-pill
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
chill-pill/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── header/
│   │   │   └── Header.js          # Navigation component
│   │   ├── card/
│   │   │   └── card.js            # Movie card component
│   │   └── movieList/
│   │       └── movieList.js       # Movie grid component
│   ├── pages/
│   │   ├── home/
│   │   │   └── home.js            # Homepage with hero carousel
│   │   ├── movieDetail/
│   │   │   └── movieDetail.js     # Movie details page
│   │   ├── search/
│   │   │   └── Search.js          # Search results page
│   │   └── favorites/
│   │       └── Favorites.js       # Favorites management page
│   ├── App.js                     # Main app component with routing
│   ├── index.js                   # App entry point
│   └── index.css                  # Global styles with Tailwind
├── tailwind.config.js             # Tailwind configuration
├── package.json                   # Dependencies and scripts
└── README.md                      # Project documentation
```

## 🎨 Design System

### Colors
- **Primary**: Purple gradient (`#ed5af5` to `#d83de0`)
- **Dark Theme**: Dark grays (`#0f172a` to `#64748b`)
- **Accents**: Yellow for ratings, red for favorites

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Cards**: Hover effects with scale and shadow transitions
- **Buttons**: Consistent styling with hover states
- **Navigation**: Sticky header with mobile menu
- **Loading States**: Spinner animations and skeleton screens

## 🔌 API Integration

This app uses **The Movie Database (TMDB) API** for:
- Movie data and metadata
- Search functionality
- Cast and crew information
- Similar movie recommendations
- High-quality movie posters and backdrops

### API Endpoints Used
- `/movie/popular` - Popular movies
- `/movie/top_rated` - Top rated movies
- `/movie/upcoming` - Upcoming releases
- `/search/movie` - Movie search
- `/movie/{id}` - Movie details with credits and similar movies

## 🛠️ Technologies Used

### Frontend
- **React 19.0.0** - Modern React with hooks
- **React Router v7** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **React Responsive Carousel** - Hero carousel component

### APIs & Services
- **TMDB API** - Movie database and metadata
- **localStorage** - Client-side favorites storage

### Development Tools
- **Create React App** - Development environment
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📱 Responsive Design

The app is fully responsive with breakpoints for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Mobile Features
- Collapsible navigation menu
- Touch-friendly buttons and cards
- Optimized grid layouts
- Swipe-friendly carousel

## 🎯 Key Features Explained

### 1. Movie Discovery
- **Hero Carousel**: Auto-playing carousel with featured movies
- **Category Sections**: Popular, Top Rated, Upcoming movies
- **Grid Layout**: Responsive movie grid with hover effects

### 2. Search Functionality
- **Real-time Search**: Instant search results as you type
- **Pagination**: Load more results with infinite scroll
- **Error Handling**: Graceful error states and retry options

### 3. Movie Details
- **Comprehensive Info**: Plot, cast, ratings, runtime, genres
- **External Links**: IMDb and official website links
- **Similar Movies**: AI-powered movie recommendations
- **Favorite Toggle**: Add/remove from favorites

### 4. Favorites System
- **localStorage**: Persistent favorites across sessions
- **Management**: Add, remove, and clear all favorites
- **Visual Feedback**: Heart icons and hover states

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **TMDB** for providing the movie database API
- **Tailwind CSS** for the amazing utility-first CSS framework
- **React Team** for the incredible React library
- **React Icons** for the comprehensive icon library

## 📞 Contact

- **GitHub**: [@yourusername](https://github.com/yourusername)
- **LinkedIn**: [Your Name](https://linkedin.com/in/yourprofile)
- **Portfolio**: [your-portfolio.com](https://your-portfolio.com)

---

**Built with ❤️ using React and Tailwind CSS**

*Perfect for your developer portfolio and resume!*
