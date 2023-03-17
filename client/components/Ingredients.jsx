import React, { useState } from 'react'
import Recipes from './Recipes';

function Ingredients() {
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

  // console.log('recipe: ', recipe);

  function callBackend() {
    fetch('http://localhost:3000/recipe', {
      method: 'GET',
      mode: 'no-cors',
    })
      .then(res => res.json())
      .then(data => {
        console.log('data: ', data)
        return data;
      })
  }

  return (
    <div>
      <div>
        <textarea
          placeholder="Enter ingredients here"
          onChange={(e) => setIngredients(e.target.value)}
          cols="50"
          rows="10"
        />
      </div>
      <button onClick={callOpenAI}>Generate Recipe</button>
      <Recipes recipe={recipe} />
    </div>
  )
}

export default Ingredients; 