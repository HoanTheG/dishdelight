import { useState } from 'react';
import '../styles/components/IngredientsFilter.css';

const IngredientsFilter = ({ onIngredientsChange }) => {
    const [ingredients, setIngredients] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            const newIngredient = inputValue.trim().toLowerCase();
            if (!ingredients.includes(newIngredient)) {
                const newIngredients = [...ingredients, newIngredient];
                setIngredients(newIngredients);
                onIngredientsChange(newIngredients);
            }
            setInputValue('');
        }
    };

    const handleAddIngredient = () => {
        if (inputValue.trim()) {
            const newIngredient = inputValue.trim().toLowerCase();
            if (!ingredients.includes(newIngredient)) {
                const newIngredients = [...ingredients, newIngredient];
                setIngredients(newIngredients);
                onIngredientsChange(newIngredients);
            }
            setInputValue('');
        }
    };

    const removeIngredient = (ingredientToRemove) => {
        const newIngredients = ingredients.filter(ing => ing !== ingredientToRemove);
        setIngredients(newIngredients);
        onIngredientsChange(newIngredients);
    };

    return (
        <div className="ingredients-filter">
            <div className="ingredients-input">
                <i className="fas fa-utensils icon-utensil"></i>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddIngredient()}
                    placeholder="Enter ingredients you have (press Enter)"
                />
                <button
                    className="add-ingredient-btn"
                    onClick={handleAddIngredient}
                    disabled={!inputValue.trim()}
                    aria-label="Add ingredient"
                >
                    <i className="fas fa-plus"></i>
                </button>
            </div>
            <div className="ingredients-tags">
                {ingredients.map((ingredient, index) => (
                    <span key={index} className="ingredient-tag">
                        {ingredient}
                        <button onClick={() => removeIngredient(ingredient)}>
                            <i className="fas fa-times"></i>
                        </button>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default IngredientsFilter;
