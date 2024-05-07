var fs = require('fs');
var roomsJson = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Rooms - Travlr Getaways', roomsJson });
};

module.exports = {
    rooms
}