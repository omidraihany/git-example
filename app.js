const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const port = 5000;
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '/public')));
hbs.registerPartials(path.join(__dirname, 'views/partials'));
hbs.registerHelper('date', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('uppercase', (text) => {
    return text.toUpperCase();
})
app.get('/', (req, res) => {
    // res.send('Hello to my webSite!');
    res.render('home', {
        pageTitle: 'barghkonur.com',
        title: 'Omid Reihany'
    });
})
app.listen(port, () => {
    console.log(`'I'm running on servert with port ${port}`);
})