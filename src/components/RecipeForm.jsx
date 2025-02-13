import { useState, useEffect } from 'react';
import '../styles/components/RecipeForm.css';

const RecipeForm = ({ recipe, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
        title: '',
        category: 'dinner',
        time: '',
        difficulty: 'Medium',
        image: '',
        ingredients: '',
        instructions: '',
        ...recipe
    });

    useEffect(() => {
        if (recipe) {
            setFormData({
                ...recipe,
                ingredients: Array.isArray(recipe.ingredients) ? recipe.ingredients.join('\n') : '',
                instructions: Array.isArray(recipe.instructions) ? recipe.instructions.join('\n') : ''
            });
        }
    }, [recipe]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const submissionData = {
            ...formData,
            ingredients: formData.ingredients.split('\n').filter(i => i.trim()),
            instructions: formData.instructions.split('\n').filter(i => i.trim())
        };
        onSubmit(submissionData);
    };

    return (
        <form className="recipe-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Recipe Title</label>
                <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    required
                />
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label>Category</label>
                    <select
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                    >
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Difficulty</label>
                    <select
                        value={formData.difficulty}
                        onChange={(e) => setFormData({...formData, difficulty: e.target.value})}
                    >
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label>Cooking Time (e.g., "30 min")</label>
                <input
                    type="text"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    required
                />
            </div>

            <div className="form-group">
                <label>Image URL</label>
                <input
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    required
                />
            </div>

            <div className="form-group">
                <label>Ingredients (one per line)</label>
                <textarea
                    value={formData.ingredients}
                    onChange={(e) => setFormData({...formData, ingredients: e.target.value})}
                    rows="5"
                    required
                />
            </div>

            <div className="form-group">
                <label>Instructions (one step per line)</label>
                <textarea
                    value={formData.instructions}
                    onChange={(e) => setFormData({...formData, instructions: e.target.value})}
                    rows="5"
                    required
                />
            </div>

            <div className="form-actions">
                <button type="button" className="cancel-button" onClick={onCancel}>
                    Cancel
                </button>
                <button type="submit" className="submit-button">
                    {recipe ? 'Update Recipe' : 'Add Recipe'}
                </button>
            </div>
        </form>
    );
};

export default RecipeForm;
