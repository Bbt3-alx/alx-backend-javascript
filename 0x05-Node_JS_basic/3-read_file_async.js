const fs = require('fs').promises;

const countStudents = (path) => new Promise(async function (resolve, reject) {
  try {
    // Read file asynchronously
    const data = await fs.readFile(path, { encoding: 'utf-8' });

    // Split data into lines and remove empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Skip the header row
    const rows = lines.slice(1);

    if (rows.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Initialize counters and groups
    let totalStudents = 0;
    const fields = {};

    // Process each row
    rows.forEach((line) => {
      const columns = line.split(',');
      if (columns.length >= 4) {
        totalStudents += 1;
        const field = columns[3].trim();
        const firstName = columns[0].trim();

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
    });

    // Log the result
    console.log(`Number of students: ${totalStudents}`);
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }

    resolve(); // Resolve the promise if successful
  } catch (err) {
    reject(new Error('Cannot load the database'));
  }
});

module.exports = countStudents;
