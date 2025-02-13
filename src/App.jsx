import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTop';
import ScrollRestoration from './components/ScrollRestoration';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Recipes from './pages/Recipes';
import Favorites from './pages/Favorites';
import RecipeDetails from './pages/RecipeDetails';

function App() {
  return (
    <Router>
      <ScrollRestoration />
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/personal-recipes" element={<Favorites />} /> {/* Make sure this matches your NavLink */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;