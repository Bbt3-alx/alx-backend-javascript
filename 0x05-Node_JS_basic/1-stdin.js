process.stdin.setEncoding('utf-8');

console.log('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    const name = chunk.trim();
    console.log(`Your name is: ${name}\n`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing\n');
});
