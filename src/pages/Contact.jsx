import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';
import '../styles/pages/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        
        // Simulate sending
        await new Promise(resolve => setTimeout(resolve, 1500));
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSending(false);
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div>
            <Navbar />
            <div className="contact-container">
                <div className="contact-header reveal-element">
                    <span className="decorative-line"></span>
                    <h1>Get in <span className="highlight">Touch</span></h1>
                    <p className="tagline">We'd Love to Hear From You</p>
                    <span className="decorative-dots"></span>
                </div>

                <div className="contact-content">
                    <div className="contact-info-section reveal-element">
                        <div className="info-card">
                            <i className="fas fa-map-marker-alt"></i>
                            <h3>Visit Us</h3>
                            <p>456 Culinary Avenue</p>
                            <p>Gourmet Town, 1010</p>
                            <p>Vienna, Austria</p>
                        </div>
                        <div className="info-card">
                            <i className="fas fa-envelope"></i>
                            <h3>Email Us</h3>
                            <p>info@dishdelight.com</p>
                            <p>support@dishdelight.com</p>
                        </div>
                        <div className="info-card">
                            <i className="fas fa-phone-alt"></i>
                            <h3>Call Us</h3>
                            <p>+43 123 456 789</p>
                            <p>Mon - Fri, 9am - 6pm</p>
                        </div>
                    </div>

                    <div className="contact-form-section reveal-element">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your email"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="What's this about?"
                                />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tell us what's on your mind..."
                                    rows="6"
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-button" disabled={sending}>
                                {sending ? (
                                    <>
                                        <span className="spinner"></span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-paper-plane"></i>
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="map-section reveal-element">
                    <h2>Find Us <span className="highlight">Here</span></h2>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.0456675083395!2d16.371543677026753!3d48.20304237111391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079553b44961%3A0x36533950957c8b94!2sStephansplatz%201%2C%201010%20Wien%2C%20Austria!5e0!3m2!1sen!2sus!4v1709037046044!5m2!1sen!2sus&markers=color:red%7C48.20304237111391,16.371543677026753"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;