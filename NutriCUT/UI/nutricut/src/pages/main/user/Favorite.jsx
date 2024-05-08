import React from 'react'
import { Navigation } from '../../../components/Navigation'
import { FavCSS } from '../../../components/styled/User_Interface/favorite.style'
import { useState, useEffect } from 'react'
import axios from 'axios'


export function Favorite() {

    const [ids, setIds] = useState([]);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const id = localStorage.getItem('id')
  // Fetch IDs from Flask
    useEffect(() => {

        if(localStorage.getItem('jwt') === null){                   
            window.location.href = '/'
        }

    const request ={
        id: id
    }
    setIsLoading(true);
    axios.post('http://localhost:8001/api/user_liked',
            request ,{headers: 
            {'Content-Type': 'application/json'}})
            .then(response => {
                setIds(response.data);
                setIsLoading(false);
            })
        .catch(error => {
        console.error('Failed to fetch IDs:', error);
        setError(error);
        setIsLoading(false);
        });
    }, []);

   //Fetch data for each ID
    useEffect(() => {


        if(localStorage.getItem('jwt') === null){                   
            window.location.href = '/'
        }
    
    if (ids.length > 0) {
        setIsLoading(true);
        Promise.all(ids.map(id =>
        fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_URL}`)
            .then(response => response.json())
        ))
        .then(results => {
            setData(results);
            setIsLoading(false);
        })
        .catch(error => {
            console.error('Failed to fetch data:', error);
            setError(error);
            setIsLoading(false);
        });
        }
    }, [ids]);

    if (isLoading) return <div></div>;
    if (error){
        return <div>
            <Navigation/>
            <FavCSS>
                <h2><span> Favoritas</span> </h2>
                <div className="general-content">
                    <h2> Parece que aun no tienes favoritos</h2>
                </div>
                
            </FavCSS>

        </div> 
    }    




    return (
        <div>
        <Navigation/>
        <FavCSS>
        <section className="menu-pl container">

        <h2><span> Favoritas</span> </h2>

        <div className="general-content">

            
            {data.map((recipe) => {
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
    )
}

