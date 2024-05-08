import {SearchBar} from "../../../components/recipeGen/SearchBar"
import { Navigation } from "../../../components/Navigation";
import { Generator } from "./Home";
import { useEffect } from "react";
export function Recipes() {


  useEffect(() => {
    if(localStorage.getItem('jwt') === null){                   
        window.location.href = '/'
    }
    }, [])

  return (
    
      <div>
        <Navigation/>
        <br/>
        
        <SearchBar/>
        <Generator></Generator>
      </div>
  );
}