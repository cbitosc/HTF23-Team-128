// Initialize meal data
let meals = [];

// Function to add a meal
function addMeal() {
    const mealName = document.getElementById("meal-name").value;
    const calories = parseInt(document.getElementById("calories").value);

    if (mealName && !isNaN(calories)) {
        // Create a new meal object
        const meal = { name: mealName, calories: calories };

        // Add the meal to the meals array
        meals.push(meal);

        // Update the meal list and total calories
        displayMeals();
        calculateTotalCalories();

        // Clear input fields
        document.getElementById("meal-name").value = "";
        document.getElementById("calories").value = "";
    } else {
        alert("Please enter a valid meal name and calorie count.");
    }
}

// Function to display meals
function displayMeals() {
    const mealList = document.getElementById("meal-list");
    mealList.innerHTML = "";

    meals.forEach((meal, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${meal.name} - ${meal.calories} calories`;
        mealList.appendChild(listItem);
    });
}

// Function to calculate total calories
function calculateTotalCalories() {
    const totalCalories = meals.reduce((total, meal) => total + meal.calories, 0);
    document.getElementById("total-calories").textContent = totalCalories;
}

// Load stored meals from local storage on page load
function loadMealsFromStorage() {
    const storedMeals = JSON.parse(localStorage.getItem("meals"));
    if (storedMeals) {
        meals = storedMeals;
        displayMeals();
        calculateTotalCalories();
    }
}

// Save meals to local storage when a new meal is added
function saveMealsToStorage() {
    localStorage.setItem("meals", JSON.stringify(meals));
}

// Call loadMealsFromStorage on page load
loadMealsFromStorage();

// Save meals to local storage when a new meal is added
function saveMealsToStorage() {
    localStorage.setItem("meals", JSON.stringify(meals));
}

// Call loadMealsFromStorage on page load
loadMealsFromStorage();


function generateDietRecommendation() {
    const goal = document.getElementById("goal").value;
    const calories = parseInt(document.getElementById("calories").value);
    const dietaryPreference = document.getElementById("dietary-preference").value;

    if (!isNaN(calories) && goal && dietaryPreference) {
        let recommendation = "Diet Recommendation:\n\n";

        // Generate recommendations based on the selected goal and dietary preference
        switch (goal) {
            case "weight_loss":
                recommendation += "Goal: Weight Loss\n";
                recommendation += `Daily Calorie Intake: ${calories} calories\n`;
                recommendation += `Dietary Preference: ${dietaryPreference}\n\n`;
                recommendation += "Sample Meal Plan:\n";
                recommendation += "- Breakfast: Oatmeal with berries\n";
                recommendation += "- Lunch: Grilled chicken salad\n";
                recommendation += "- Snack: Greek yogurt\n";
                recommendation += "- Dinner: Baked salmon with vegetables\n";
                recommendation += "- For weight loss, consider a diet with reduced calorie intake and regular exercise. Focus on lean proteins, vegetables, and whole grains.\n";
                break;
            case "muscle_gain":
                recommendation += "Goal: Muscle Gain\n";
                recommendation += `Daily Calorie Intake: ${calories} calories\n`;
                recommendation += `Dietary Preference: ${dietaryPreference}\n\n`;
                recommendation += "Sample Meal Plan:\n";
                recommendation += "- Breakfast: Protein smoothie with banana\n";
                recommendation += "- Lunch: Quinoa and black bean bowl\n";
                recommendation += "- Snack: Almonds and dried fruits\n";
                recommendation += "- Dinner: Grilled steak with sweet potatoes\n";
                recommendation += "For muscle gain, increase your calorie intake and focus on protein-rich foods such as lean meats, beans, and dairy. Combine strength training exercises with your diet plan.\n";
                break;
            case "maintenance":
                recommendation += "Goal: Maintenance\n";
                recommendation += `Daily Calorie Intake: ${calories} calories\n`;
                recommendation += `Dietary Preference: ${dietaryPreference}\n\n`;
                recommendation += "Sample Meal Plan:\n";
                recommendation += "- Breakfast: Scrambled eggs with spinach\n";
                recommendation += "- Lunch: Turkey and avocado sandwich\n";
                recommendation += "- Snack: Greek yogurt with honey\n";
                recommendation += "- Dinner: Grilled fish with quinoa\n";
                recommendation += "For weight maintenance, balance your calorie intake and choose food rich in nitrients like lean proteins, low-fat dairy and fruits.Physical activities will help alot.\n";
                break;
        }

        // Display the recommendation
        document.getElementById("recommendation").textContent = recommendation;
    } else {
        alert("Please fill in all fields with valid values.");
    }
}function performNutritionalAnalysis() {
    const foodName = document.getElementById("food-name").value;
    const calories = parseFloat(document.getElementById("calories").value);
    const protein = parseFloat(document.getElementById("protein").value);
    const carbs = parseFloat(document.getElementById("carbs").value);
    const fat = parseFloat(document.getElementById("fat").value);

    if (!isNaN(calories) && !isNaN(protein) && !isNaN(carbs) && !isNaN(fat)) {
        // Calculate total nutritional values
        const totalCalories = calories;
        const totalProtein = protein;
        const totalCarbs = carbs;
        const totalFat = fat;

        // Display nutritional analysis results
        const analysisResults = document.getElementById("analysis-results");
        analysisResults.innerHTML = `
            <h3>Nutritional Analysis Results for ${foodName}</h3>
            <p>Calories: ${totalCalories} calories</p>
            <p>Protein: ${totalProtein} grams</p>
            <p>Carbohydrates: ${totalCarbs} grams</p>
            <p>Fat: ${totalFat} grams</p>
        `;
    } else {
        alert("Please enter valid nutritional values.");
    }
}
function provideDietaryInsights() {
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const activityLevel = document.getElementById("activity-level").value;

    if (!isNaN(age) && age > 0) {
        let insights = "";
        let recommendations = "";

        // Basic recommendations based on age, gender, and activity level (simplified)
        if (age >= 18) {
            if (gender === "male") {
                if (activityLevel === "sedentary") {
                    insights = "Sedentary lifestyle can lead to weight gain. Consider regular exercise.";
                    recommendations = "Consider a balanced diet with a calorie deficit for weight loss.";
                } else if (activityLevel === "moderately_active") {
                    insights = "Moderate active can lead to weight maintenance. Disease free";
                    recommendations = "While engaging in moderate activity may enhance immune function above sedentary levels, excessive amounts of prolonged, high-intensity exercise may impair immune function.";
                } else if (activityLevel === "very_active") {
                    insights = "You have an active lifestyle. Keep it up!";
                    recommendations = "Maintain a balanced diet to support your activity level.";
                }
            } else if (gender === "female") {
                if (activityLevel === "sedentary") {
                    insights = "Sedentary lifestyle can lead to weight gain. Consider regular exercise.";
                    recommendations = "Consider a balanced diet with a calorie deficit for weight loss.";
                } else if (activityLevel === "moderately_active") {
                    insights = "Moderate active can lead to weight maintenance. Disease free";
                    recommendations = "While engaging in moderate activity may enhance immune function above sedentary levels, excessive amounts of prolonged, high-intensity exercise may impair immune function.";
                } else if (activityLevel === "very_active") {
                    insights = "You have an active lifestyle. Keep it up!";
                    recommendations = "Maintain a balanced diet to support your activity level.";
                }
            }
        } else {
            insights = "Please enter a valid age.";
        }

        // Display dietary insights and recommendations
        const insightsDiv = document.getElementById("insights");
        insightsDiv.innerHTML = `
            <p>${insights}</p>
            <p>${recommendations}</p>
        `;
    } else {
        alert("Please enter a valid age.");
    }
}

