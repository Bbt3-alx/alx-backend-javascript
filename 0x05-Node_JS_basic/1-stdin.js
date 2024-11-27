process.stdin.setEncoding('utf-8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', function(data) {
  const name = data.trim();
    process.stdout.write(`Your name is: ${name}\n`);
    process.exit()
});

process.stdin.on('end', function() {
  process.stdout.write('This important software is now closing\n');
  process.exit();
});

