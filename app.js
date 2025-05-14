const express = require('express');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3000;

// for database connection
require('dotenv').config();