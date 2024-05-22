// var fs = require('fs');
// var news = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));

const newsEndpoint = 'http://localhost:3000/api/news';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}

/* GET homepage */
const index = async function(req, res, next) {
    //console.log('TRAVEL CONTROLLER BEGIN');
    await fetch(newsEndpoint, options)
        .then(res => res.json())                        //First, convert to JSON
        .then(json => {                                 //Then, render
            //console.log(json);

            //Do error checking here, for wrong data type (not array of JSON) OR empty JSON array.
            let message = null;
            if (!(json instanceof Array)) {
                message = 'API lookup error';
                json = [];  //Make empty JSON array to prevent exceptions
            } else if (!json.length) {
                message = 'No news articles exist in the database!';
            }

            //Finally, render verified correct data.
            res.render('index', { title: 'Travlr Getaways', news: json });
        })
        .catch(e => res.status(500).send(e.message));   //Finally, catch any error with status code 500
    //console.log('TRAVEL CONTROLLER AFTER RENDER CALL');
};

module.exports = {
    index
}