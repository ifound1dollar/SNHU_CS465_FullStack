// var fs = require('fs');
// var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));   //REMOVE SOON

const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}

/* GET travel view */
const travel = async function(req, res, next) {
    //console.log('TRAVEL CONTROLLER BEGIN');
    await fetch(tripsEndpoint, options)
        .then(res => res.json())                        //First, convert to JSON
        .then(json => {                                 //Then, render
            //console.log(json);

            //Do error checking here, for wrong data type (not array of JSON) OR empty JSON array.
            let message = null;
            if (!(json instanceof Array)) {
                message = 'API lookup error';
                json = [];  //Make empty JSON array to prevent exceptions
            } else if (!json.length) {
                message = 'No trips exist in the database!';
            }

            //Finally, render verified correct data.
            res.render('travel', { title: 'Travlr Getaways', trips: json });
        })
        .catch(e => res.status(500).send(e.message));   //Finally, catch any error with status code 500
    //console.log('TRAVEL CONTROLLER AFTER RENDER CALL');
};

module.exports = {
    travel
}