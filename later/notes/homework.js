const path = require('path');
const fs = require('fs');
// const os = require('os');
const http = require('http')
// fs.mkdir(path.join(__dirname, 'test'), err =>{
//     if(err){
//         console.log('something went wrong');
//     }
//     console.log(__dirname);
// })
// fs.writeFile(path.join(__dirname, './changed', 'test.txt'), 'test', err =>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log(__filename, path.basename(__dirname, __filename))
//     }
// })

// if(pathTo === 'test'){
//     console.log('__dirname is test')
// }
// else if(pathTo !== 'test'){
//     console.log('__dirname isn\'t existed');
// }
// fs.rename('./notes/test', './notes/changed', err =>{
//      if(err){
//         console.log('folder isnt changed')
//     }
//     else{
//         console.log('folder renamed')
//     }
    
// fs.rmdir('./notes/test', function(err){
//     if(err){
//         throw err;
//     }
//     else{
//         console.log(`test is deleted`)
//     }
// })
// });

// const server = http.createServer(function(req, res){
//     if(os.platform() === 'win32'){
//         res.write(`<h1>Your platform is ${os.platform()}</h1>`)
//         res.write(`Your file direction is ${__dirname}`);
//     }
//     else{
//         console.log(os.cpus())
//     }
// })

// setTimeout(function(){
// server.listen(3033, ()=>{
//     console.log('Server is runnig')
// })
// }, 5000);
// const handlebar = require('express-handlebars');
// const express = require('express');
// const app = express();
// const body = [];
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
// const PORT = process.env || 3000;
// console.log(`listening to port ${PORT}`);
// app.engine('hanldebars', handlebars.engine, function(err) {
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