import React from 'react';
import style from './recipe.module.css';

const Recipe = ({key,title,calories,image,ingredients})=> {
    return (
        <div className= {style.recipe}>
            
            <h1 >{title}</h1>
            <img src= {image} alt = "" />
            <p> Calories: {calories}</p>
            <h4>Ingredients</h4>
           <ol>
               {ingredients.map((ing) => (
                   <li>{ing.text}</li>
               ))}

               
           </ol>
            
        </div>
    );

}
export default Recipe;