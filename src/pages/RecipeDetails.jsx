import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RatingSystem from '../components/RatingSystem';
import { getRecipeById } from '../data/recipes';
import { getRecipeRating, saveRating } from '../services/ratingService';
import '../styles/pages/RecipeDetails.css';
import AllergenInfo from '../components/AllergenInfo';
import LoadingSkeleton from '../components/LoadingSkeleton';

const RecipeDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(0);
    const [currentRating, setCurrentRating] = useState({ rating: 0, totalRatings: 0 });

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const recipeData = getRecipeById(id);
                if (recipeData) {
                    setRecipe(recipeData);
                    const savedRating = getRecipeRating(id);
                    setCurrentRating(savedRating);
                }
            } catch (error) {
                console.error('Error fetching recipe:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
        setSelectedImage(0);
    }, [id]);

    const handleBack = () => {
        const returnTo = sessionStorage.getItem('returnTo') || '/recipes';
        navigate(returnTo);
    };

    const handleRatingChange = (newRating) => {
        const updatedRating = saveRating(id, newRating);
        setCurrentRating(updatedRating);
    };

    if (loading) {
        return (
            <div>
                <Navbar />
                <LoadingSkeleton type="details" />
                <Footer />
            </div>
        );
    }

    if (!recipe) {
        return (
            <div className="recipe-not-found">
                <Navbar />
                <div className="error-container">
                    <h2>Recipe not found</h2>
                    <button onClick={handleBack} className="back-button">
                        <i className="fas fa-arrow-left"></i> Go Back
                    </button>
                </div>
                <Footer />
            </div>
        );
    }

    const recipeImages = recipe.images || [recipe.image];

    return (
        <div>
            <Navbar />
            <div className="recipe-details-container">
                <button onClick={handleBack} className="back-button">
                    <i className="fas fa-arrow-left"></i> Back
                </button>
                <div className="recipe-details-header">
                    <h1>{recipe.title}</h1>
                </div>
                
                <div className="recipe-details-content">
                    <div className="recipe-details-gallery">
                        <div className="main-image">
                            <img src={recipeImages[selectedImage]} alt={recipe.title} />
                        </div>
                        {recipeImages.length > 1 && (
                            <div className="image-thumbnails">
                                {recipeImages.map((img, index) => (
                                    <img 
                                        key={index}
                                        src={img}
                                        alt={`${recipe.title} ${index + 1}`}
                                        className={selectedImage === index ? 'active' : ''}
                                        onClick={() => setSelectedImage(index)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                    
                    <div className="recipe-details-info">
                        <div className="recipe-meta-details">
                            <div className="time-info">
                                <span data-label="Time">
                                    <i className="far fa-clock"></i>
                                    {recipe.time || recipe.totalTime}
                                </span>
                                <span data-label="Difficulty">
                                    <i className="fas fa-signal"></i>
                                    {recipe.difficulty}
                                </span>
                                <span data-label="Servings">
                                    <i className="fas fa-users"></i>
                                    {recipe.servings} servings
                                </span>
                            </div>

                            {recipe.nutrition && (
                                <div className="nutrition-info">
                                    <h3>Nutrition Facts (per serving)</h3>
                                    <div className="nutrition-grid">
                                        {Object.entries(recipe.nutrition).map(([key, value]) => (
                                            <div key={key} className="nutrition-item">
                                                <span className="nutrient">{key}</span>
                                                <span className="value">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {recipe.allergens && <AllergenInfo allergens={recipe.allergens} />}
                        </div>

                        <div className="recipe-sections">
                            <div className="ingredients-section">
                                <h2>Ingredients</h2>
                                <ul>
                                    {recipe.ingredients?.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="instructions-section">
                                <h2>Instructions</h2>
                                <ol>
                                    {recipe.instructions?.map((step, index) => (
                                        <li key={index}>{step}</li>
                                    ))}
                                </ol>
                            </div>

                            {(recipe.tips || recipe.notes) && (
                                <div className="tips-section">
                                    {recipe.tips && (
                                        <>
                                            <h2>Tips & Notes</h2>
                                            <ul className="tips-list">
                                                {recipe.tips.map((tip, index) => (
                                                    <li key={index}>{tip}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {recipe.notes && (
                                        <p className="recipe-notes">{recipe.notes}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <section className="recipe-rating-section">
                    <h3>Rate this Recipe</h3>
                    <RatingSystem 
                        initialRating={currentRating.rating}
                        totalRatings={currentRating.totalRatings}
                        onRatingChange={handleRatingChange}
                    />
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default RecipeDetails;
