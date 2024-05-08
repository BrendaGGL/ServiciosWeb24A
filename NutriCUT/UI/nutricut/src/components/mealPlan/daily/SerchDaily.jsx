import Meal from "./MealList";


export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    
    <div className="row">
        <div className="col-2">
          <section className="nutrients">
          <h1>Macros</h1>
          <ul>
            <li>Calories: {nutrients.calories.toFixed(0)}</li>
            <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
            <li>Fat: {nutrients.fat.toFixed(0)}</li>
            <li>Protein: {nutrients.protein.toFixed(0)}</li>
          </ul>
        </section>
        </div>

        <div className="col-10">
          <main>
          <div className="general-content">
              {mealData.meals.map((meal) => {
                return <Meal key={meal.id} meal={meal} />;
              })}
            </div>
          </main>
        </div>
      
    </div>
  );
}