export const getFavorites = () => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
};

export const addFavorite = (recipe) => {
    const favorites = getFavorites();
    const newRecipe = { ...recipe, id: Date.now() }; // Ensure unique ID
    favorites.push(newRecipe);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    return newRecipe;
};

export const updateFavorite = (recipe) => {
    const favorites = getFavorites();
    const index = favorites.findIndex(f => f.id === recipe.id);
    if (index !== -1) {
        favorites[index] = recipe;
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
};

export const deleteFavorite = (id) => {
    const favorites = getFavorites();
    const filtered = favorites.filter(recipe => recipe.id !== id);
    localStorage.setItem('favorites', JSON.stringify(filtered));
};
