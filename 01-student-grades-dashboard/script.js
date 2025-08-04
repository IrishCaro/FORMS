// Starter data
const students = [
  { name: "Anna", grade: 92 },
  { name: "Ben", grade: 78 },
  { name: "Clara", grade: 88 },
  { name: "David", grade: 84 },
  { name: "Ella" } // no grade, should use default
];

// Start coding here...
function displayStudent({ name, grade }) {
  return `Student ${name} has a grade of ${grade}.`;
}
const studentToUpper = students.map(student => student.name.toUpperCase());
const studentGrade = students.filter(grades => grades.grade >= 85).map(displayStudent);
const totalOfGrades = students.reduce((acc,student) => acc + (typeof student.grade === "number" ? student.grade : 0),0).toString();

let studentName = document.getElementById("student_name");
studentName.textContent = studentToUpper.join(" ");
let studentGradeFilter = document.getElementById("student_GradeFilter");
studentGradeFilter.textContent = studentGrade.join(" ");
let studentGradeAvg = document.getElementById("student_Avg");
studentGradeAvg.textContent = `The Average grades of the students ${totalOfGrades}`;
