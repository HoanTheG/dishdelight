import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/pages/About.css';

const About = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-element').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="about-container">
                <div className="about-header reveal-element">
                    <span className="decorative-line"></span>
                    <h1>About <span className="highlight">DishDelight</span></h1>
                    <p className="tagline">Bringing Joy to Every Kitchen</p>
                    <span className="decorative-dots"></span>
                </div>

                <section className="our-story reveal-element">
                    <h2><span className="section-number">01</span>Our Story</h2>
                    <div className="story-content">
                        <img 
                            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80" 
                            alt="Modern kitchen with cooking ingredients"
                            className="story-image"
                            onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=80";
                            }}
                        />
                        <p>DishDelight began as a passion project in 2023, born from the idea that cooking should be accessible, enjoyable, and delightful for everyone. What started as a simple recipe collection has grown into a vibrant community of food lovers sharing their culinary adventures.</p>
                    </div>
                </section>

                <section className="our-mission reveal-element">
                    <h2><span className="section-number">02</span>Our Mission</h2>
                    <div className="mission-cards">
                        <div className="mission-card">
                            <i className="fas fa-heart"></i>
                            <h3>Share the Love</h3>
                            <p>Making cooking accessible and enjoyable for everyone, from beginners to experts.</p>
                        </div>
                        <div className="mission-card">
                            <i className="fas fa-users"></i>
                            <h3>Build Community</h3>
                            <p>Creating a space where food lovers can connect, share, and inspire each other.</p>
                        </div>
                        <div className="mission-card">
                            <i className="fas fa-seedling"></i>
                            <h3>Promote Sustainability</h3>
                            <p>Encouraging mindful cooking and reducing food waste through smart recipes.</p>
                        </div>
                    </div>
                </section>

                <section className="join-us reveal-element">
                    <div className="join-us-content">
                        <span className="accent-circle"></span>
                        <h2>Join Our Community</h2>
                        <p>Whether you're a home cook or a seasoned chef, there's a place for you in our community.</p>
                        <div className="stats">
                            <div className="stat">
                                <span className="number">10K+</span>
                                <span className="label">Recipes Shared</span>
                            </div>
                            <div className="stat">
                                <span className="number">50K+</span>
                                <span className="label">Community Members</span>
                            </div>
                            <div className="stat">
                                <span className="number">100+</span>
                                <span className="label">Countries Reached</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default About;