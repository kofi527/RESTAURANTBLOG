
const express = require('express');
const router = express.Router();
const recipecontroller = require('../../controllers/recipecontroller');


/**
 * App routes for recipe management 
 */
router.get('/', recipecontroller.homepage); // Get all recipes


module.exports = router;
