const { Pool } = require('pg');

const PG_URI = 'postgres://pfgbgtjg:Fd5b_U0eEGYta2m0g06z-jUNGI2_06v_@fanny.db.elephantsql.com/pfgbgtjg';

const pool = new Pool({
  connectionString: PG_URI
})

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}