import { useState, useCallback } from 'react';
import '../styles/components/PersonalRecipeCard.css';

const PersonalRecipeCard = ({ recipe, onEdit, onDelete, cardId }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleClick = useCallback((e) => {
        if (!e.target.closest('.card-actions')) {
            setShowDetails(prev => !prev);
        }
    }, []);

    const handleEdit = (e) => {
        e.stopPropagation();
        onEdit(recipe);
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        onDelete(recipe.id);
    };

    return (
        <div className={`personal-recipe-card ${showDetails ? 'expanded' : ''}`}>
            <div className="card-main" onClick={handleClick}>
                <div className="recipe-image">
                    <img src={recipe.image} alt={recipe.title} loading="lazy" />
                    <div className="card-actions">
                        <button 
                            className="edit-btn"
                            onClick={handleEdit}
                            aria-label="Edit recipe"
                        >
                            <i className="fas fa-edit"></i>
                        </button>
                        <button 
                            className="delete-btn"
                            onClick={handleDelete}
                            aria-label="Delete recipe"
                        >
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div className="recipe-info">
                    <h3>{recipe.title}</h3>
                    <div className="recipe-meta">
                        <span><i className="far fa-clock"></i> {recipe.time}</span>
                        <span><i className="fas fa-signal"></i> {recipe.difficulty}</span>
                        <span><i className="fas fa-utensils"></i> {recipe.category}</span>
                    </div>
                </div>
            </div>

            {showDetails && (
                <div className="recipe-details">
                    <div className="recipe-content">
                        <div className="ingredients">
                            <h4>Ingredients</h4>
                            <ul className="scrollable-content">
                                {recipe.ingredients?.map((ingredient, index) => (
                                    <li key={`${cardId}-ing-${index}`}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="instructions">
                            <h4>Instructions</h4>
                            <ol className="scrollable-content">
                                {recipe.instructions?.map((step, index) => (
                                    <li key={`${cardId}-step-${index}`}>{step}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PersonalRecipeCard;
