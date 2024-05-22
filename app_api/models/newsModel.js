const mongoose = require('mongoose');

//Define news schema.
const newsSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    image: { type: String },
    date: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true }
});
const News = mongoose.model('news', newsSchema);

//Export Trip from module.
module.exports = News;