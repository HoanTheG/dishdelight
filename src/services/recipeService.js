import { db } from '../config/firebase';
import { collection, addDoc, updateDoc, deleteDoc, getDocs, doc } from 'firebase/firestore';

const COLLECTION_NAME = 'personalRecipes';

export const getPersonalRecipes = async () => {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
};

export const addPersonalRecipe = async (recipe) => {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), recipe);
    return { id: docRef.id, ...recipe };
};

export const updatePersonalRecipe = async (id, recipe) => {
    const recipeRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(recipeRef, recipe);
    return { id, ...recipe };
};

export const deletePersonalRecipe = async (id) => {
    const recipeRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(recipeRef);
};
