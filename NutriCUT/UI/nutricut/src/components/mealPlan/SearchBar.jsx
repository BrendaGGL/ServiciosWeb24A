import React, { useState } from "react";


export function SearchBarx({ onSearchResults }) {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchedRecipes, setSearched] = useState([]);


    const handleSearch = (e) => {

    e.preventDefault();

    
    const getSearched = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_URL}&query=${searchTerm}`)
        const recipes = await data.json();
        setSearched(recipes.results)
        
        };
    
    getSearched();
    onSearchResults(searchedRecipes);
    console.log(searchedRecipes);

    };


    return (

    <form onSubmit={handleSearch}>

        <input

        type="text"

        value={searchTerm}

        onChange={(e) => setSearchTerm(e.target.value)}

        />
        <div className="div text-center">
            <button className="btn btn-primary"type="submit">Buscar</button>
        </div>
        

    </form>

    );

}

