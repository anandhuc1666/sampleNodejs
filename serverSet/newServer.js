// const event = require('events')
// const emiter = new event()

// emiter.on('sample',(name)=>{
//     console.log(name)
// })
// emiter.emit('sample','anandhu')

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.writeFile('user1.txt', 'hello user1 first text write on new', (err) => {
    if (err) {
      console.log('error while writing: ' + err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error writing file');
    } else {
      // Read the file AFTER writing succeeds
      fs.readFile('user1.txt', 'utf8', (err, data) => {
        if (err) {
          console.log('error while reading: ' + err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error reading file');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.write(data);
          res.end();
        }
      });
    }
  });
});

server.listen(6000, () => console.log('server is on port 6000'));

