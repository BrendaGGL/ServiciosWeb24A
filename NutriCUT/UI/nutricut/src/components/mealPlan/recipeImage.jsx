import React, { useState, useEffect } from "react";
import img from '../../static/images/Recipe.png'

export function RecipeImage({ id }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=cb1c464d94f142c08b156c5beddade8b&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
        console.log("Imagen Encontrada")
      })
      .catch(() => {
        console.log("error");
      });
  }, [id]);


  if (imageUrl){

    return <img src={imageUrl} alt=""/>


            
        
}else{
  setImageUrl(img)
    return <img src={imageUrl} alt=""/>

          

}

    
}