export const recipes = [
    {
        id: '1',
        title: "Spaghetti Carbonara",
        category: "dinner",
        time: "30 min",
        difficulty: "Medium",
        servings: 4,
        description: "Classic Italian pasta with crispy pancetta, eggs, and Pecorino Romano",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=1000",
        ingredients: [
            "400g spaghetti",
            "200g pancetta or guanciale",
            "4 large eggs",
            "100g Pecorino Romano",
            "100g Parmigiano Reggiano",
            "Black pepper",
            "Salt"
        ],
        instructions: [
            "Bring a large pot of salted water to boil",
            "Cook spaghetti according to package instructions",
            "While pasta cooks, cut pancetta into small cubes",
            "Fry pancetta until crispy",
            "Mix eggs, cheese, and pepper in a bowl",
            "Combine hot pasta with egg mixture and pancetta",
            "Serve immediately with extra cheese and pepper"
        ],
        rating: 4.8,
        totalRatings: 245,
        nutrition: {
            calories: "650 kcal",
            protein: "28g",
            carbs: "72g",
            fat: "25g"
        },
        allergens: [
            { name: 'Eggs', severity: 'high' },
            { name: 'Dairy', severity: 'medium' },
            { name: 'Gluten', severity: 'medium' }
        ]
    },
    {
        id: 2,
        title: "Avocado Toast",
        image: "https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?q=80&w=1000",
        images: [
            "https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?q=80&w=1000",
            "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            
        ],
        prepTime: "5 min",
        cookTime: "5 min",
        totalTime: "10 min",
        servings: 2,
        difficulty: "Easy",
        rating: "4.2",
        category: "breakfast",
        nutrition: {
            calories: "250 kcal",
            protein: "6g",
            carbohydrates: "30g",
            fat: "12g",
            fiber: "7g",
            sodium: "300mg"
        },
        ingredients: [
            "2 slices of bread",
            "1 ripe avocado",
            "Salt",
            "Pepper",
            "Lemon juice",
            "Chili flakes"
        ],
        instructions: [
            "Toast the bread slices until golden brown.",
            "Mash the avocado in a bowl and season with salt, pepper, and lemon juice.",
            "Spread the mashed avocado on the toasted bread.",
            "Sprinkle chili flakes on top and serve."
        ],
        tips: [
            "Use ripe avocados for the best texture and flavor",
            "Add a poached egg on top for extra protein",
            "Try different toppings like tomatoes or radishes"
        ],
        notes: "A simple and healthy breakfast option that's quick to make and customizable with your favorite toppings.",
        allergens: [
            { name: 'Gluten', severity: 'medium' }
        ]
    },
    {
        id: 3,
        title: "Chicken Caesar Salad",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=1000",
        images: [
            "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=1000",
            "https://images.unsplash.com/photo-1580013759032-c96505e24c1f?q=80&w=1000",
            "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=1000",
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000"
        ],
        prepTime: "10 min",
        cookTime: "10 min",
        totalTime: "20 min",
        servings: 2,
        difficulty: "Easy",
        rating: "4.3",
        category: "lunch",
        nutrition: {
            calories: "450 kcal",
            protein: "35g",
            carbohydrates: "20g",
            fat: "25g",
            fiber: "4g",
            sodium: "700mg"
        },
        ingredients: [
            "2 chicken breasts",
            "1 romaine lettuce",
            "50g croutons",
            "50g grated Parmesan cheese",
            "Caesar dressing",
            "Salt",
            "Pepper"
        ],
        instructions: [
            "Season the chicken breasts with salt and pepper, then grill until fully cooked.",
            "Chop the romaine lettuce and place in a large bowl.",
            "Slice the grilled chicken and add to the bowl.",
            "Add croutons, grated Parmesan cheese, and Caesar dressing.",
            "Toss everything together and serve."
        ],
        tips: [
            "Use freshly grated Parmesan for the best flavor",
            "Add anchovies to the dressing for a traditional Caesar taste",
            "Grill the chicken on high heat for a nice char"
        ],
        notes: "A classic salad that's perfect for a light lunch or dinner. The combination of grilled chicken, crisp lettuce, and creamy dressing is always a hit.",
        allergens: [
            { name: 'Dairy', severity: 'medium' },
            { name: 'Gluten', severity: 'medium' }
        ]
    },
    {
        id: 4,
        title: "Berry Smoothie Bowl",
        image: "https://images.unsplash.com/photo-1638813133218-4367bd8123f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
            "https://images.unsplash.com/photo-1638813133218-4367bd8123f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1694935557099-71c873f83eb5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1694935556899-6ee56f536943?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        prepTime: "10 min",
        cookTime: "5 min",
        totalTime: "15 min",
        servings: 1,
        difficulty: "Easy",
        rating: "4.7",
        category: "breakfast",
        nutrition: {
            calories: "300 kcal",
            protein: "10g",
            carbohydrates: "50g",
            fat: "8g",
            fiber: "8g",
            sodium: "100mg"
        },
        ingredients: [
            "2 cups mixed berries",
            "1 banana",
            "1 cup yogurt",
            "1 tbsp honey",
            "Granola",
            "Chia seeds",
            "Fresh berries for topping"
        ],
        instructions: [
            "Blend berries, banana, yogurt, and honey until smooth",
            "Pour into a bowl",
            "Top with granola, chia seeds, and fresh berries",
            "Serve immediately"
        ],
        tips: [
            "Use frozen berries for a thicker consistency",
            "Add a scoop of protein powder for extra nutrition",
            "Top with your favorite nuts or seeds for added crunch"
        ],
        notes: "A refreshing and nutritious breakfast option that's perfect for summer. Customize with your favorite toppings for a delicious start to your day.",
        allergens: [
            { name: 'Dairy', severity: 'medium' }
        ]
    },
    {
        id: 5,
        title: "Grilled Salmon",
        image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
            "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1485921325833-c519f76c4927?q=80&w=1000",
            "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1000"
        ],
        prepTime: "10 min",
        cookTime: "15 min",
        totalTime: "25 min",
        servings: 4,
        difficulty: "Medium",
        rating: "4.8",
        category: "dinner",
        nutrition: {
            calories: "400 kcal",
            protein: "35g",
            carbohydrates: "5g",
            fat: "25g",
            fiber: "1g",
            sodium: "500mg"
        },
        ingredients: [
            "4 salmon fillets",
            "2 tbsp olive oil",
            "1 lemon",
            "3 cloves garlic",
            "Fresh dill",
            "Salt",
            "Black pepper"
        ],
        instructions: [
            "Marinate salmon with olive oil, lemon juice, minced garlic, salt, and pepper",
            "Let it rest for 10 minutes",
            "Grill for 4-5 minutes each side",
            "Garnish with fresh dill and serve with lemon wedges"
        ],
        tips: [
            "Use a fish spatula for easy flipping",
            "Grill on high heat for a nice sear",
            "Serve with a side of grilled vegetables"
        ],
        notes: "A healthy and flavorful dinner option that's quick to prepare. The marinade adds a burst of flavor to the salmon, making it a family favorite.",
        allergens: [
            { name: 'Fish', severity: 'high' }
        ]
    },
    {
        id: 6,
        title: "Mediterranean Quinoa Salad",
        image: "https://images.unsplash.com/photo-1529059997568-3d847b1154f0?q=80&w=1000",
        images: [
            "https://images.unsplash.com/photo-1529059997568-3d847b1154f0?q=80&w=1000",
            "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1000",
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000"
        ],
        prepTime: "10 min",
        cookTime: "20 min",
        totalTime: "30 min",
        servings: 4,
        difficulty: "Easy",
        rating: "4.4",
        category: "lunch",
        nutrition: {
            calories: "350 kcal",
            protein: "12g",
            carbohydrates: "45g",
            fat: "15g",
            fiber: "8g",
            sodium: "400mg"
        },
        ingredients: [
            "2 cups quinoa",
            "1 cucumber",
            "2 tomatoes",
            "1 red onion",
            "200g feta cheese",
            "Kalamata olives",
            "Extra virgin olive oil",
            "Fresh lemon juice",
            "Fresh herbs (mint, parsley)"
        ],
        instructions: [
            "Cook quinoa according to package instructions and let it cool",
            "Dice cucumber, tomatoes, and red onion",
            "Mix vegetables with cooled quinoa",
            "Add crumbled feta and olives",
            "Dress with olive oil and lemon juice",
            "Season to taste and garnish with fresh herbs"
        ],
        tips: [
            "Rinse quinoa before cooking to remove bitterness",
            "Add chickpeas for extra protein",
            "Serve chilled for a refreshing meal"
        ],
        notes: "A light and healthy salad that's perfect for lunch or as a side dish. The combination of fresh vegetables, quinoa, and feta cheese is both satisfying and nutritious.",
        allergens: [
            { name: 'Dairy', severity: 'medium' }
        ]
    },
    {
        id: 7,
        title: "Chocolate Banana Pancakes",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1000",
        images: [
            "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1000",
            "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1000",
            "https://images.unsplash.com/photo-1515467837915-15c4777ba46a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        prepTime: "10 min",
        cookTime: "10 min",
        totalTime: "20 min",
        servings: 4,
        difficulty: "Easy",
        rating: "4.6",
        category: "breakfast",
        nutrition: {
            calories: "350 kcal",
            protein: "8g",
            carbohydrates: "60g",
            fat: "10g",
            fiber: "4g",
            sodium: "300mg"
        },
        ingredients: [
            "2 ripe bananas",
            "2 cups flour",
            "2 eggs",
            "1 cup milk",
            "3 tbsp cocoa powder",
            "2 tbsp honey",
            "1 tsp baking powder",
            "Butter for cooking",
            "Maple syrup for serving"
        ],
        instructions: [
            "Mash bananas in a large bowl",
            "Mix in eggs, milk, and honey",
            "Add flour, cocoa powder, and baking powder",
            "Heat butter in a pan over medium heat",
            "Cook pancakes until bubbles form, then flip",
            "Serve with maple syrup and banana slices"
        ],
        tips: [
            "Use overripe bananas for the best flavor",
            "Add chocolate chips for extra indulgence",
            "Serve with fresh fruit for a balanced meal"
        ],
        notes: "A delicious and indulgent breakfast option that's perfect for weekends. The combination of chocolate and banana is always a winner.",
        allergens: [
            { name: 'Eggs', severity: 'high' },
            { name: 'Dairy', severity: 'medium' },
            { name: 'Gluten', severity: 'medium' }
        ]
    },
    {
        id: 'mediterranean-pasta',
        title: "Mediterranean Pasta",
        category: "dinner",
        description: "Fresh pasta with sun-dried tomatoes, olives, and herbs",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1548247661-3d7905940716?auto=format&fit=crop&w=800&q=80"
        ],
        time: "30 min",
        difficulty: "Easy",
        servings: 4,
        ingredients: [
            "16 oz penne pasta",
            "1 cup sun-dried tomatoes",
            "1/2 cup Kalamata olives",
            "2 tbsp fresh basil",
            "4 cloves garlic",
            "1/4 cup olive oil",
            "1/2 cup feta cheese",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Boil pasta according to package instructions",
            "Heat olive oil and sauté garlic",
            "Add sun-dried tomatoes and olives",
            "Toss with pasta and fresh basil",
            "Top with crumbled feta cheese"
        ],
        allergens: [
            { name: 'Dairy', severity: 'medium' },
            { name: 'Gluten', severity: 'medium' }
        ]
    }
];

export const getRecipeById = (id) => {
    return recipes.find(recipe => recipe.id.toString() === id.toString());
};
