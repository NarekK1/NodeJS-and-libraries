// const {Router} = require('express');
// const router = Router();
// router.get('/', (req, res) =>{
//     res.render('index', {
//         title: "Main Page",
//         isHome: true
//     })
// })
// //exporting rout
// module.exports = rout;
// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const path = require('path');
// const exphbs = require('express-handlebars');
// const homeRoutes = require('./routs/home');
// const addRoutes = require('./routs/add');
// const coursesRoutes = require('./routs/coures');
// const password = '789789nju';
// const PORT = process.env.PORT || 3000;

//using files from path
// app.use('/',homeRoutes);
// app.use('/add', addRoutes);
// app.use('/coures', coursesRoutes);
// async function start(){
//     try{
//     const url = 'mongodb+srv://Narek:789789nju@nodejstranining.r3itcf2.mongodb.net/?retryWrites=true&w=majority&appName=NodeJSTranining';
//     await mongoose.connect(url);
//     app.listen(PORT, () =>{
//         console.log(`Server is running on port ${PORT}`);
//        })
//     }
//     catch(e){
//         console.log(e);
//     }
   
// }
// start();
const {Schema, model} = require('mongoose');
const course = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type:Number,
        required: true,
    },
    img: String,
});
module.exports = model('Course', course);
//get all data from course
//const courses = await Course.find();
