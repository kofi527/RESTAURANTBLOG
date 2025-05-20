const express = require('express');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3000;

// for database connection
require('dotenv').config();

app.use(expressLayouts.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');

const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes);

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));