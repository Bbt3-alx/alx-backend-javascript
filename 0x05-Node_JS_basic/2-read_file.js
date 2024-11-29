const fs = require("fs");
const { parse } = require("csv-parse");

const countStudents = (path) => {
  let count = 0;
  let CS = [];
  let SWE = [];

  if (fs.existsSync(path)) {
    fs.createReadStream(path)
    .pipe(parse({
      delimiter: ',', from_line: 2
    }))
    .on("data", function (row) {
      count += 1;
    if (row[3] == 'CS') {
      CS.push(row[3]);
    } else {
      SWE.push(row[3]);
    }
    })
    .on("end", function() {
      console.log(`Number of students: ${count}`);
      console.log(`Number of students in CS: ${CS.lengh}. List: ${CS}`);
      console.log(`Number of students in SWE: ${SWE.lengh}. List: ${SWE}`);
    });

  } else {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
