process.stdin.setEncoding('utf-8');

console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', function(data) {
  const name = data.trim();
  console.log(`Your name is: ${name}`);
});

process.stdin.on('end', function() {
  console.log('This important software is now closing');
  process.exit();
});

