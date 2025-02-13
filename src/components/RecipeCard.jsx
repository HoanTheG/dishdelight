import { useLocation, useNavigate } from 'react-router-dom';
import { memo } from 'react';
import '../styles/components/RecipeCard.css';

const RecipeCard = memo(({ recipe }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        // Store current path as return location
        sessionStorage.setItem('returnTo', location.pathname);
        navigate(`/recipe/${recipe.id}`);
    };

    return (
        <div className="recipe-card" onClick={handleClick}>
            <div className="recipe-image">
                <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <div className="recipe-info">
                <h3>{recipe.title}</h3>
                <div className="recipe-meta">
                    <span><i className="far fa-clock"></i> {recipe.time}</span>
                    <span><i className="fas fa-signal"></i> {recipe.difficulty}</span>
                    <span><i className="fas fa-star"></i> {recipe.rating}</span>
                </div>
            </div>
        </div>
    );
});

RecipeCard.displayName = 'RecipeCard';
export default RecipeCard;
