class HolbertonCourse {
  constructor(name, length, students) {
    // Validate name (should be a non-empty string)
    if (typeof name !== 'string' || name.trim() === '') {
      throw new TypeError('Name must be a string');
    }
    // Validate length (should be a positive number)
    if (typeof length !== 'number' || length <= 0) {
      throw new TypeError('Length must be a positive number');
    }
    // Validate students (should be an array of non-empty strings)
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string' && student.trim() !== '')) {
      throw new TypeError('Students must be an array of non-empty strings');
    }

    // Store the values in "underscore" variables
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new TypeError('Length must be a positive number');
    }
    this._length = value;
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students
  set students(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string' && student.trim() !== '')) {
      throw new TypeError('Students must be an array of non-empty strings');
    }
    this._students = value;
  }
}

export default HolbertonCourse;
