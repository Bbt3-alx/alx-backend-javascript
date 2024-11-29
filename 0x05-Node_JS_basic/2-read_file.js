const fs = require("fs");

const countStudents = (path) => {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, { encoding: 'utf-8' });
    
    // Split file content into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== "");
    
    // Skip the header line
    const rows = lines.slice(1);

    if (rows.length === 0) {
      throw new Error("Cannot load the database");
    }

    let count = 0;
    const CS = [];
    const SWE = [];

    // Process each row
    rows.forEach((line) => {
      const fields = line.split(",");
      if (fields.length >= 4) {
        count += 1;
        const firstName = fields[0].trim();
        const field = fields[3].trim();

        if (field === "CS") {
	  CS.push(firstName);
	} else if (field === "SWE") {
	  SWE.push(firstName);
	}
      }
    });

    console.log(`Number of students: ${count}`);
    console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(", ")}`);
    console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(", ")}`);
  } catch (err) {
    // Throw an error if the file cannot be read
    throw new Error("Cannot load the database");
  }
};

module.exports = countStudents;

