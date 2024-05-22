const mongoose = require('mongoose');

//Define news schema.
const roomsSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    image: { type: String },
    description: { type: String, required: true },
    rate: { type: String, required: true }
});
const Rooms = mongoose.model('rooms', roomsSchema);

//Export Trip from module.
module.exports = Rooms;