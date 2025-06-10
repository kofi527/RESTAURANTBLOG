require('../models/database');
const category = require('../models/Category');




/**
 * GET/
 * Homepage
 */

exports.homepage = async(req, res) => {
  res.render('layouts/index', {    title: 'Recipe Application' });
}

async function insertCategorydata(){
  try {
   await category.insertMany(
    [
      {
        name: 'Breakfast',
        image: 'breakfast.jpg'
      },
      {
        name: 'Lunch',
        image: 'lunch.jpg'
      },
      {
        name: 'Dinner',
        image: 'dinner.jpg'
      },
      {
        name: 'Snacks',
        image: 'snacks.jpg'
      },
      
      {
        name: 'Desserts',
        image: 'desserts.jpg'
      },
      {
        name: 'Beverages',
        image: 'beverages.jpg'
      }

    ]

   );
  } catch (error) {
    console.log('Error inserting categories:', error);
  }
}

insertCategorydata();