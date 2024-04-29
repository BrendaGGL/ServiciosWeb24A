import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Card, Grid } from '../../../components/styled/Grid.style'


export function Cousine() {

    const [cuisine, setCuisine] = useState([])
    let params = useParams();


    const getRecipes = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_URL}&cuisine=${name}`)
        const recipes = await data.json();
        setCuisine(recipes.results)

    };

    useEffect (() =>{ 
        getRecipes(params.type)
        console.log(params.type)
    },[params.type])

    return (
        <Grid>
            {cuisine.map((item) => {
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
