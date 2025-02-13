import { useEffect, useState } from 'react';
import '../styles/components/InitialLoader.css';

const InitialLoader = ({ onComplete }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            setTimeout(onComplete, 1000); // Allow exit animation to complete
        }, 2500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className={`initial-loader ${!isLoading ? 'fade-out' : ''}`}>
            <div className="loader-content">
                <div className="logo-container">
                    <i className="fas fa-utensils logo-icon"></i>
                    <div className="logo-text">
                        <span className="dish">Dish</span>
                        <span className="delight">Delight</span>
                    </div>
                </div>
                <div className="loading-bar">
                    <div className="loading-progress"></div>
                </div>
                <div className="loading-text">
                    Preparing your culinary journey...
                </div>
            </div>
        </div>
    );
};

export default InitialLoader;
