var studentList = [];
var passedList = [];
var failedList = [];
var count = 0;
var monthValue = "";
var passedCount = 0;
var failedCount = 0;

var subjectElement = document.querySelector(".add-subject");
var studentElement = document.querySelector(".add-student-name");
var gradeElement = document.querySelector(".add-grade");


function createStudent() {
    var grade = gradeElement.value;
    var student = studentElement.value;

    var studentNameArr = student.split(" ");
    var studentName = studentNameArr[0];
    var studentSurname = studentNameArr[1];

    isGradeValid(grade);
    isNameValid(student);

    var createdStudent = new Student(studentName, studentSurname);
    studentList.push(createdStudent);
    student = "";
}

var addButton = document.querySelector(".add-btn");
addButton.addEventListener("click", function () {

    createStudent();
    // createExam();
    // update();
});