const getListStudentIds = (students) => {
  if (!Array.isArray(students)) {
    return [];
  }
  const studentsIds = students.map((student) => student.id);
  return studentsIds;
};

export default getListStudentIds;
