const STORAGE_KEY = 'personalRecipes';

export const getPersonalRecipes = () => {
    const recipes = localStorage.getItem(STORAGE_KEY);
    return recipes ? JSON.parse(recipes) : [];
};

export const addPersonalRecipe = (recipe) => {
    const recipes = getPersonalRecipes();
    const newRecipe = { ...recipe, id: Date.now() };
    recipes.push(newRecipe);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
    return newRecipe;
};

export const updatePersonalRecipe = (id, updatedRecipe) => {
    const recipes = getPersonalRecipes();
    const index = recipes.findIndex(recipe => recipe.id === id);
    if (index !== -1) {
        recipes[index] = { ...updatedRecipe, id };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
        return recipes[index];
    }
    return null;
};

export const deletePersonalRecipe = (id) => {
    const recipes = getPersonalRecipes();
    const filteredRecipes = recipes.filter(recipe => recipe.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredRecipes));
};
