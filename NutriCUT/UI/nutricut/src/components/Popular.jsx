import { useEffect, useState } from "react";
import { Wrapper } from "./styled/Wrapper.style";
import { Card, Gradient } from "./styled/Card.style";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'

export function Popular() {
    const [trending, setTrending]  = useState([])

    useEffect(() => {
        getTrending();
    }, [])

    const getTrending = async () => {

        const check = localStorage.getItem('trending');

        if(check){
            setTrending(JSON.parse(check));
        }else{
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_URL}&number=10`);
        
        const data = await api.json();

        localStorage.setItem('trending', JSON.stringify(data.recipes))
        setTrending(data.recipes)
            }
    }

    return (
        <div>
            <Wrapper>
                Trending Recipes
                <Splide options={{
                    perPage: 5,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: "5rem"
                }}>
                    {trending.map((recipe) => {
                    return(
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link to={'/recipe/'+recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title}/>
                                    <Gradient/>
                                    </Link>
                                </Card>
                            </SplideSlide> 
                        );
                    })}
                </Splide>
            </Wrapper>
        </div>
    );
}
