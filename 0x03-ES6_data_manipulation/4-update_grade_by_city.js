const updateStudentGradeByCity = (students, city, newGrade) => {
  const studentInfo = students.filter((studentCity) => studentCity.location === city)
    .map((grade) => grade);
  return studentInfo;
};

export default updateStudentGradeByCity;
