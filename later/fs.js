const path = require('path');
const fs = require('fs');

//Creates folder
fs.mkdir(path.join(__dirname, 'notes'), err => {
    if(err){
        throw new Error(err);
    }
    console.log('file is created');
})

//Creates file and adds content
fs.writeFile(path.join(__dirname, 'notes', 'hello.txt'), 'Hello', 
err =>{
    if(err){
        throw err;
    }
    else{
        console.log('File is created');
    }
})
//Adds new content
fs.appendFile(path.join(__dirname, 'notes', 'hello.txt'), 'World', 
err => {
    if(err){
        throw err;
    }
    else{
        console.log('File is changed');
    }
    })
 
 //Reads file   
fs.readFile(path.join(__dirname, 'notes', 'hello.txt'), 'utf-8',
(err, data) => {
    if(err){
        throw err;
    }
    else{
        // Returns readed file buffer
        // console.log(data)

        //Translate buffer to text
        console.log(Buffer.from(data).toString());
    }
})

//Rename a file
fs.rename(path.join(__dirname, 'notes', 'hello.txt'), 
         path.join(__dirname, 'notes', 'notes.txt'),
        err => {
            if(err){
                throw err;
            }
            else{
                console.log('File is renamed');
            }

});
 




