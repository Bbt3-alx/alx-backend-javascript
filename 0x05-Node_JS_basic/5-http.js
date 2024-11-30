const http = require('http');
const { countStudents } = require('./3-read_file_async');

const db = process.argv[2];

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.write('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(db); // Wait for the promise to resolve
      res.write(students);
    } catch (error) {
      res.write('Cannot load the database\n');
    }
  }
  res.end();
});

app.listen(1245);

module.exports = app;
