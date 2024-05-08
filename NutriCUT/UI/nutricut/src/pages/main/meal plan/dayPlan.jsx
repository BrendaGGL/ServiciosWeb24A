import React, { useState, useEffect } from "react";
import { Navigation } from '../../../components/Navigation'
import MealList from "../../../components/mealPlan/daily/SerchDaily";
import { DayCSS } from "../../../components/styled/meal_plan/dayplan.style";
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";


export function Dayplan() {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState('');
    const[name, setName] = useState('');
    const [error, setError] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const user = localStorage.getItem('userAPI')
    const hash = localStorage.getItem('hash')


    useEffect(() => {
      if(localStorage.getItem('jwt') === null){                   
          window.location.href = '/'
      }
      }, [])

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

    
    function closeModal() {
      setModalIsOpen(false);
      window.location.href = '/day_plan'
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
        setModalIsOpen(true)
        
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

    if(mealData){
      return <div >
      <Navigation/>
      <DayCSS>
          
      <Modal show={modalIsOpen} onHide={closeModal}>
        <Modal.Header>
          <Modal.Title>Guardado</Modal.Title>
        </Modal.Header>
        <Modal.Body>El plan ha sido guardado con exito</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cerrar
          </Button>
          <Link to='/plan'>
          <Button variant="secondary">
            Ver
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>

      <div className="App">
        <section className="controls">
        <div className="row text-center">
        <div className="col-6">
            <input
              type="number"
              placeholder="Calories (e.g. 2000)"
              onChange={handleChange}
            />
            <button onClick={getMealData} disabled={calories.trim() === ''}>Generar Plan </button>
            

        </div>

        <div className="col-6">
          <div className="row">
            <input
                  type="text"
                  placeholder="Nombre del plan"
                  value={name}
                  onChange={handleName}
                />
          </div>
          <div className="row">
            <button  onClick={savePlan} disabled={name.trim() === ''}>  Guardar</button>
          </div>
          
              
          </div>
        </div>
        </section>
        
        
        

        {mealData && <MealList mealData={mealData} />}
      </div>
      </DayCSS>

      
  </div>
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
          value={calories}
          onChange={handleChange}
        />
        <button disabled={calories.trim() === ''} onClick={getMealData}>Generar Plan</button>
      
      </section>
      
      {mealData && <MealList mealData={mealData} />}
    </div>
            </DayCSS>

            
        </div>
    )
}

