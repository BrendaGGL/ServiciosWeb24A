import axios from 'axios'

export function getRecipes(){
    return axios.get('http://localhost:8000/api/recipes')
}

export function addRecipe(recipe){
    return ('http://localhost:8000/api/recipes',
    recipe ,{headers: 
    {'Content-Type': 'application/json'}});
}