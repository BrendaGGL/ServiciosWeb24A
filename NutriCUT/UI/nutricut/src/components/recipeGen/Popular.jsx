import { useEffect, useState } from "react";
import styled from "styled-components";
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
                <br/><br/>

            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: "3rem"
            }}>
                {trending.map((recipe) => {
                return(
                        <SplideSlide key={recipe.id}>
                            <Link to={'/recipe/'+recipe.id}>
                            <div className="general-txt" key={recipe.id}> 
                                <img src={recipe.image} alt=""/>
                                <h3>{recipe.title}</h3>
                                <div className="prices">
                                    <a href={'/recipe/'+recipe.id}  rel="noopener" target="_blank" className="btn-2">Ver receta</a>
                                </div>
                            </div>
                            </Link>
                        </SplideSlide> 
                    );
                })}
            </Splide>
        </Wrapper>
        </div>
    );
}

const Wrapper = styled.div `

h2
{
    font-size: 40px;
    color: #292933;
    margin-bottom: 30px;
}


span
{
    color: #65B741;
}
.menu-pl
{
    padding: 0 0 100px 0;
}

.general-content
{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 35px;
}

.general-txt
{
    border-radius: 25px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding-bottom: 35px;
}


.general-txt img
{
    border-radius: 25px 25px 0 0;
    width: 100%;
    height: 250px;
}

.general-txt h3
{
    font-size: 18px;
    color: #292933;
    padding: 25px 25px 10px 25px;
}

.general-txt p
{
    font-size: 16px;
    color: #3a3a48;
    padding: 0 25px 20px 25px;
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