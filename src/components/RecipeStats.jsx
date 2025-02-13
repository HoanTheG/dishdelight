import { useState, useEffect } from 'react';
import '../styles/components/RecipeStats.css';

const RecipeStats = ({ recipes }) => {
    const [stats, setStats] = useState({
        total: 0,
        byDifficulty: {},
        byCategory: {},
        averageTime: 0
    });

    useEffect(() => {
        const calculateStats = () => {
            const byDifficulty = recipes.reduce((acc, recipe) => {
                acc[recipe.difficulty] = (acc[recipe.difficulty] || 0) + 1;
                return acc;
            }, {});

            const byCategory = recipes.reduce((acc, recipe) => {
                acc[recipe.category] = (acc[recipe.category] || 0) + 1;
                return acc;
            }, {});

            const avgTime = recipes.reduce((acc, recipe) => {
                const timeNum = parseInt(recipe.time);
                return isNaN(timeNum) ? acc : acc + timeNum;
            }, 0) / (recipes.length || 1);

            setStats({
                total: recipes.length,
                byDifficulty,
                byCategory,
                averageTime: Math.round(avgTime)
            });
        };

        calculateStats();
    }, [recipes]);

    return (
        <div className="recipe-stats">
            <div className="stat-card total">
                <i className="fas fa-book-open"></i>
                <h3>{stats.total}</h3>
                <p>Total Recipes</p>
            </div>
            <div className="stat-card difficulty">
                <i className="fas fa-signal"></i>
                <h3>{Object.keys(stats.byDifficulty).length}</h3>
                <p>Difficulty Levels</p>
            </div>
            <div className="stat-card time">
                <i className="far fa-clock"></i>
                <h3>{stats.averageTime}min</h3>
                <p>Avg. Cooking Time</p>
            </div>
            <div className="stat-card categories">
                <i className="fas fa-utensils"></i>
                <h3>{Object.keys(stats.byCategory).length}</h3>
                <p>Categories</p>
            </div>
        </div>
    );
};

export default RecipeStats;
