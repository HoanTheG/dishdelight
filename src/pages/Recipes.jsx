import { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { recipes } from '../data/recipes';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import IngredientsFilter from '../components/IngredientsFilter';
import LoadingSkeleton from '../components/LoadingSkeleton';
import '../styles/pages/Recipes.css';
import '../styles/components/IngredientsFilter.css';

const Recipes = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [ingredientInput, setIngredientInput] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    // Memoize filtered recipes
    const filteredRecipes = useMemo(() => {
        let filtered = recipes;
        
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(recipe => recipe.category === selectedCategory);
        }

        if (searchTerm) {
            filtered = filtered.filter(recipe => 
                recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                recipe.description?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedIngredients.length > 0) {
            filtered = filtered.filter(recipe => 
                selectedIngredients.every(ingredient =>
                    recipe.ingredients?.some(recipeIng => 
                        recipeIng.toLowerCase().includes(ingredient.toLowerCase())
                    )
                )
            );
        }

        return filtered;
    }, [selectedCategory, searchTerm, selectedIngredients]);

    // Debounce search input
    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    };

    const handleSearch = useCallback(
        debounce((value) => setSearchTerm(value), 300),
        []
    );

    const handleAddIngredient = () => {
        if (ingredientInput.trim()) {
            const newIngredient = ingredientInput.trim();
            if (!selectedIngredients.includes(newIngredient)) {
                setSelectedIngredients([...selectedIngredients, newIngredient]);
            }
            setIngredientInput('');
        }
    };

    const handleIngredientKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddIngredient();
        }
    };

    const removeIngredient = (ingredientToRemove) => {
        setSelectedIngredients(selectedIngredients.filter(ing => ing !== ingredientToRemove));
    };

    const handleRecipeClick = (recipeId) => {
        sessionStorage.setItem('returnTo', '/recipes');
        navigate(`/recipes/${recipeId}`);
    };

    return (
        <div>
            <Navbar />
            <div className="recipes-page">
                <div className="recipes-header">
                    <h1>Our <span className="highlight">Recipes</span></h1>
                    
                    <div className="filters-container">
                        <div className="search-bar">
                            <i className="fas fa-search"></i>
                            <input
                                type="text"
                                placeholder="Search recipes..."
                                onChange={(e) => handleSearch(e.target.value)}
                                defaultValue={searchTerm}
                            />
                        </div>

                        <div className="ingredients-filter">
                            <div className="ingredients-input-container">
                                <div className="ingredients-input">
                                    <i className="fas fa-utensils"></i>
                                    <input
                                        type="text"
                                        placeholder="Add ingredients you have"
                                        value={ingredientInput}
                                        onChange={(e) => setIngredientInput(e.target.value)}
                                        onKeyDown={handleIngredientKeyDown}
                                    />
                                    <button 
                                        className="add-ingredient-btn"
                                        onClick={handleAddIngredient}
                                        disabled={!ingredientInput.trim()}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                                {selectedIngredients.length > 0 && (
                                    <div className="selected-ingredients">
                                        {selectedIngredients.map((ingredient, index) => (
                                            <span key={index} className="ingredient-tag">
                                                {ingredient}
                                                <button onClick={() => removeIngredient(ingredient)}>
                                                    <i className="fas fa-times"></i>
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="category-filters">
                            {['all', 'breakfast', 'lunch', 'dinner'].map(category => (
                                <button 
                                    key={category}
                                    className={selectedCategory === category ? 'active' : ''}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="recipes-grid">
                    {loading ? (
                        // Show 8 skeleton cards while loading
                        [...Array(8)].map((_, index) => (
                            <LoadingSkeleton key={index} type="recipe" />
                        ))
                    ) : (
                        filteredRecipes.length > 0 ? (
                            filteredRecipes.map(recipe => (
                                <div 
                                    key={recipe.id} 
                                    className="recipe-card"
                                    onClick={() => handleRecipeClick(recipe.id)}
                                >
                                    <div className="recipe-image">
                                        <img src={recipe.image} alt={recipe.title} />
                                        <div className="recipe-overlay">
                                            <span className="recipe-category">{recipe.category}</span>
                                        </div>
                                    </div>
                                    <div className="recipe-content">
                                        <h3>{recipe.title}</h3>
                                        <div className="recipe-info">
                                            <span><i className="far fa-clock"></i> {recipe.totalTime || recipe.time}</span>
                                            <span><i className="fas fa-signal"></i> {recipe.difficulty}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-results">
                                <i className="fas fa-search"></i>
                                <p>No recipes found matching your criteria.</p>
                                <button onClick={() => {
                                    setSearchTerm('');
                                    setSelectedIngredients([]);
                                    setSelectedCategory('all');
                                }}>Clear filters</button>
                            </div>
                        )
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Recipes;