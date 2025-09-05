// const express = require('express');
// const path = require('path');
// const app = express();
// const exphbs = require('express-handlebars');
// app.get('/',function(req, res){
//     res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });
// app.get('/about', function(req, res){
//     res.sendFile(path.join(__dirname, 'views', 'about.html'));
// });
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () =>{
//     console.log(`Server is running on port ${PORT}`);
// })
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
//     res.render('about.hbs');
// })
// const PORT = process.env.PORT || 3000;
//  app.listen(PORT, () =>{
//     console.log(`Server is running on port ${PORT}`);
//  });
// const handlebar = require('express-handlebars');
// const http = require('http');
// const express = require('express');
// const app = express();
// const body = [];
// const fs = require('fs');
// const path = require('path');
// const readline = require('readline-sync');
// const server = http.createServer(function(req, res){
//     if(req.method === 'GET'){
//         res.writeHead(200, {
//             "Content-Type": 'text/html',
            
//         })
//     }
//         else if(req.method === 'POST'){
//             res.writeHead(404, {
//                 'Content-Type': 'text/html',
//             })
//             res.end('<h1>404 error</h1>');
//         }
//         req.on('data', data => {
//             body.push(Buffer.from(data));
//         })
       
//     })
       
// fs.mkdir(path.join(__dirname, 'home'), err =>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log('everything is ok');
//     }
// })
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })
// const result = rl.question('enter port code')
// const PORT = process.env.PORT || result;
// const handlebars = handlebar.create({
//     defaultLayout: 'main',
//     extname: 'handlebars'
// })
// app.listen(PORT, () =>{
// console.log(`listening to port ${PORT}`);
// });
// app.engine('handlebars', handlebars.engine, function(err) {
//     if(err){
//         throw err;
//     }
//     else{
//         app.set('view engine', handlebars);
//         app.set('views', 'views')
//     }
// });

// app.get('/', function(req, res){
//     res.render('index.html');
// })
// const express = require('express');
// const mongoose = require('mongoose');
// const path = require('path');
// const exphbs = require('express-handlebars');
// const homeRoutes = require('./routs/home');
// const addRoutes = require('./routs/add');
// const coursesRoutes = require('./routs/coures');
// const password = '789789nju';
// const PORT = process.env.PORT || 3000;

// //using files from path
// app.use('/',homeRoutes);
// app.use('/add', addRoutes);
// app.use('/coures', coursesRoutes);
// async function start(){
//     try{
//     const url = 'mongodb+srv://<db_username>:789789nju@nodejstranining.r3itcf2.mongodb.net/?retryWrites=true&w=majority&appName=NodeJSTranining';
//     await mongoose.connect(url, {useNewUrlParser: true});
//     app.listen(PORT, () =>{
//         console.log(`Server is running on port ${PORT}`);
//        })
//     }
//     catch(e){
//         console.log(e);
//     }
   
// }
// start();
const express = require('express');
// const { rawListeners } = require('process');
const readLine = require('readline');
const app = express();
const askPort = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
})
const question = readLine.question('Enter port ',  port =>{
    console.log(`Entered port ${port}`);
    
})
const PORT = process.env.PORT || question;
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})