const express = require('express');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');


const app = express();
const PORT = process.env.PORT || 3000;

// for database connection
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');
app.set('view engine', 'ejs');

const routes = require('./Server_1/routes_1/recipe_Routes.js')
app.use('/', routes);

app.listen(PORT, ()=> console.log(`Server_1 is running on port ${PORT}`));