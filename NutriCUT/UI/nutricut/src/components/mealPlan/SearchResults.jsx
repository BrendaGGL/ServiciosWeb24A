import React, { useState } from "react";
import styled from "styled-components";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

export function SearchResults({ results }) {







    return (

        
                <div>

                
                <ul>
                    {results.map((result) => (

                        <Card>
                            <p>{result.title}</p>
                            <figure className="hover-menu">
                                <img src={result.image} alt={result.title} />
                                <div>
                                <a href={'/recipe/'+result.id}  rel="noopener" target="_blank">Ver</a>
                                <button > Añadir</button>
                                </div>
                            </figure>

                        </Card>
                    ))}
                </ul>
                
            </div>
    );
    }

    const Card = styled.div `


@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    .hover-menu {
        min-height:  10rem;
        min-width: 12rem;
        border-radius: 2rem;
        overflow: hidden;
        position: relative;
}



.hover-menu img {
    border-radius: 5rem;
        position: absolute;
        left: 0;
        width: 80%;
        height: 70%;
        object-fit: cover;
}

p{
        position: relative;
        z-index: 10;
        left: 45%;
        bottom: 0%;
        transform: translate(-50%, 40%);
        color: white;
        width: 100%;
        text-align: center;
        font-family: 'Roboto';
        font-weight: 300;
        font-size: 1rem;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

.hover-menu div {
    border-radius: 3rem;
    position: absolute; 
    top: 0; 
    left: -180px; 
    width: 175px;
    height: 70%;
    padding: 8px 4px; 
    background: transparent; 
    transition: 0.3s ease-in-out;
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
}

.hover-menu div a {
    display: block; 
    line-height: 2; 
    color: #fff; 
    font-family: arial, sans-serif;
    text-decoration: none; 
    opacity: 0.8; 
    padding: 2px 60px; 
    position: relative; 
    transition: 0.3s ease-in-out; 
}

.hover-menu div button{
  
  background: none!important;
  border: none;
  padding: 0!important;
  font-family: arial, sans-serif;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

}

.hover-menu div button:hover {
    text-decoration: underline; 
}


.hover-menu div a:hover {
    text-decoration: underline; 
}

.hover-menu:hover img {
    opacity: 0.5; 
    right: -120px; 
}

.hover-menu:hover div {
    left: 0; 
    opacity: 1; 
}


`