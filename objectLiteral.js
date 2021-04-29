let student = {
    inputNewGrade: function (newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade: function () {
        return this.grades
            .reduce((accum, current) => accum + current / this.grades.length, 0);
    },
}

let stu1 = Object.create(student);
stu1.firstName = 'sebastian';
stu1.lastName = 'gil';
stu1.grades = [1, 1];

let stu2 = Object.create(student);
stu2.firstName = 'Naem';
stu2.lastName = 'Haddad';
stu2.grades = [2, 2, 2, 2];

let stu3 = Object.create(student);
stu3.firstName = 'Milton';
stu3.lastName = 'Gonzalez';
stu3.grades = [3, 3, 3, 3];

let studentArray = [stu1, stu2, stu3];
 let averageGradeAllStudents = studentArray.map(x => x.computeAverageGrade())
     .reduce((accum, current) => accum + current / studentArray.length, 0);

console.log(averageGradeAllStudents);