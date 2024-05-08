import Meal from "./WeekList";


export function WeekList({ mealData }) {



  return (
    
      

    <><><><><><><div className="dias">
      <div class="dia-contenedor">Lunes</div>
      {mealData.monday.meals.map((meal) => {
        return <Meal key={meal.id} meal={meal} />;
      })}
    </div><div className="dias">
        <div class="dia-contenedor">Martes</div>
        {mealData.tuesday.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </div></><div className="dias">
        <div class="dia-contenedor">Miercoles</div>
        {mealData.wednesday.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </div></><div className="dias">
        <div class="dia-contenedor">Jueves</div>
        {mealData.thursday.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </div></><div className="dias">
        <div class="dia-contenedor">Viernes</div>
        {mealData.friday.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </div></><div className="dias">
        <div class="dia-contenedor">Sabado</div>
        {mealData.saturday.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </div></><div className="dias">
        <div class="dia-contenedor">Domingo</div>
        {mealData.sunday.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </div></>
    
      
  );
}