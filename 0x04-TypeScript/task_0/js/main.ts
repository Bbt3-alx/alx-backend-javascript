interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: 'Ali',
    lastName: 'Kone',
    age: 17,
    location: 'Bamako'
}

const student2: Student = {
    firstName: 'Mouna',
    lastName: 'Toure',
    age: 23,
    location: 'Boulkassobougou'
}

const studentsList: Array<Student> = [student1, student2]

// Create table
const table = document.createElement('table')

const renderTable = () =>{
    studentsList.forEach(student => {
        // Create table row
        const row = document.createElement('tr');

        // Create a cell for first name
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;

        row.appendChild(firstNameCell);

        // Create a cell location
        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;

        row.appendChild(locationCell);

        // Append rows to the table
        table.appendChild(row)
    });

    document.body.appendChild(table);
}

renderTable()
