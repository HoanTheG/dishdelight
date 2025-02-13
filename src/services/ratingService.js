const RATINGS_KEY = 'recipe_ratings';

export const getRatings = () => {
    const ratings = localStorage.getItem(RATINGS_KEY);
    return ratings ? JSON.parse(ratings) : {};
};

export const saveRating = (recipeId, rating) => {
    const ratings = getRatings();
    if (!ratings[recipeId]) {
        ratings[recipeId] = {
            totalRatings: 0,
            totalScore: 0
        };
    }
    
    ratings[recipeId].totalRatings += 1;
    ratings[recipeId].totalScore += rating;
    
    localStorage.setItem(RATINGS_KEY, JSON.stringify(ratings));
    
    return {
        rating: ratings[recipeId].totalScore / ratings[recipeId].totalRatings,
        totalRatings: ratings[recipeId].totalRatings
    };
};

export const getRecipeRating = (recipeId) => {
    const ratings = getRatings();
    if (!ratings[recipeId]) return { rating: 0, totalRatings: 0 };
    
    return {
        rating: ratings[recipeId].totalScore / ratings[recipeId].totalRatings,
        totalRatings: ratings[recipeId].totalRatings
    };
};
