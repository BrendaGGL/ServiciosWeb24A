import React, { useState, useEffect } from "react";
import image from "../../../static/images/Recipe.png"

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=cb1c464d94f142c08b156c5beddade8b&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);


  if (imageUrl){

    return <article> 
                <img src={imageUrl} alt=""/>
                <h3>{meal.title}</h3>
                <div className="prices">
                <a href={'/recipe/'+meal.id}  rel="noopener" target="_blank" className="btn-2">Ver receta</a>
                </div>
            </article> 
        
}else{
    setImageUrl(image);
    return <article> 
            
                <img src={imageUrl} alt=""/>
                <h3>{meal.title}</h3>
                <div className="prices">
                <a href={'/recipe/'+meal.id}  rel="noopener" target="_blank" className="btn-2">Ver receta</a>
                </div>
            </article> 

}



    
}