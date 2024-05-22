const roomsEndpoint = 'http://localhost:3000/api/rooms';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}

/* GET rooms view */
const rooms = async function(req, res, next) {
    //console.log('ROOMS CONTROLLER BEGIN');
    await fetch(roomsEndpoint, options)
        .then(res => res.json())                        //First, convert to JSON
        .then(json => {                                 //Then, render
            //console.log(json);

            //Do error checking here, for wrong data type (not array of JSON) OR empty JSON array.
            let message = null;
            if (!(json instanceof Array)) {
                message = 'API lookup error';
                json = [];  //Make empty JSON array to prevent exceptions
            } else if (!json.length) {
                message = 'No rooms exist in the database!';
            }

            //Finally, render verified correct data.
            res.render('rooms', { title: 'Rooms - Travlr Getaways', rooms: json });
        })
        .catch(e => res.status(500).send(e.message));   //Finally, catch any error with status code 500
    //console.log('ROOMS CONTROLLER AFTER RENDER CALL');
};

module.exports = {
    rooms
}