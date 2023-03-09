const express = require('express');
const path = require('path');
const app = express();

const recipeRouter = require('./routes/recipeRouter');
const PORT = 3000;


/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/recipe', (req, res) => {
  const API_KEY = 'sk-';

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
        // setRecipe(data.choices[0].text);
        return res.status(200).send(data.choices[0].text);
      });
  }
})

/**
 * handle requests for static files
 */
if (process.env.NODE_ENV === 'production') {
  app.use('/dist', express.static(path.join(__dirname, '../dist')));
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
  })
}



/**
 * define route handlers
 */
// app.use('/recipe', recipeRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

/**
 * express error handler
 */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});