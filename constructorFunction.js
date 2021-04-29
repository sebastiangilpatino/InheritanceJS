function Student(firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
}

Student.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
}

Student.prototype.computeAverageGrade = function () {
    return this.grades
        .reduce((accum, current) => accum + current / this.grades.length, 0);
}

let stu1 = new Student('sebastian', 'gil', [4, 3, 2, 1]);
let stu2 = new Student('naem', 'haddad', [2, 2, 2, 2]);
let stu3 = new Student('milton', 'gonzalez', [3, 3, 3, 3]);

let studentArray = [stu1, stu2, stu3];
let averageGradeAllStudents = studentArray.map(x => x.computeAverageGrade())
    .reduce((accum, current) => accum + current / studentArray.length, 0);

console.log(averageGradeAllStudents);