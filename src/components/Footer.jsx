import { Link } from 'react-router-dom';
import '../styles/components/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-pattern"></div>
            <div className="footer-content">
                <div className="footer-section">
                    <div className="footer-logo">
                        <i className="fas fa-utensils"></i>
                        DishDelight
                    </div>
                    <p>Discover amazing recipes and share your culinary journey with our community.</p>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-pinterest-p"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <div className="footer-links">
                        <Link to="/"><i className="fas fa-chevron-right"></i>Home</Link>
                        <Link to="/recipes"><i className="fas fa-chevron-right"></i>Recipes</Link>
                        <Link to="/personal-recipes"><i className="fas fa-chevron-right"></i>My Collection</Link>
                        <Link to="/about"><i className="fas fa-chevron-right"></i>About</Link>
                        <Link to="/contact"><i className="fas fa-chevron-right"></i>Contact</Link>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Newsletter</h3>
                    <p>Subscribe to get the latest recipes and cooking tips.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <i className="far fa-envelope"></i>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="newsletter-input"
                        />
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 DishDelight — All Rights Reserved</p>
                <p className="footer-disclaimer">
                    This website is for demonstration purposes only. All recipes and content are purely informational.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
