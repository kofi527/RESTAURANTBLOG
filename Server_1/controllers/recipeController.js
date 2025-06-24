require('../models/database');
const category = require('../models/Category');




/**
 * GET/
 * Homepage
 */

exports.homepage = async(req, res) => {


  try { 
  // Fetch categories from the database
  const limitNumber = 5; // Limit the number of categories to fetch
  const categories = await category.find().limit(limitNumber).exec();


  res.render('layouts/index', {    title: 'Recipe Application', categories });
} catch (error) {
  console.error('Error rendering homepage:', error);
  res.status(500).send({message: error.message || "Error occured while rendering the homepage"});
  }
}


/**how to connect data  to the  frontend 




/**sample data for categories 
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
      },

    ]

   );
  } catch (error) {
    console.log('Error inserting categories:', error);
  }
}
*/ 
 // Uncomment this line to insert sample data into the database