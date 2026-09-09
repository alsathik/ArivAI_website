const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const port = Number(process.env.PORT) || 3000;
const htmlPath = path.join(__dirname, 'arivai_website.html');

const server = http.createServer((request, response) => {
    if (request.url === '/' || request.url === '/arivai_website.html') {
        fs.readFile(htmlPath, (error, content) => {
            if (error) {
                response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                response.end('Unable to load the ArivAI website.');
                return;
            }

            response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            response.end(content);
        });
        return;
    }

    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
});

server.listen(port, () => {
    console.log(`ArivAI website running at http://localhost:${port}`);
});
