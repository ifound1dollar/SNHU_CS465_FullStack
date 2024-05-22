const newsEndpoint = 'http://localhost:3000/api/news';
const tipsEndpoint = 'http://localhost:3000/api/tips';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}

/* GET news view */
const news = async function(req, res, next) {
    //console.log('NEWS CONTROLLER BEGIN');

    //FIRST, store tips JSON in variable from fetch.
    var tipsJson;
    await fetch(tipsEndpoint, options)
        .then(res => res.json())
        .then(json => {
            //Error checking.
            let message = null;
            if (!(json instanceof Array)) {
                message = 'API lookup error';
                json = [];
            } else if (!json.length) {
                message = 'No tips exist in the database!';
            }

            tipsJson = json;
        })
        .catch(err => res.status(500).send(e.message));

    //THEN, load news and finally render.
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
            res.render('news', { title: 'News - Travlr Getaways', news: json, tips: tipsJson });
        })
        .catch(e => res.status(500).send(e.message));   //Finally, catch any error with status code 500
    //console.log('TRAVEL CONTROLLER AFTER RENDER CALL');
};

module.exports = {
    news
}