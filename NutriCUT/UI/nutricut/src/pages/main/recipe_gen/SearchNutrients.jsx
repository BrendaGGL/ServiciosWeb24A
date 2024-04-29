import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Card, Grid } from '../../../components/styled/Grid.style'
import {Link} from 'react-router-dom'

export function SearchNutrients() {

    const [searchedRecipes, setSearched] = useState([]);
    let params = useParams();
    const getSearched = async (n1) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${process.env.REACT_APP_API_URL}&minCarbs=${n1}&number=5`)
        const recipes = await data.json();
        setSearched(recipes.results)

        };
    useEffect(() =>{
        getSearched(params.search);
    },[params.search])

    return (
        <Grid>
            {searchedRecipes.map((item) =>{
                return(
                    <Card key={item.id}>
                        <Link to={'/recipe/'+item.id}>
                        <img src={item.image} alt=""/>
                        <h4>{item.title}</h4>
                        </Link>
                    </Card>
                );
            })}
        </Grid>
    );
}
