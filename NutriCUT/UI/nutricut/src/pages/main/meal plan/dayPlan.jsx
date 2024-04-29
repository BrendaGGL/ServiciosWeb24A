import React, { useState } from "react";
import { Navigation } from '../../../components/Navigation'
import MealList from "../../../components/mealPlan/daily/SerchDaily";
import { DayCSS } from "../../../components/styled/meal_plan/dayplan.style";
import axios from 'axios'


export function Dayplan() {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);
    const[name, setName] = useState('Plan del dia');
    const [error, setError] = useState('');

    const user = localStorage.getItem('userAPI')
    const hash = localStorage.getItem('hash')

    function getMealData() {
    fetch(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_URL}&timeFrame=day&targetCalories=${calories}`
    )
        .then((response) => response.json())
        .then((data) => {
        setMealData(data);
        console.log(data)
        })
        .catch(() => {
        console.log("error");
        });
    }


    function handleChange(e) {
      setCalories(e.target.value);
    }

    function handleName(e){
      setName(e.target.value);
    }

    function savePlan() {
      
      
      const mealPlanData = {
        "name": name,
        "items": [
            {
                "day": 1,
                "slot": 1,
                "position": 0,
                "type": "RECIPE",
                "value": {
                    "id": mealData.meals[0].id,
                    "servings": mealData.meals[0].servings,
                    "title": mealData.meals[0].title,
                    "imageType": "jpg"
                }
            },
            {
              "day": 1,
              "slot": 2,
              "position": 0,
              "type": "RECIPE",
              "value": {
                  "id": mealData.meals[1].id,
                  "servings": mealData.meals[1].servings,
                  "title": mealData.meals[1].title,
                  "imageType": "jpg"
              }
          },
          {
            "day": 1,
            "slot": 3,
            "position": 0,
            "type": "RECIPE",
            "value": {
                "id": mealData.meals[2].id,
                "servings": mealData.meals[2].servings,
                "title": mealData.meals[2].title,
                "imageType": "jpg"
            }
        }
        ],
        "publishAsPublic": false
    };

     axios.post(`https://api.spoonacular.com/mealplanner/${user}/templates?hash=${hash}&apiKey=${process.env.REACT_APP_API_URL}`,
        mealPlanData ,{headers: 
        {'Content-Type': 'application/json'}})
        .then((response) => {
          // Success
          const plandata = response.data
          console.log(response.data)
          const Plandetails = {
            id_plan: plandata.mealPlan.id,
            id_user: localStorage.getItem('id'),
            plan_name: plandata.mealPlan.name
          }
          axios.post(`http://localhost:8001/api/userplans`,
        Plandetails ,{headers: 
        {'Content-Type': 'application/json'}})
      })
      .catch((error) => {
          // Error
          if (error.response) {
              setError(error);
          }
          else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
          }
          console.log(error.config);
      });


    }

    
    
    return (
        <div>
            <Navigation/>
            <DayCSS>
                

            <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <button onClick={getMealData}>Get Daily Meal Plan</button>
        <input
          type="text"
          placeholder="Nombre del plan"
          onChange={handleName}
        />
        <button onClick={savePlan}>  Guardar</button>
      </section>
      
      {mealData && <MealList mealData={mealData} />}
    </div>
            </DayCSS>

            
        </div>
    )
}

