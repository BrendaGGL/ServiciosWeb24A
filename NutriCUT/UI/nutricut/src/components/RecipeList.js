import { useEffect, useState } from "react";
import { getRecipes } from "../api/Recipe.api";
import {FormRecipe} from "../components/RecipeForm"

export function RecipeList(){

    const [recipes, setRecipes] = useState([])

    useEffect(() =>{

        async function loadRecipes(){
            const res =await getRecipes()
            setRecipes(res.data)
        }
        loadRecipes()

    }, []);

        return(
        
            <body>
                <div>
                    <div class="text-center">
                    <h1 class="mt-5">Recetas</h1>
                    </div>
                    <br/><br/>
                    <div className="actions">
                        <FormRecipe/>
                    </div>
                    <div>

                    </div>
                    <br/>
                    <div class="table">
                        <div class="table-header">
                            <div class="header__item"><a id="name" class="filter__link" href="#">ID</a></div>
                            <div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Titulo</a></div>
                            <div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Draws</a></div>
                        </div>
                        <div class="table-content">	
                            {recipes.map (recipe => (
                                <div class="table-row" key={recipe.id}>
                                    <div class="table-data">{recipe.id}</div>
                                    <div class="table-data">{recipe.title}</div>
                                    <div class="table-data">{recipe.image}</div>
                                </div>
                            ))}
                        </div>	
	                </div>
                    
                </div>
            </body>
                
            );

}