import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Card, Grid } from '../../components/styled/Grid.style'

export function Search() {

    

    const [searchedRecipes, setSearched] = useState([]);
    let params = useParams();
    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_URL}&query=${name}`)
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
                        <img src={item.image} alt=""/>
                        <h4>{item.title}</h4>
                    </Card>
                );
            })}
        </Grid>
    );
}
