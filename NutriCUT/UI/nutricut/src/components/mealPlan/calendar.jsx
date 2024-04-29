import { PlanCSS } from '../styled/meal_plan/agenda.style';
import { SearchBarx } from './SearchBar';
import { SearchResults } from './SearchResults';
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';


export function Agenda() {

    const [searchResults, setSearchResults] = useState([]);

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

    const handleSearchResults = (results) => {

        setSearchResults(results);
    
        };

        


    return (

        <PlanCSS>
            <div id="wrapper">
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
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

                    </ul>
                </div>

            <div id="page-content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <Week>
                            <div className="container">
                                <div class="agenda">
                                    <div class="semana">
                                        <div class="dia">Comida</div>
                                        <div class="dia">Lunes</div>
                                        <div class="dia">Martes</div>
                                        <div class="dia">Miércoles</div>
                                        <div class="dia">Jueves</div>
                                        <div class="dia">Viernes</div>
                                        <div class="dia">Sábado</div>
                                        <div class="dia">Domingo</div>
                                    </div>
                                    <div class="dias">
                                        <div class="dia-contenedor">
                                            Desayuno
                                        </div>
                                        <div class="dia-contenedor">
                                            
                                        </div>
                                        <div class="dia-contenedor">
                                            
                                        </div>
                                        <div class="dia-contenedor">
                                            
                                        </div>
                                        <div class="dia-contenedor">
                                            
                                        </div>
                                        <div class="dia-contenedor">
                                            
                                        </div>
                                        <div class="dia-contenedor">
                                            
                                        </div>
                                    </div>
                                    <div class="dias">
                                        <div class="dia-contenedor">
                                            Comida
                                        </div>
                                        <div class="dia-contenedor">
                                            
                                        </div>
                                        <div class="dia-contenedor">
                                            
                                        </div>
                                        <div class="dia-contenedor">
                                            
                                        </div>
                                        <div class="dia-contenedor">
                                            
                                        </div>
                                        <div class="dia-contenedor">
                                            
                                        </div>
                                        <div class="dia-contenedor">
                                            
                                        </div>
                                    </div>
                                    <div class="dias">
                                        <div class="dia-contenedor">
                                            Cena
                                        </div>
                                        <div class="dia-contenedor">
                                            
                                        </div>
                                        <div class="dia-contenedor">
                                            
                                        </div>
                                        <div class="dia-contenedor">
                                            
                                        </div>
                                        <div class="dia-contenedor">
                                            
                                        </div>
                                        <div class="dia-contenedor">
                                            
                                        </div>
                                        <div class="dia-contenedor">
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            </Week>
                        </div>
                    </div>
                </div>

            </div>


            </div>
        </PlanCSS>

    )

}


const Week = styled.div `
    body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f2f2f2;
}

.container {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.recetas {
    width: 200px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.receta {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    cursor: grab;
    border-radius: 5px;
}

.agenda {
    flex: 1;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.semana {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    
}

.dias {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 10px;
    
}

.dia {
    height: 100px;
    text-align: center;
    line-height: 100px;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: #f9f9f9;
    border: 1px solid transparent;
    transition: all 0.3s ease;
}



.dia-contenedor {
    border: 1px dashed #ccc;
    padding: 5px;
    border-radius: 5px;
    min-height: 100px;
}


`
