const http = require('http');

//Creates server
const server = http.createServer((req, res) => {
    //returining url that we printed in browser
    // console.log(req.url);
    //writes text in page using html
    //we can use html tags
    // res.write('<p>World</p>');
    // res.write('<h1>World</h1>');
    //closes previous answer
    //check type of content
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });

        res.end(`
        
        `);

    } else if (req.method === 'POST') {
        const body = [];
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
        });

        req.on('data', data => {
            body.push(Buffer.from(data));
        });

        req.on('end', () => {
            const bodyString = Buffer.concat(body).toString();
            const message = bodyString.split('=')[1];
            // Декодируем URL-кодированные символы (например, %20 для пробела)
            // Это важно, так как браузеры кодируют данные формы
            const decodedMessage = decodeURIComponent(message.replace(/\+/g, ' '));

            res.end(`<h1>Your message: ${decodedMessage}</h1>`);
        });
    }
});

//Contecting or listening to port
server.listen(3030, () => {
    console.log(`Listening to host http://localhost:3030`);
});