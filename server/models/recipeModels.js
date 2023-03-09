// const { Pool } = require('pg');

// const PG_URI = 'postgres://pfgbgtjg:Fd5b_U0eEGYta2m0g06z-jUNGI2_06v_@fanny.db.elephantsql.com/pfgbgtjg';

// const pool = new Pool({
//   connectionString: PG_URI
// })

// module.exports = {
//   query: (text, params, callback) => {
//     console.log('executed query', text);
//     return pool.query(text, params, callback);
//   }
// }

const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://austinhoang14:austin95@cluster0.7adpryn.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'recipes'
}).then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const { Schema } = mongoose;

const recipeSchema = new Schema({
  name: String,
  ingredients: String,
  instructions: String,
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;