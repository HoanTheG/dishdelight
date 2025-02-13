import { useTheme } from '../contexts/ThemeContext';
import '../styles/components/ThemeToggle.css';

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        >
            <div className="toggle-track">
                <div className="toggle-icons">
                    <i className="fas fa-sun"></i>
                    <i className="fas fa-moon"></i>
                </div>
                <div className={`toggle-thumb ${isDarkMode ? 'dark' : ''}`}></div>
            </div>
        </button>
    );
};

export default ThemeToggle;
