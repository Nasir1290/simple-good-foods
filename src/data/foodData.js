const allFoods = [
    // Products 1-12
    {
        id: 1,
        title: "Grilled Chicken Salad",
        price: 75,
        rating: 4.3,
        image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        category: "snacks",
        element: ["protein 49g", "fiber 10g", "vitamin C 30mg"],
        description: "A healthy grilled chicken salad with fresh greens, packed with protein and fiber."
    },
    {
        id: 2,
        title: "Egg and Avocado Toast",
        price: 40,
        rating: 4.7,
        image: "https://plus.unsplash.com/premium_photo-1676409608965-665e89ba22a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        category: "breakfast",
        element: ["protein 49g", "carbs 25g", "fat 23g"],
        description: "A delicious and healthy start to your day, featuring perfectly ripe avocado and eggs on toast."
    },
    {
        id: 3,
        title: "Protein-Packed Smoothie",
        price: 35,
        rating: 4.8,
        image: "https://plus.unsplash.com/premium_photo-1676064229110-018a3b3b785c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        category: "snacks",
        element: ["protein 49g", "vitamin C 30mg", "sugar 15g"],
        description: "A refreshing smoothie loaded with protein to keep you energized throughout the day."
    },
    {
        id: 4,
        title: "Vegan Buddha Bowl",
        price: 60,
        rating: 4.6,
        image: "https://plus.unsplash.com/premium_photo-1699293238732-c2fde08b4923?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        category: "entree",
        element: ["carbs 25g", "fiber 10g", "iron 5mg"],
        description: "A wholesome vegan Buddha bowl packed with nutrients and flavor."
    },
    {
        id: 5,
        title: "Pancakes with Maple Syrup",
        price: 45,
        rating: 4.5,
        image: "https://plus.unsplash.com/premium_photo-1699030868919-0a6d24d8246b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        category: "breakfast",
        element: ["carbs 25g", "sugar 15g", "fat 23g"],
        description: "Fluffy pancakes drizzled with pure maple syrup, a perfect breakfast treat."
    },
    {
        id: 6,
        title: "Classic Cheeseburger",
        price: 80,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        category: "entree",
        element: ["protein 49g", "carbs 25g", "fat 23g"],
        description: "A juicy cheeseburger with melted cheese and fresh vegetables, perfect for a hearty meal."
    },
    {
        id: 7,
        title: "BBQ Pulled Pork Sandwich",
        price: 90,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        category: "snacks",
        element: ["protein 49g", "carbs 25g", "fiber 10g"],
        description: "Succulent pulled pork smothered in BBQ sauce, served on a soft bun."
    },
    {
        id: 8,
        title: "Omelette with Spinach",
        price: 55,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        category: "breakfast",
        element: ["protein 49g", "iron 5mg", "fiber 10g"],
        description: "A healthy omelette packed with spinach and essential nutrients."
    },
    {
        id: 9,
        title: "Salmon and Quinoa",
        price: 120,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1643996317182-5b01f9725953?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        category: "breakfast",
        element: ["protein 49g", "carbs 25g", "vitamin C 30mg"],
        description: "A delicious and nutritious salmon fillet served with quinoa."
    },
    {
        id: 10,
        title: "Avocado Chicken Wrap",
        price: 65,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1553395266-51c63ddf3d8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        category: "snacks",
        element: ["protein 49g", "fat 23g", "fiber 10g"],
        description: "A light and tasty wrap with avocado and grilled chicken, perfect for a snack."
    },
    {
        id: 11,
        title: "Vegetarian Pizza",
        price: 90,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        category: "entree",
        element: ["carbs 25g", "fiber 10g", "vitamin C 30mg"],
        description: "A delightful vegetarian pizza with a variety of fresh toppings."
    },
    {
        id: 12,
        title: "Greek Yogurt with Honey",
        price: 30,
        rating: 4.4,
        image: "https://plus.unsplash.com/premium_photo-1699030868919-0a6d24d8246b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        category: "breakfast",
        element: ["protein 49g", "sugar 15g", "calcium 150mg"],
        description: "A simple yet delicious snack of Greek yogurt drizzled with honey."
    },
    // Products 13-30
    {
        id: 13,
        title: "Berry Smoothie Bowl",
        price: 40,
        rating: 4.7,
        image: "https://plus.unsplash.com/premium_photo-1699030868919-0a6d24d8246b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        category: "breakfast",
        element: ["protein 10g", "fiber 7g", "vitamin C 30mg"],
        description: "A refreshing smoothie bowl topped with berries and granola."
    },
    {
        id: 14,
        title: "Spicy Tuna Wrap",
        price: 50,
        rating: 4.3,
        image: "https://plus.unsplash.com/premium_photo-1699293238732-c2fde08b4923?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        category: "breakfast",
        element: ["protein 35g", "carbs 20g", "fat 15g"],
        description: "A spicy tuna wrap with a kick of flavor and crunch."
    },
    {
        id: 15,
        title: "Chicken Caesar Salad",
        price: 65,
        rating: 4.6,
        image: "https://plus.unsplash.com/premium_photo-1699293238732-c2fde08b4923?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        category: "breakfast",
        element: ["protein 45g", "carbs 15g", "fat 20g"],
        description: "A classic Caesar salad with grilled chicken and a creamy dressing."
    },
    {
        id: 16,
        title: "Stuffed Bell Peppers",
        price: 70,
        rating: 4.4,
        image: "https://plus.unsplash.com/premium_photo-1676064229110-018a3b3b785c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        category: "entree",
        element: ["protein 30g", "carbs 20g", "fiber 10g"],
        description: "Bell peppers stuffed with a savory mixture of rice, meat, and spices."
    },
    {
        id: 17,
        title: "Chia Pudding",
        price: 45,
        rating: 4.7,
        image: "https://plus.unsplash.com/premium_photo-1676409608965-665e89ba22a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        category: "snacks",
        element: ["protein 15g", "fiber 12g", "calcium 150mg"],
        description: "A nutritious chia pudding with a creamy texture and sweet taste."
    },
    {
        id: 18,
        title: "Turkey and Cheese Sandwich",
        price: 50,
        rating: 4.5,
        image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        category: "snacks",
        element: ["protein 35g", "carbs 30g", "fat 15g"],
        description: "A hearty sandwich filled with turkey, cheese, and fresh vegetables."
    },
    {
        id: 19,
        title: "Greek Salad",
        price: 55,
        rating: 4.6,
        image: "https://plus.unsplash.com/premium_photo-1699030868919-0a6d24d8246b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        category: "snacks",
        element: ["protein 12g", "fiber 5g", "vitamin C 30mg"],
        description: "A refreshing Greek salad with tomatoes, cucumbers, olives, and feta cheese."
    },
    {
        id: 20,
        title: "Roasted Vegetable Medley",
        price: 70,
        rating: 4.4,
        image: "https://plus.unsplash.com/premium_photo-1699293238732-c2fde08b4923?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        category: "entree",
        element: ["fiber 10g", "carbs 20g", "vitamin A 50%"],
        description: "A delicious medley of roasted vegetables with a touch of seasoning."
    },
    {
        id: 21,
        title: "Quinoa Salad with Veggies",
        price: 65,
        rating: 4.5,
        image: "https://plus.unsplash.com/premium_photo-1676064229110-018a3b3b785c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        category: "snacks",
        element: ["protein 15g", "fiber 8g", "carbs 25g"],
        description: "A healthy quinoa salad loaded with fresh vegetables and herbs."
    },
    {
        id: 22,
        title: "Sweet Potato Fries",
        price: 40,
        rating: 4.3,
        image: "https://plus.unsplash.com/premium_photo-1676409608965-665e89ba22a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        category: "snacks",
        element: ["carbs 30g", "fiber 7g", "vitamin A 100%"],
        description: "Crispy and delicious sweet potato fries, a healthier alternative to regular fries."
    },
    {
        id: 23,
        title: "Lentil Soup",
        price: 55,
        rating: 4.7,
        image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        category: "entree",
        element: ["protein 20g", "fiber 15g", "vitamin B 30mg"],
        description: "A hearty and nourishing lentil soup with rich flavors and spices."
    },
    {
        id: 24,
        title: "Chicken Stir-Fry",
        price: 75,
        rating: 4.8,
        image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        category: "entree",
        element: ["protein 30g", "carbs 20g", "fiber 8g"],
        description: "A flavorful chicken stir-fry with mixed vegetables and a savory sauce."
    },
    {
        id: 25,
        title: "Fruit Salad",
        price: 45,
        rating: 4.6,
        image: "https://plus.unsplash.com/premium_photo-1699030868919-0a6d24d8246b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        category: "snacks",
        element: ["fiber 5g", "vitamin C 50mg", "carbs 15g"],
        description: "A refreshing fruit salad with a mix of seasonal fruits."
    },
    {
        id: 26,
        title: "Eggplant Parmesan",
        price: 75,
        rating: 4.4,
        image: "https://plus.unsplash.com/premium_photo-1699293238732-c2fde08b4923?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        category: "entree",
        element: ["protein 20g", "carbs 25g", "fiber 10g"],
        description: "A classic Italian dish with layers of breaded eggplant, marinara sauce, and cheese."
    },
    {
        id: 27,
        title: "Falafel Wrap",
        price: 60,
        rating: 4.6,
        image: "https://plus.unsplash.com/premium_photo-1676409608965-665e89ba22a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        category: "snacks",
        element: ["protein 15g", "carbs 30g", "fiber 8g"],
        description: "A flavorful wrap filled with crispy falafel and fresh vegetables."
    },
    {
        id: 28,
        title: "Beef Tacos",
        price: 80,
        rating: 4.5,
        image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        category: "entree",
        element: ["protein 25g", "carbs 20g", "fat 15g"],
        description: "Delicious beef tacos with a variety of toppings and a side of salsa."
    },
    {
        id: 29,
        title: "Cottage Cheese with Fruit",
        price: 40,
        rating: 4.3,
        image: "https://plus.unsplash.com/premium_photo-1699030868919-0a6d24d8246b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        category: "snacks",
        element: ["protein 15g", "calcium 200mg", "carbs 10g"],
        description: "A healthy snack of cottage cheese paired with fresh fruit."
    },
    {
        id: 30,
        title: "Vegetable Stir-Fry",
        price: 65,
        rating: 4.7,
        image: "https://plus.unsplash.com/premium_photo-1699293238732-c2fde08b4923?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        category: "entree",
        element: ["fiber 12g", "carbs 20g", "vitamin C 30mg"],
        description: "A colorful and nutritious vegetable stir-fry with a savory sauce."
    }
];



export default allFoods