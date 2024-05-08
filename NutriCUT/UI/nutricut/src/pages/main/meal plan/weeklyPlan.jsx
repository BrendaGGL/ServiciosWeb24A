import React from 'react'
import { useState, useEffect } from 'react'
import { Navigation } from '../../../components/Navigation'
import { PlanCSS, Week } from '../../../components/styled/meal_plan/agenda.style';
import { WeekList } from '../../../components/mealPlan/week/SearchWeek';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function WeeklyPlan() {

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

    function closeModal() {
      setModalIsOpen(false);
      window.location.href = '/day_plan'
    }

  async function getMealData() {
  await fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_URL}&timeFrame=week&targetCalories=${calories}`
  )
        .then((response) => response.json())
        .then((data) => {
        setMealData(data.week);
        console.log(data.week)
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

  function savePlan(){

    const mealPlanData = {
      "name": name,
      "items": [
          {
              "day": 1,
              "slot": 1,
              "position": 0,
              "type": "RECIPE",
              "value": {
                  "id": mealData.monday.meals[0].id,
                  "servings": mealData.monday.meals[0].servings,
                  "title": mealData.monday.meals[0].title,
                  "imageType": "jpg"
              }
          },
          {
            "day": 1,
            "slot": 2,
            "position": 0,
            "type": "RECIPE",
            "value": {
                "id": mealData.monday.meals[1].id,
                "servings": mealData.monday.meals[1].servings,
                "title": mealData.monday.meals[1].title,
                "imageType": "jpg"
            }
        },
        {
          "day": 1,
          "slot": 3,
          "position": 0,
          "type": "RECIPE",
          "value": {
              "id": mealData.monday.meals[2].id,
              "servings": mealData.monday.meals[2].servings,
              "title": mealData.monday.meals[2].title,
              "imageType": "jpg"
          }
      },
      {
        "day": 2,
        "slot": 1,
        "position": 0,
        "type": "RECIPE",
        "value": {
            "id": mealData.tuesday.meals[0].id,
            "servings": mealData.tuesday.meals[0].servings,
            "title": mealData.tuesday.meals[0].title,
            "imageType": "jpg"
        }
    },
    {
      "day": 2,
      "slot": 2,
      "position": 0,
      "type": "RECIPE",
      "value": {
          "id": mealData.tuesday.meals[1].id,
          "servings": mealData.tuesday.meals[1].servings,
          "title": mealData.tuesday.meals[1].title,
          "imageType": "jpg"
      }
    },
    {
      "day": 2,
      "slot": 3,
      "position": 0,
      "type": "RECIPE",
      "value": {
        "id": mealData.tuesday.meals[2].id,
        "servings": mealData.tuesday.meals[2].servings,
        "title": mealData.tuesday.meals[2].title,
        "imageType": "jpg"
      }
    },
    {
      "day": 3,
      "slot": 1,
      "position": 0,
      "type": "RECIPE",
      "value": {
          "id": mealData.wednesday.meals[0].id,
          "servings": mealData.wednesday.meals[0].servings,
          "title": mealData.wednesday.meals[0].title,
          "imageType": "jpg"
      }
    },
    {
      "day": 3,
      "slot": 2,
      "position": 0,
      "type": "RECIPE",
      "value": {
          "id": mealData.wednesday.meals[1].id,
          "servings": mealData.wednesday.meals[1].servings,
          "title": mealData.wednesday.meals[1].title,
          "imageType": "jpg"
      }
    },
    {
      "day": 3,
      "slot": 3,
      "position": 0,
      "type": "RECIPE",
      "value": {
          "id": mealData.wednesday.meals[2].id,
          "servings": mealData.wednesday.meals[2].servings,
          "title": mealData.wednesday.meals[2].title,
          "imageType": "jpg"
      }
    },
    {
      "day": 4,
      "slot": 1,
      "position": 0,
      "type": "RECIPE",
      "value": {
          "id": mealData.thursday.meals[0].id,
          "servings": mealData.thursday.meals[0].servings,
          "title": mealData.thursday.meals[0].title,
          "imageType": "jpg"
      }
    },
    {
      "day": 4,
      "slot": 2,
      "position": 0,
      "type": "RECIPE",
      "value": {
          "id": mealData.thursday.meals[1].id,
          "servings": mealData.thursday.meals[1].servings,
          "title": mealData.thursday.meals[1].title,
          "imageType": "jpg"
      }
    },
    {
      "day": 4,
      "slot": 3,
      "position": 0,
      "type": "RECIPE",
      "value": {
          "id": mealData.thursday.meals[2].id,
          "servings": mealData.thursday.meals[2].servings,
          "title": mealData.thursday.meals[2].title,
          "imageType": "jpg"
      }
    },
    {
      "day": 5,
      "slot": 1,
      "position": 0,
      "type": "RECIPE",
      "value": {
          "id": mealData.friday.meals[0].id,
          "servings": mealData.friday.meals[0].servings,
          "title": mealData.friday.meals[0].title,
          "imageType": "jpg"
      }
    },
    {
      "day": 5,
      "slot": 2,
      "position": 0,
      "type": "RECIPE",
      "value": {
          "id": mealData.friday.meals[1].id,
          "servings": mealData.friday.meals[1].servings,
          "title": mealData.friday.meals[1].title,
          "imageType": "jpg"
      }
    },
    {
      "day": 5,
      "slot": 3,
      "position": 0,
      "type": "RECIPE",
      "value": {
          "id": mealData.friday.meals[2].id,
          "servings": mealData.friday.meals[2].servings,
          "title": mealData.friday.meals[2].title,
          "imageType": "jpg"
      }
    },
    {
      "day": 6,
      "slot": 1,
      "position": 0,
      "type": "RECIPE",
      "value": {
          "id": mealData.saturday.meals[0].id,
          "servings": mealData.saturday.meals[0].servings,
          "title": mealData.saturday.meals[0].title,
          "imageType": "jpg"
      }
    },
    {
      "day": 6,
      "slot": 2,
      "position": 0,
      "type": "RECIPE",
      "value": {
          "id": mealData.saturday.meals[1].id,
          "servings": mealData.saturday.meals[1].servings,
          "title": mealData.saturday.meals[1].title,
          "imageType": "jpg"
      }
    },
    {
      "day": 6,
      "slot": 3,
      "position": 0,
      "type": "RECIPE",
      "value": {
          "id": mealData.saturday.meals[2].id,
          "servings": mealData.saturday.meals[2].servings,
          "title": mealData.saturday.meals[2].title,
          "imageType": "jpg"
      }
    },
    {
      "day": 7,
      "slot": 1,
      "position": 0,
      "type": "RECIPE",
      "value": {
          "id": mealData.sunday.meals[0].id,
          "servings": mealData.sunday.meals[0].servings,
          "title": mealData.sunday.meals[0].title,
          "imageType": "jpg"
      }
    },
    {
      "day": 7,
      "slot": 2,
      "position": 0,
      "type": "RECIPE",
      "value": {
          "id": mealData.sunday.meals[1].id,
          "servings": mealData.sunday.meals[1].servings,
          "title": mealData.sunday.meals[1].title,
          "imageType": "jpg"
      }
    },
    {
      "day": 7,
      "slot": 3,
      "position": 0,
      "type": "RECIPE",
      "value": {
          "id": mealData.sunday.meals[2].id,
          "servings": mealData.sunday.meals[2].servings,
          "title": mealData.sunday.meals[2].title,
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
          console.log(response)
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
              console.log("Error")
          }
          else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
          }
          console.log(error.config);
      });


  }

  






  if(mealData){
    return  <><Navigation /><div>
    <PlanCSS>

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

    <div id="wrapper">
              <div id="sidebar-wrapper">
                  <ul className="sidebar-nav">
                    <h3>Plan Semanal</h3>
                    <br/><br/><br/>
                  <section className="controls">
                      <input
                      type="number"
                      value={calories}
                      placeholder="Calories (e.g. 2000)"
                      onChange={handleChange}
                      />
                      <button disabled={calories.trim() === ''} onClick={getMealData}>Generar Plan</button>
                      <input
                      type="text"
                      placeholder="Nombre del plan"
                      onChange={handleName}
                      value={name}
                      />
                      <button  disabled={name.trim() === ''} onClick={savePlan}>Guardar Plan</button>
                  </section> 

                  </ul>
              </div>

          <div id="page-content-wrapper">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-lg-12">
                        <Week>
                        <div className="container">
                          <div className="agenda">
                            <div className="semana">
                              <div className="dia">Día</div>
                              <div className="dia">Desayuno</div>
                              <div className="dia">Comida</div>
                              <div className="dia">Cena</div>
                            </div>
                            {mealData && <WeekList mealData={mealData} />}
                          </div>
                        </div>
                        </Week>
                          
                          
                          
                      </div>
                  </div>
              </div>

          </div>


          </div>
          </PlanCSS>
  </div></>
  }




  return (
    <><Navigation /><div>
      <PlanCSS>
      <div id="wrapper">
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                      <h3>Plan Semanal</h3>
                      <br/><br/><br/>
                    <section className="controls">
                        <input
                        type="number"
                        placeholder="Calories (e.g. 2000)"
                        onChange={handleChange}
                        value={calories}
                        />
                        <button disabled={calories.trim() === ''} onClick={getMealData}>Generar Plan</button>
                    </section> 

                    </ul>
                </div>

            <div id="page-content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                          <Week>
                          <div className="container">
                            <div className="agenda">
                              <div className="semana">
                                <div className="dia">Día</div>
                                <div className="dia">Desayuno</div>
                                <div className="dia">Comida</div>
                                <div className="dia">Cena</div>
                              </div>
                              {mealData && <WeekList mealData={mealData} />}
                            </div>
                          </div>
                          </Week>
                            
                            
                            
                        </div>
                    </div>
                </div>

            </div>


            </div>
            </PlanCSS>
    </div></>
    
  );
}


