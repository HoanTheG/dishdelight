import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PersonalRecipeCard from '../components/PersonalRecipeCard';
import RecipeForm from '../components/RecipeForm';
import RecipeStats from '../components/RecipeStats';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/pages/Favorites.css';

const Favorites = () => {
    const [recipes, setRecipes] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editingRecipe, setEditingRecipe] = useState(null);
    const [sortBy, setSortBy] = useState('date');
    const [categoryFilter, setCategoryFilter] = useState('all');

    useEffect(() => {
        try {
            const savedRecipes = JSON.parse(localStorage.getItem('personalRecipes')) || [];
            setRecipes(savedRecipes);
        } catch (error) {
            console.error('Error loading recipes:', error);
            setRecipes([]);
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-element').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const handleAddRecipe = (recipe) => {
        try {
            const newRecipe = { ...recipe, id: Date.now() };
            const updatedRecipes = [...recipes, newRecipe];
            localStorage.setItem('personalRecipes', JSON.stringify(updatedRecipes));
            setRecipes(updatedRecipes);
            setShowForm(false);
            toast.success('Recipe added successfully!');
        } catch (error) {
            toast.error('Failed to add recipe');
        }
    };

    const handleEditRecipe = (recipe) => {
        const updatedRecipes = recipes.map(r => r.id === recipe.id ? recipe : r);
        localStorage.setItem('personalRecipes', JSON.stringify(updatedRecipes));
        setRecipes(updatedRecipes);
        setShowForm(false);
        setEditingRecipe(null);
        toast.success('Recipe updated successfully!');
    };

    const handleDeleteRecipe = (id) => {
        if (window.confirm('Are you sure you want to delete this recipe?')) {
            const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
            localStorage.setItem('personalRecipes', JSON.stringify(updatedRecipes));
            setRecipes(updatedRecipes);
            toast.info('Recipe deleted');
        }
    };

    const handleCategoryChange = (category) => {
        setCategoryFilter(category);
    };

    const handleSortChange = (sort) => {
        setSortBy(sort);
    };

    const getSortedAndFilteredRecipes = () => {
        let filtered = recipes;
        if (categoryFilter !== 'all') {
            filtered = filtered.filter(recipe => recipe.category === categoryFilter);
        }
        return filtered.sort((a, b) => {
            switch (sortBy) {
                case 'name': return a.title.localeCompare(b.title);
                case 'date': return b.id - a.id;
                case 'difficulty':
                    const order = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
                    return order[a.difficulty] - order[b.difficulty];
                default: return 0;
            }
        });
    };

    const sortedRecipes = getSortedAndFilteredRecipes();

    return (
        <div>
            <Navbar />
            <div className="favorites-container">
                <div className="favorites-header reveal-element">
                    <span className="decorative-line"></span>
                    <h1>My <span className="highlight">Recipe</span> Collection</h1>
                    <p className="tagline">Your Personal Culinary Journey</p>
                    <span className="decorative-dots"></span>
                </div>

                <div className="controls-section reveal-element">
                    <div className="controls-wrapper">
                        <div className="filter-controls">
                            <select 
                                value={categoryFilter}
                                onChange={(e) => handleCategoryChange(e.target.value)}
                                className="category-select"
                            >
                                <option value="all">All Categories</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                            </select>
                            <select 
                                value={sortBy}
                                onChange={(e) => handleSortChange(e.target.value)}
                                className="sort-select"
                            >
                                <option value="date">Latest First</option>
                                <option value="name">Name A-Z</option>
                                <option value="difficulty">Difficulty</option>
                            </select>
                        </div>
                        <button 
                            className="add-recipe-button glow-effect"
                            onClick={() => setShowForm(true)}
                        >
                            <i className="fas fa-plus"></i> Add New Recipe
                            <span className="glow"></span>
                        </button>
                    </div>
                </div>

                <div className="favorites-grid reveal-element">
                    {sortedRecipes.length === 0 ? (
                        <div className="empty-state">
                            <i className="fas fa-book-open"></i>
                            <p>No recipes found</p>
                            <p>Try adjusting your filters or add a new recipe</p>
                        </div>
                    ) : (
                        sortedRecipes.map(recipe => (
                            <PersonalRecipeCard
                                key={recipe.id}
                                recipe={recipe}
                                onEdit={() => {
                                    setEditingRecipe(recipe);
                                    setShowForm(true);
                                }}
                                onDelete={handleDeleteRecipe}
                            />
                        ))
                    )}
                </div>

                <div className="collection-stats reveal-element">
                    <div className="stats-header">
                        <span className="decorative-line"></span>
                        <h2>Collection <span className="highlight">Insights</span></h2>
                        <p className="stats-tagline">Your Cooking Journey in Numbers</p>
                    </div>
                    <RecipeStats recipes={recipes} />
                </div>

                {showForm && (
                    <div className="form-overlay">
                        <RecipeForm
                            recipe={editingRecipe}
                            onSubmit={editingRecipe ? handleEditRecipe : handleAddRecipe}
                            onCancel={() => {
                                setShowForm(false);
                                setEditingRecipe(null);
                            }}
                        />
                    </div>
                )}
                <ToastContainer position="bottom-right" />
            </div>
            <Footer />
        </div>
    );
};

export default Favorites;