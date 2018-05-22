var dataModule = (function () {
    var data = {
        examList: []
    }

    function Exam (subject,fullName,grade){
        this.subject = subject;
        this.fullName = fullName;
        this.grade = grade;
    }

    function addExam (subject,fullName,grade){
        var exam = new Exam(subject,fullName,grade);
        data.examList.push(exam);
        return exam;
    }

    function totalExams(){
        var total = data.examList.length;
        return total;
    }

    return{
        addExam: addExam,
        totalExams: totalExams

    }

})();

var uiModule = (function () {


    var jQuerySelectors = {
        subjectInput: $(".add-subject"),
        fullName: $(".add-student-name"),
        subjectGrade: $(".add-grade"),
        addButton: $(".add-btn")
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
        console.log(data.data)

    }

    return {
        init: function () {
            setupEventListener();
        }
    }

})(uiModule, dataModule);
