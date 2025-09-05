// const exphbs = require('express-handlebars');
// const express = require('express');

// const app = express();
// //Creates object that we can configurate
// const hbs = exphbs.create({
//     defaultLayout: 'main',
//     //extension name
//     extname: 'hbs'
// })

// //engine for html pages rendering
// //registering engine with name hbs
// app.engine('hbs', hbs.engine);
// //using hbs engine
// app.set('view engine', 'hbs');
// app.set('views', 'views');
// app.get('/', (req, res) => {
//     //renders pages
//     res.render('index');
// })
// app.get('/about', (req, res) =>{
//     res.render('about');
// })