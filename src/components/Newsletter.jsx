import { useState } from 'react';
import '../styles/components/Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle subscription logic here
        setEmail('');
    };

    return (
        <div className="newsletter">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest recipes and cooking tips!</p>
            <form onSubmit={handleSubmit} className="newsletter-form">
                <div className="input-wrapper">
                    <i className="far fa-envelope"></i>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="subscribe-btn">
                    Subscribe
                    <i className="fas fa-paper-plane"></i>
                </button>
            </form>
        </div>
    );
};

export default Newsletter;
