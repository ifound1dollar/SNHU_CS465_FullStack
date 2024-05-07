var fs = require('fs');
var newsJson = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));
var tipsJson = JSON.parse(fs.readFileSync('./data/tips.json', 'utf8'));

/* GET news view */
const news = (req, res) => {
    res.render('news', { title: 'News - Travlr Getaways', newsJson, tipsJson });
};

module.exports = {
    news
}