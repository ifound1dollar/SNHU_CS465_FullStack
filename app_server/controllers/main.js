var fs = require('fs');
var news = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));

/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: "Travlr Getaways", news });
};

module.exports = {
    index
}