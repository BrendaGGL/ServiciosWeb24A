import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Navigation } from '../../../components/Navigation';
import { FavCSS } from '../../../components/styled/User_Interface/favorite.style';
export function Search() {

    

    const [searchedRecipes, setSearched] = useState([]);
    let params = useParams();
    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_URL}&query=${name}&number=15`)
        const recipes = await data.json();
        setSearched(recipes.results)

        };
    useEffect(() =>{
        if(localStorage.getItem('jwt') === null){                   
            window.location.href = '/'
        }else{
            getSearched(params.search);
        }
        
    },[params.search])

    return (

        <div>
            <Navigation/>
            <FavCSS>

                <section className="menu-pl container">

                    <h2><span> Resultados</span> </h2>

                    <div className="general-content">

                        
                        {searchedRecipes.map((recipe) => {
                            return(
                                    <div className="general-txt" key={recipe.id}> 
                                            <img src={recipe.image} alt=""/>
                                            <h3>{recipe.title}</h3>
                                            <div className="prices">
                                                <a href={'/recipe/'+recipe.id}  rel="noopener" target="_blank" className="btn-2">Ver receta</a>
                                            </div>
                                    </div>
                                );
                            })}

                    </div>        
                </section>
            </FavCSS>

                


        </div>

        
    );
}
