const path = require('path');

//returns direction name and file name
console.log(__dirname, __filename);
//Returns file name
console.log(path.basename(__filename, __dirname));
//returns directon name
console.log(path.dirname(__filename));
//works like join
console.log(path.resolve(__dirname, '.test', 'second.html'));
//returns file extension name 
console.log(path.extname(__dirname));
//Joins or Creates string or file  to one path
console.log(path.join(__filename, 'hello.js', 'NodeCourse.js'));
//returns all from above
console.log(path.parse(__dirname, __filename));
