import {useState, useEffect} from 'react'
import { Navigation } from '../../../components/Navigation';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import {RecipeImage} from '../../../components/mealPlan/recipeImage'


function Plan() {

    const UserAPI = localStorage.getItem('userAPI');
    const hash = localStorage.getItem('hash');
    const [planInfo, setPlan] = useState([]);
    const [imageUrl, setImageUrl] = useState("");
    let params = useParams();

    const getPlan = async (id) => {
        const data = await fetch(`https://api.spoonacular.com/mealplanner/${UserAPI}/templates/${id}?hash=${hash}&apiKey=${process.env.REACT_APP_API_URL}`)
        const plan = await data.json();
        setPlan(plan.days);
        console.log(plan.days);

        };

    const getImages = async (meal)=>{
      fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=cb1c464d94f142c08b156c5beddade8b&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
    }


    useEffect(() => {
        if(localStorage.getItem('jwt') === null){                   
            window.location.href = '/'
        }else{



            getPlan(params.id);
        }

        }, [params.id])

    
    if(planInfo.length > 1){




      return <div>
        <Navigation/>


        <div className="container-fluid">
        <h3 className='text-center'>Plan: {params.name}</h3>
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
                              <div className="dias">
                                <div class="dia-contenedor">Lunes</div>
                                {planInfo[0].items.map(recipe =>(    
                                  <div className='dia-contenedor' key={recipe.value}>
                                    <RecipeImage id={recipe.value.id} />
                                      <h3>{recipe.value.title}</h3>
                                      <div className="prices">
                                      <a href={'/recipe/'+recipe.value.id}  rel="noopener" target="_blank" className="btn-2">Ver receta</a>
                                      </div>
                                  </div>
                              ))}
                              </div>
                              <div className="dias">
                                <div class="dia-contenedor">Martes</div>
                                {planInfo[1].items.map(recipe =>(    
                                  <div className='dia-contenedor' key={recipe.value}>
                                  <RecipeImage id={recipe.value.id} />  
                                  <h3>{recipe.value.title}</h3>
                                      <div className="prices">
                                      <a href={'/recipe/'+recipe.value.id}  rel="noopener" target="_blank" className="btn-2">Ver receta</a>
                                      </div>
                                  </div>
                              ))}
                              
                              </div>

                              <div className="dias">
                                <div class="dia-contenedor">Miercoles</div>
                                {planInfo[2].items.map(recipe =>(    
                                  <div className='dia-contenedor' key={recipe.value}>
                                    <RecipeImage id={recipe.value.id} />
                                    <h3>{recipe.value.title}</h3>
                                      <div className="prices">
                                      <a href={'/recipe/'+recipe.value.id}  rel="noopener" target="_blank" className="btn-2">Ver receta</a>
                                      </div>
                                  </div>
                              ))}
                              
                              </div>

                              <div className="dias">
                                <div class="dia-contenedor">Jueves</div>
                                {planInfo[3].items.map(recipe =>(    
                                  <div className='dia-contenedor' key={recipe.value}>
                                    <RecipeImage id={recipe.value.id} />
                                    <h3>{recipe.value.title}</h3>
                                      <div className="prices">
                                      <a href={'/recipe/'+recipe.value.id}  rel="noopener" target="_blank" className="btn-2">Ver receta</a>
                                      </div>
                                  </div>
                              ))}
                              
                              </div>

                              <div className="dias">
                                <div class="dia-contenedor">Viernes</div>
                                {planInfo[4].items.map(recipe =>(    
                                  <div className='dia-contenedor' key={recipe.value}>
                                    <RecipeImage id={recipe.value.id} />
                                    <h3>{recipe.value.title}</h3>
                                      <div className="prices">
                                      <a href={'/recipe/'+recipe.value.id}  rel="noopener" target="_blank" className="btn-2">Ver receta</a>
                                      </div>
                                  </div>
                              ))}
                              
                              </div>

                              <div className="dias">
                                <div class="dia-contenedor">Sabado</div>
                                {planInfo[5].items.map(recipe =>(    
                                  <div className='dia-contenedor' key={recipe.value}>
                                    <RecipeImage id={recipe.value.id} />
                                    <h3>{recipe.value.title}</h3>
                                      <div className="prices">
                                      <a href={'/recipe/'+recipe.value.id}  rel="noopener" target="_blank" className="btn-2">Ver receta</a>
                                      </div>
                                  </div>
                              ))}
                              
                              </div>

                              <div className="dias">
                                <div class="dia-contenedor">Domingo</div>
                                {planInfo[6].items.map(recipe =>(    
                                  <div className='dia-contenedor' key={recipe.value}>
                                    <RecipeImage id={recipe.value.id} />
                                    <h3>{recipe.value.title}</h3>
                                      <div className="prices">
                                      <a href={'/recipe/'+recipe.value.id}  rel="noopener" target="_blank" className="btn-2">Ver receta</a>
                                      </div>
                                  </div>
                              ))}
                              
                              </div>

                              
                            </div>
                          </div>
                          </Week>
                            
                            
                            
                        </div>
                    </div>
                </div>

            </div>
    }


    return (
        <div>
            <Navigation/>
            <TableCSS>

            

            <div className="table-title">
                <h3 className='text-center'>Plan: {params.name}</h3>
                </div>
                <table className="table-fill">
                <thead>
                <tr>
                <th className="text-left">Desayuno</th>
                <th className="text-left">Comida</th>
                <th className="text-left">Cena</th>
                
                </tr>
                </thead>
                <tbody className="table-hover">
                {planInfo.map(recipe =>(
                        <tr key={recipe.items}>
                        <td className="text-left">{recipe.items[0].value.title}</td>
                        <td className="text-left">{recipe.items[1].value.title}</td>
                        <td className="text-left">{recipe.items[2].value.title}</td>
                        </tr>
                    ))} 
                </tbody>
                <tbody className="table-hover">
                {planInfo.map(recipe =>(
                        <tr key={recipe.items}>
                        <td className="text-left">{"Porciones por receta: " + recipe.items[0].value.servings}</td>
                        <td className="text-left">{"Porciones por receta: " + recipe.items[1].value.servings}</td>
                        <td className="text-left">{"Porciones por receta: " + recipe.items[2].value.servings}</td>
                        </tr>
                    ))} 
                </tbody>
                <tbody>
                {planInfo.map(recipe =>(
                        <tr key={recipe.items}>
                        <td> <a href={'/recipe/'+recipe.items[0].value.id}  rel="noopener" target="_blank" className="btn-2">Ver receta</a> </td>
                        <td> <a href={'/recipe/'+recipe.items[1].value.id}  rel="noopener" target="_blank" className="btn-2">Ver receta</a> </td>
                        <td> <a href={'/recipe/'+recipe.items[2].value.id}  rel="noopener" target="_blank" className="btn-2">Ver receta</a> </td>
                        </tr>
                    ))} 
                </tbody>
                <tbody>
                      {planInfo.map((recipe) => {
                        return <tr key={recipe.items}>
                        <><><td> <RecipeImage id={recipe.items[0].value.id} /> </td><td> <RecipeImage id={recipe.items[1].value.id} /> </td></><td> <RecipeImage id={recipe.items[2].value.id} /> </td></>
                        </tr>    

              })}
                </tbody>
                
            </table>
            </TableCSS>
        </div>
    )   
}


export default Plan

const TableCSS = styled.div `

    

@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100);

.btn-2
{
    display: inline-block;
    background-color: #ffb534;
    font-size: 14px;
    padding: 7px 15px;
    color: #fbfcff;
    border-radius: 10px;
}

body {
  background-color: #3e94ec;
  font-family: "Roboto", helvetica, arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-rendering: optimizeLegibility;
}


div.table-title {
   display: block;
  margin: auto;
  max-width: 600px;
  padding:5px;
  width: 100%;
}

.table-title h3 {
   color: black;
   font-size: 30px;
   font-weight: 400;
   font-style:normal;
   font-family: "Roboto", helvetica, arial, sans-serif;
   text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
   text-transform:uppercase;
}


/*** Table Styles **/

.table-fill {
  background: white;
  border-radius:3px;
  border-collapse: collapse;
  height: 320px;
  margin: auto;
  max-width: 600px;
  padding:5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
}
 
th {
  color:#D5DDE5;;
  background:#1b1e24;
  border-bottom:4px solid #9ea7af;
  border-right: 1px solid #343a45;
  font-size:23px;
  font-weight: 100;
  padding:24px;
  text-align:left;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  vertical-align:middle;
}

th:first-child {
  border-top-left-radius:3px;
}
 
th:last-child {
  border-top-right-radius:3px;
  border-right:none;
}
  

 
tr:first-child {
  border-top:none;
}

tr:last-child {
  border-bottom:none;
}
 
tr:nth-child(odd) td {
  background:#EBEBEB;
}
 
tr:last-child td:first-child {
  border-bottom-left-radius:3px;
}
 
tr:last-child td:last-child {
  border-bottom-right-radius:3px;
}
 
td {
  background:#FFFFFF;
  padding:20px;
  text-align:left;
  vertical-align:middle;
  font-weight:300;
  font-size:18px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #C1C3D1;

  img{
    height: 200px;
    width: 200px;
    border-radius: 25px 25px 0 0;
  }
}

td:last-child {
  border-right: 0px;
}

th.text-left {
  text-align: left;
}

th.text-center {
  text-align: center;
}

th.text-right {
  text-align: right;
}

td.text-left {
  text-align: left;
}

td.text-center {
  text-align: center;
}

td.text-right {
  text-align: right;
}




`


const Week = styled.div `

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f2f2f2;
}

.container {
    display: flex;
    max-width: 1800px;
    margin: 0 auto;
    padding: 20px;
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
    justify-content: space-around;
    margin-bottom: 20px;
    
}

.dias {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    
}

.dia {
    height: 50px;
    text-align: center;
    line-height: 50px;
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
    width: 300px;

    img{
    border-radius: 10px 10px 10px 10px;
    width: 295px;
    height: 300px;
    }

    h3{
    font-size: 1rem;
    }



}


.prices
{
    padding: 0 25px 10px 25px;
    display: flex;
    justify-content: space-between;
}

.prices
{
    color: #ffb534;
    font-size: 18px;
    font-weight: 600;
}

.btn-2
{
    display: inline-block;
    background-color: #ffb534;
    font-size: 14px;
    padding: 7px 15px;
    color: #fbfcff;
    border-radius: 10px;
}







`