import { useState } from 'react';
import '../styles/components/TestimonialForm.css';

const TestimonialForm = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        text: '',
        image: null,
        imagePreview: null
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                image: file,
                imagePreview: URL.createObjectURL(file)
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate submission delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        onSubmit(formData);
        setIsSubmitting(false);
        onClose();
    };

    return (
        <div className="testimonial-form-overlay">
            <div className="testimonial-form-container">
                <button className="close-button" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </button>
                
                <h2>Share Your Experience</h2>
                <p>Tell us about your cooking journey with DishDelight</p>

                <form onSubmit={handleSubmit} className="testimonial-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="Your name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            id="location"
                            required
                            value={formData.location}
                            onChange={(e) => setFormData({...formData, location: e.target.value})}
                            placeholder="e.g., Food Enthusiast, NYC"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="testimonial">Your Story</label>
                        <textarea
                            id="testimonial"
                            required
                            value={formData.text}
                            onChange={(e) => setFormData({...formData, text: e.target.value})}
                            placeholder="Share your experience with us..."
                            rows="4"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">Profile Picture</label>
                        <div className="image-upload">
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            {formData.imagePreview && (
                                <div className="image-preview">
                                    <img src={formData.imagePreview} alt="Preview" />
                                </div>
                            )}
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className="submit-button"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <i className="fas fa-spinner fa-spin"></i>
                                Submitting...
                            </>
                        ) : 'Share Your Story'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TestimonialForm;
