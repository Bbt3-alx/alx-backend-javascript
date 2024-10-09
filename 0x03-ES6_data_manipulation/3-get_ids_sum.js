const getStudentIdsSum = (studentsIds) => {
  const studentsIdSum = studentsIds.map((student) => student.id)
    .reduce((acc, studentId) => acc + studentId, 0);
  return studentsIdSum;
};

export default getStudentIdsSum;
