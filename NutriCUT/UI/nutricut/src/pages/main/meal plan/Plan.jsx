import {useState, useEffect} from 'react'
import { Navigation } from '../../../components/Navigation';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Plan() {

    const UserAPI = localStorage.getItem('userAPI');
    const hash = localStorage.getItem('hash');
    const [planInfo, setPlan] = useState([]);
    let params = useParams();

    const getPlan = async (id) => {
        const data = await fetch(`https://api.spoonacular.com/mealplanner/${UserAPI}/templates/${id}?hash=${hash}&apiKey=${process.env.REACT_APP_API_URL}`)
        const plan = await data.json();
        setPlan(plan.days);
        console.log(plan.days);

        };

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
        <TableCSS>
        <h3 className='text-center'>Plan: {params.name}</h3>
          <div class="agenda">
            <div class="semana">
                <div class="dia">Lunes</div>
                <div class="dia">Martes</div>
                <div class="dia">Miércoles</div>
                <div class="dia">Jueves</div>
                <div class="dia">Viernes</div>
                <div class="dia">Sábado</div>
                <div class="dia">Domingo</div>
            </div>
            <div className='dias'>
            {planInfo.map(recipe =>(    
                        <div className='dia-contenedor' key={recipe}>
                        <div className="dia-contenedor">{recipe.items[0].value.title}<br/> <a href={'/recipe/'+recipe.items[0].id}  rel="noopener" target="_blank">Ver</a></div>
                        <div className="dia-contenedor">{recipe.items[1].value.title}<br/> <a href={'/recipe/'+recipe.items[0].id}  rel="noopener" target="_blank">Ver</a></div>
                        <div className="dia-contenedor">{recipe.items[2].value.title}<br/> <a href={'/recipe/'+recipe.items[0].id}  rel="noopener" target="_blank">Ver</a> </div>
                        </div>
                    ))}
                    </div>
            
        </div>
        </TableCSS>
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
                        <td className="text-left">{"Porciones: " + recipe.items[0].value.servings}</td>
                        <td className="text-left">{"Porciones: " + recipe.items[1].value.servings}</td>
                        <td className="text-left">{"Porciones: " + recipe.items[2].value.servings}</td>
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

container {
    display: flex;
    max-width: 1200px;
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
    margin-bottom:20px;
    margin-left: 0px;
}

.dias {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 1px;
}

.dia {
    height: 80px;
    text-align: center;
    line-height: 100px;
    box-sizing: border-box;
    border-radius: 1px;
    background-color: #f9f9f9;
    border: 10px solid transparent;
    transition: all 0.3s ease;
}


.dia-contenedor {
    border: 1px dashed #ccc;
    padding: 5px;
    border-radius: 5px;
    min-height: 50px;
}

.dia-contenedor:hover{
  border: 1px  #3e94ec;
  border-radius: 5px;
  cursor: pointer;
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