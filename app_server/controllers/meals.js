// var fs = require('fs');
// var foods = JSON.parse(fs.readFileSync('./data/foods.json', 'utf8'));

const mealsEndpoint = 'http://localhost:3000/api/meals';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}

/* GET meals view */
const meals = async function(req, res, next) {
    //console.log('MEALS CONTROLLER BEGIN');
    await fetch(mealsEndpoint, options)
        .then(res => res.json())                        //First, convert to JSON
        .then(json => {                                 //Then, render
            //console.log(json);

            //Do error checking here, for wrong data type (not array of JSON) OR empty JSON array.
            let message = null;
            if (!(json instanceof Array)) {
                message = 'API lookup error';
                json = [];  //Make empty JSON array to prevent exceptions
            } else if (!json.length) {
                message = 'No meals exist in the database!';
            }

            //Finally, render verified correct data.
            res.render('meals', { title: 'Meals - Travlr Getaways', meals: json });
        })
        .catch(e => res.status(500).send(e.message));   //Finally, catch any error with status code 500
    //console.log('MEALS CONTROLLER AFTER RENDER CALL');
};

module.exports = {
    meals
}