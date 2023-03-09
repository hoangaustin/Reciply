const express = require('express');
const recipeController = require('../controllers/recipeController');
const router = express.Router();

router.post('/recipe', recipeController.addRecipe, (req, res) => {
  res.status(200).json('recipe added!');
})

module.exports = router;