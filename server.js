const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const PORT = process.env.PORT || 8080;
const PUBLIC = path.join(__dirname, 'public');

const MIME = {
 '.html': 'text/html',
 '.css': 'text/css',
 '.js': 'application/javascript',
 '.json': 'application/json',
 '.svg': 'image/svg+xml',
 '.png': 'image/png'
};

const server = http.createServer((req, res) => {
 const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);
 const route = ROUTES[urlPath];
 if (route) return route(req, res);

 const file = path.join(PUBLIC, urlPath === '/' ? 'index.html' : urlPath);
 if (!file.startsWith(PUBLIC)) {
 res.writeHead(403); return res.end('forbidden');
 }
 fs.readFile(file, (err, data) => {
 if (err) {
 res.writeHead(404, { 'Content-Type': 'text/html' });
 return res.end('<h1>404</h1><p>Page not found.</p>');
 }
 res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
 res.end(data);
 });
});

function json(res, status, body) {
 res.writeHead(status, { 'Content-Type': 'application/json' });
 res.end(JSON.stringify(body));
}

const ROUTES = {
 '/api/stats': (req, res) => {
 const crypto = require('node:crypto');
 json(res, 200, {
 name: 'FocusPlaylist',
 uptime: process.uptime(),
 requests: Math.floor(Math.random() * 1000),
 token: crypto.randomBytes(4).toString('hex')
 });
 },
 '/api/health': (req, res) => json(res, 200, { ok: true })
};

server.listen(PORT, () => console.log('FocusPlaylist running at http://localhost:' + PORT));