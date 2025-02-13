import { useState, useEffect } from 'react';
import '../styles/components/RatingSystem.css';

const RatingSystem = ({ initialRating = 0, onRatingChange, totalRatings = 0 }) => {
    const [rating, setRating] = useState(initialRating);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [hasRated, setHasRated] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [displayedTotal, setDisplayedTotal] = useState(totalRatings);

    useEffect(() => {
        setRating(initialRating);
    }, [initialRating]);

    useEffect(() => {
        setDisplayedTotal(totalRatings);
    }, [totalRatings]);

    const handleRatingClick = (value) => {
        if (!hasRated) {
            setRating(value);
            setIsAnimating(true);
            setHasRated(true);
            setDisplayedTotal(totalRatings + 1);
            onRatingChange?.(value);

            // Reset animation state
            setTimeout(() => setIsAnimating(false), 800);
        }
    };

    return (
        <div className="rating-system">
            <div className="rating-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        className={`star-btn ${hasRated && star <= rating ? 'rated' : ''} 
                                  ${!hasRated && star <= hoveredRating ? 'hovered' : ''} 
                                  ${isAnimating && star <= rating ? 'animate-pop' : ''}`}
                        onMouseEnter={() => !hasRated && setHoveredRating(star)}
                        onMouseLeave={() => !hasRated && setHoveredRating(0)}
                        onClick={() => handleRatingClick(star)}
                        disabled={hasRated}
                        aria-label={`Rate ${star} stars`}
                    >
                        <i className="fas fa-star"></i>
                    </button>
                ))}
            </div>
            <div className="rating-info">
                <span className="rating-average">
                    {rating.toFixed(1)}
                    <small>/5</small>
                </span>
                <span className="rating-count">
                    ({displayedTotal} {displayedTotal === 1 ? 'rating' : 'ratings'})
                </span>
            </div>
            {hasRated && (
                <div className="rating-feedback">
                    <i className="fas fa-check-circle"></i>
                    Thanks for rating!
                </div>
            )}
        </div>
    );
};

export default RatingSystem;
