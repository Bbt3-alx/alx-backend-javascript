process.stdin.setEncoding('utf-8');

console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    const name = chunk.trim();
    console.log(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
  process.exit();
});
