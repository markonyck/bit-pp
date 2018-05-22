var dataModule = (function () {
    var data = {
        examList: [],
        passedList:[],
        failedList:[]
    }

    function Exam (subject,fullName,grade){
        this.subject = subject;
        this.fullName = fullName;
        this.grade = grade;
    }

    function addExam (subject,fullName,grade){
        var exam = new Exam(subject,fullName,grade);
        data.examList.push(exam);
        if (grade > 5){
            data.passedList.push(exam);
        } else {
            data.failedList.push(exam);
        }
        return exam;
    }

    function totalExams(){
        var total = data.examList.length;
        return total;
    }

    function passedStudents(){
        var passedTotal = data.passedList.length;
        return passedTotal;
    }

    function failedStudents(){
        var failedTotal = data.failedList.length;
        return failedTotal;
    }

    return{
        addExam: addExam,
        totalExams: totalExams,
        passedStudents : passedStudents,
        failedStudents: failedStudents,
    }

})();

var uiModule = (function () {


    var jQuerySelectors = {
        subjectInput: $(".add-subject"),
        fullName: $(".add-student-name"),
        subjectGrade: $(".add-grade"),
        addButton: $(".add-btn"),
        outputNoExams: $(".exam-total")
    }
    function collectData() {
        var subjectInput = document.querySelector(".add-subject");
        var fullName = document.querySelector(".add-student-name");
        var subjectGrade = document.querySelector(".add-grade");
        var exam = {
            subject: subjectInput.value,
            studentFullName: fullName.value,
            grade: subjectGrade.value,
        }
        return exam;
    }

    return {
        jQuerySelectors: jQuerySelectors,
        getInputData: collectData,
    }

})();

var mainController = (function (ui, data) {
    function setupEventListener() {
        var jQuery = ui.jQuerySelectors;
        jQuery.addButton.click(function () {
            ctrlAddStudentExam();
        });

    }

    function ctrlAddStudentExam() {
       // alert("The button was clicked.");
        // collected date accept from ui
        var input = ui.getInputData();
        console.log(input);
        // put data in exam list//
        var exam = data.addExam(input.subject,input.studentFullName, input.grade);
        console.log(exam);
        
        // count students
        var totalStudents = data.totalExams();
        var outputTextNumExams = document.querySelector(".exam-total");
        outputTextNumExams.textContent ="Total students: " + totalStudents;

        //count passed
        var passedStudents = data.passedStudents();
        var outputTextNumPass = document.querySelector(".exam-passed-text");
        outputTextNumPass.textContent="Passed: " + passedStudents;

        var failedStudents = data.failedStudents();
        var outputTextNumFailed = document.querySelector(".exam-failed");
        outputTextNumFailed.textContent ="Failed: " + failedStudents;

    }

    return {
        init: function () {
            setupEventListener();
        }
    }

})(uiModule, dataModule);
