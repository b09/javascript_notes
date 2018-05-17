const Teacher = function() {
  this.students = [
    { "firstName": "sarah", "lastName": "ricci" },
    { "firstName": "serena", "lastName": "scott" },
    { "firstName": "james", "lastName": "timpson" },
    { "firstName": "leah", "lastName": "patel" },
    { "firstName": "barry", "lastName": "gordon" }
  ];
}

Teacher.prototype.getStudentPrettyName = function (student) {
  return `${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`;
}

const teacher = new Teacher()
teacher.createStudentNameList()
