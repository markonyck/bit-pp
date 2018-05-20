var subjectElement = document.querySelector(".add-subject");
var studentElement = document.querySelector(".add-student-name");
var gradeElement = document.querySelector(".add-grade");

var grade = gradeElement.value;
var student = studentElement.value;

function isGradeValid(grade) {
    if (grade < 5 || grade > 10) {
        var validationGrade = document.querySelector(".gradeValidation");
        validationGrade.textContent = "You don't have valid grade. You should use grade between 5 and 10."
        gradeElement.value = "";
        return;
    }
}

function isNameValid(student) {
    var studentNameArr = student.split(" ");
    var studentName = studentNameArr[0];
    var studentSurname = studentNameArr[1];


    if (studentNameArr.length < 2) {
        var validationStudent = document.querySelector(".studentValidation");
        validationStudent.textContent = "You don't have surname. You should have both: name and surname."
        studentElement.value = "";
        return
    }

    var name1stLetter = studentName[0];
    var surname1stLetter = studentSurname[0];

    if (name1stLetter !== name1stLetter.toUpperCase() || surname1stLetter !== surname1stLetter.toUpperCase()) {
        var validationStudent = document.querySelector(".studentValidation");
        validationStudent.textContent = "You should have first letter of both name and surname upper case."
        studentElement.value = "";
        return;
    }
}