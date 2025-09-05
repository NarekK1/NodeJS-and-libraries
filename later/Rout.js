//working on post requests
const {Router} = require('express');
const router = Router();
router.get('/', (req, res) =>{
    res.render('index', {
        title: "Main Page",
        isHome: true
    })
})
//exporting rout
module.exports = rout;