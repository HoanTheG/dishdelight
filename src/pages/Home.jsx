import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InitialLoader from '../components/InitialLoader';
import TestimonialForm from '../components/TestimonialForm';
import '../styles/pages/Home.css';

const Home = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(() => {
        // Check if this is the first visit
        const hasVisited = localStorage.getItem('hasVisitedBefore');
        return !hasVisited;
    });
    const [showTestimonialForm, setShowTestimonialForm] = useState(false);

    useEffect(() => {
        if (isLoading) {
            // Set the flag after first visit
            localStorage.setItem('hasVisitedBefore', 'true');
        }
    }, [isLoading]);

    if (isLoading) {
        return <InitialLoader onComplete={() => setIsLoading(false)} />;
    }

    const handleRecipeClick = (recipeId) => {
        // Store the return location
        sessionStorage.setItem('returnTo', '/');
        navigate(`/recipes/${recipeId}`);
    };

    const handleTestimonialSubmit = (testimonialData) => {
        // Here you would typically send this to your backend
        console.log('New testimonial:', testimonialData);
        // For now, we'll just show an alert
        alert('Thank you for sharing your experience!');
    };

    return (
        <>
            <Navbar />
            <div className="home-container">
                <section className="hero-section">
                    <motion.div 
                        className="hero-glass-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Create Your Own <span className="highlight">Culinary</span> Story</h1>
                        <p>Join thousands of food enthusiasts discovering, sharing, and creating memorable recipes every day</p>
                        <div className="hero-buttons">
                            <Link to="/recipes" className="primary-button">
                                Discover Recipes <i className="fas fa-arrow-right"></i>
                            </Link>
                            <Link to="/personal-recipes" className="secondary-button">
                                Start Creating <i className="fas fa-utensils"></i>
                            </Link>
                        </div>
                    </motion.div>
                </section>

                <section className="featured-section">
                    <motion.div 
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-subtitle">Featured Recipes</span>
                        <h2>Most Popular <span className="highlight">Dishes</span></h2>
                    </motion.div>
                    <div className="featured-grid">
                        {featuredRecipes.map((recipe, index) => (
                            <motion.div 
                                className="recipe-card"
                                key={recipe.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                onClick={() => handleRecipeClick(recipe.id)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="recipe-image">
                                    <img 
                                        src={recipe.image} 
                                        alt={recipe.title}
                                        onError={(e) => {
                                            e.target.src = "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=80";
                                        }}
                                    />
                                    <div className="recipe-overlay">
                                        <span className="recipe-time">{recipe.totalTime || recipe.time}</span>
                                        <span className="recipe-difficulty">{recipe.difficulty}</span>
                                    </div>
                                </div>
                                <div className="recipe-content">
                                    <h3>{recipe.title}</h3>
                                    <p>{recipe.description || `Delicious ${recipe.title.toLowerCase()} made with fresh ingredients`}</p>
                                    <button className="recipe-link">
                                        View Recipe <i className="fas fa-long-arrow-alt-right"></i>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <div className="section-separator" aria-hidden="true"></div>

                <section className="testimonials-section">
                    <div className="section-header">
                        <span className="section-subtitle">Community Love</span>
                        <h2>What Our Users <span className="highlight">Say</span></h2>
                        <button 
                            className="share-story-btn"
                            onClick={() => setShowTestimonialForm(true)}
                        >
                            Share Your Story <i className="fas fa-heart"></i>
                        </button>
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <motion.div 
                                className="testimonial-card"
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="testimonial-content">
                                    <i className="fas fa-quote-left"></i>
                                    <p>{testimonial.text}</p>
                                </div>
                                <div className="testimonial-author">
                                    <img src={testimonial.image} alt={testimonial.name} />
                                    <div>
                                        <h4>{testimonial.name}</h4>
                                        <span>{testimonial.location}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {showTestimonialForm && (
                    <TestimonialForm 
                        onClose={() => setShowTestimonialForm(false)}
                        onSubmit={handleTestimonialSubmit}
                    />
                )}

                <section className="newsletter-section">
                    <motion.div 
                        className="newsletter-container"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="newsletter-content">
                            <h2>Get Weekly Recipe <span className="highlight">Inspiration</span></h2>
                            <p>Join our newsletter and receive hand-picked recipes, cooking tips, and exclusive content directly in your inbox.</p>
                            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="input-group">
                                    <i className="fas fa-envelope"></i>
                                    <input type="email" placeholder="Enter your email address" required />
                                </div>
                                <button type="submit" className="subscribe-button">
                                    Subscribe <i className="fas fa-paper-plane"></i>
                                </button>
                            </form>
                            <div className="newsletter-features">
                                <span><i className="fas fa-check"></i> Weekly new recipes</span>
                                <span><i className="fas fa-check"></i> Cooking tips & tricks</span>
                                <span><i className="fas fa-check"></i> Seasonal inspirations</span>
                            </div>
                        </div>
                        <div className="newsletter-image">
                            <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&auto=format&fit=crop&q=80" 
                                 alt="Fresh ingredients and cooking" />
                        </div>
                    </motion.div>
                </section>

                {/* Add Categories and Features sections here */}
            </div>
            <Footer />
        </>
    );
};

const featuredRecipes = [
    {
        id: 1, // Spaghetti Carbonara
        title: "Spaghetti Carbonara",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=1000",
        time: "30 min",
        difficulty: "Medium",
        description: "Classic Italian pasta with crispy pancetta, eggs, and Pecorino Romano"
    },
    {
        id: 5, // Grilled Salmon
        title: "Grilled Salmon",
        image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        time: "25 min",
        difficulty: "Medium",
        description: "Perfectly grilled salmon with lemon and herbs"
    },
    {
        id: 7, // Chocolate Banana Pancakes
        title: "Chocolate Banana Pancakes",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1000",
        time: "20 min",
        difficulty: "Easy",
        description: "Fluffy pancakes with rich chocolate and ripe bananas"
    },
    {
        id: 'mediterranean-pasta',
        title: "Mediterranean Pasta",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80",
        time: "30 min",
        difficulty: "Easy",
        description: "Fresh pasta with sun-dried tomatoes, olives, and herbs"
    }
];

const testimonials = [
    {
        name: "Sarah Mitchell",
        location: "Food Enthusiast, NYC",
        text: "DishDelight transformed my cooking journey. The recipes are easy to follow and the results are always amazing!",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
    },
    {
        name: "Michael Chen",
        location: "Home Chef, Vancouver",
        text: "The community here is incredible. I've learned so many new techniques and discovered amazing recipes.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    {
        name: "Emma Thompson",
        location: "Food Blogger, London",
        text: "Such a fantastic platform! The recipe organization features are exactly what I needed for my collection.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80"
    }
];

export default Home;