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

function createExam() {
    var exam = subjectElement.value;
    var grade = gradeElement.value;
    var student = studentElement.value;

    studentList.forEach(function (student) {
        createdStudent = student;
    });

    var createdExam = new Exam(exam, student, grade);
    studentList.push(createdExam);

    if (createdExam.hasPassed()) {
        passedList.push(createdExam);
    } else {
        failedList.push(createdExam);
    }
    studentElement.value = "";
    gradeElement.value = "";

}

var addButton = document.querySelector(".add-btn");
addButton.addEventListener("click", function () {

    createStudent();
    createExam();
    // update();
});