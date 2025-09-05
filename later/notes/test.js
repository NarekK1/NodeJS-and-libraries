const express = require('express');
const { rawListeners } = require('process');
const readLine = require('readline');
const app = express();
const askPort = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
})
const question = rl.question('Enter port ',  port =>{
    console.log(`Entered port ${port}`);
    
})
const PORT = process.env.PORT || question;
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})