import React, { useState } from 'react'
import Ingredients from './ingredients'

function Recipes({ recipe }) {

  /* 
 "\n\nScrambled Egg Breakfast Skillet\n\nIngredients:\n- 2 eggs
 \n- 1/2 onion, diced\n- 1 potato, diced\n- 4 slices of bacon, 
 cooked and crumbled\n\nInstructions:\n1. Heat a skillet over 
 medium-high heat.\n2. Add the diced onion and potato to the skillet 
 and cook until the vegetables are tender, about 5 minutes.\n3. Crack 
 the eggs into a bowl and whisk until combined.\n4. Pour the eggs into
  the skillet and stir to combine with the vegetables.\n5. Cook until the"
*/

  // const [backendData, setBackendData] = useState('');

  // useEffect(() => {
  //   fetch('/recipe')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //     })
  // })


  function redirectToEdit() {
    console.log('Redirecting to edit page!');
    // window.location.href = '/edit';
  }

  function saveToServer() {
    console.log('Saving this recipe to server now!');
  }

  let start = 'Ingredients:';
  let end = 'Instructions:';
  let name = recipe.substring(0, recipe.indexOf(start));
  let ingredients = recipe.substring(recipe.indexOf(start) + start.length, recipe.indexOf(end));
  let instructions = recipe.substring(recipe.indexOf(end) + end.length);

  return (
    <div>
      <div id="recipe">
        {<p>{name}</p>}
        {ingredients ? (<p>Ingredients: </p>) : (null)}
        {ingredients.split(/\n/).map((line, index) => <p id={index} key={index}>{line}</p>)}
        {instructions ? (<p>Instructions:</p>) : (null)}
        {instructions.split(/\n/).map((line, index) => <p id={index} key={index}>{line}</p>)}
      </div>
      {name ? (<div><button onClick={redirectToEdit}>Edit Recipe</button><button onClick={saveToServer}>Save Recipe</button></div>) : (null)}
    </div >
  )
}



export default Recipes
