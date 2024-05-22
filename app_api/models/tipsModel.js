const mongoose = require('mongoose');

//Define news schema.
const tipsSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true }
});
const Tips = mongoose.model('tips', tipsSchema);

//Export Trip from module.
module.exports = Tips;