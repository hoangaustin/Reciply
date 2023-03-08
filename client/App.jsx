import React, { useState } from "react";
import './styles.scss';

const App = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipe] = useState('');

  const API_KEY = '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';

  const API_BODY = {
    "model": "text-davinci-003",
    "prompt": "Write a short recipe based on these ingredients: " + ingredients,
    "temperature": 0.3,
    "max_tokens": 120,
    "top_p": 1.0,
    "frequency_penalty": 0.0,
    "presence_penalty": 0.0
  }

  const num = 0;

  async function callOpenAI() {
    console.log('Calling OpenAI API')
    await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + API_KEY,
      },
      body: JSON.stringify(API_BODY)
    })
      .then(res => res.json())
      .then(data => {
        setRecipe(data.choices[0].text);
      });
  }

  function redirectToEdit() {
    console.log('Redirecting to edit page!');
    // window.location.href = '/edit';
  }

  function saveToServer() {
    console.log('Saving this recipe to server now!')
  }

  console.log('recipe: ', recipe);

  return (
    <>
      <h1>Recipe Generator</h1>
      <div>
        <textarea
          placeholder="Enter ingredients here"
          onChange={(e) => setIngredients(e.target.value)}
          cols="50"
          rows="10"
        />
      </div>
      <div>
        <button onClick={callOpenAI}>Generate a Recipe!</button>
      </div>
      <div id="recipe">
        {
          recipe.split(/\n/).map((line, index) => <p id={index} key={index}>{line}</p>)
        }
      </div>
      <div>
      <button onClick={redirectToEdit}>Edit Recipe</button><button onClick={saveToServer}>Save Recipe</button>
      </div>
    </>
  )
};

export default App;