import { useState, useEffect } from 'react';
import '../styles/components/CookieConsent.css';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasConsented = localStorage.getItem('cookieConsent');
        if (!hasConsented) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-consent">
            <div className="cookie-content">
                <i className="fas fa-cookie-bite cookie-icon"></i>
                <p>
                    We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                </p>
            </div>
            <div className="cookie-actions">
                <button onClick={handleAccept} className="accept-button">
                    Accept
                </button>
                <a href="/privacy-policy" className="learn-more">
                    Learn more
                </a>
            </div>
        </div>
    );
};

export default CookieConsent;
