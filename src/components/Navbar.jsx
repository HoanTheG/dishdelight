import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/Navbar.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Close menu on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    // Add scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            // Lower the scroll threshold and add immediate feedback
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="logo">
                <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                    <i className="fas fa-utensils logo-icon"></i>
                    DishDelight.
                </NavLink>
            </div>
            
            <button 
                className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={isMenuOpen}
            >
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </button>

            {isMenuOpen && (
                <div className="menu-overlay" onClick={() => setIsMenuOpen(false)} />
            )}

            <div className="nav-right">
                <ul className={`desktop-nav ${isMenuOpen ? 'active' : ''}`}>
                    <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
                    <li><NavLink to="/recipes" onClick={() => setIsMenuOpen(false)}>Recipes</NavLink></li>
                    <li><NavLink to="/personal-recipes" onClick={() => setIsMenuOpen(false)}>My Recipe Collection</NavLink></li>
                    <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
                    <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}