var dataModule = (function () {


})();

var uiModule = (function () {

    var jQuerySelectors = {
        subjectInput: $(".add-subject"),
        fullName: $(".add-student-name"),
        subjectGrade: $(".add-grade"),
        addButton: $(".add-btn")
    }
    return {
        jQuerySelectors: jQuerySelectors
    }

})();

var mainController = (function (ui, data) {
   function setupEventListener(){
    var jQuery = ui.jQuerySelectors;
    jQuery.addButton.click(function(){
        ctrlAddStudentExam();
    });

}

function ctrlAddStudentExam(){
    alert("The paragraph was clicked.");
}

    return {
        init: function () {
            setupEventListener();
        }
    }

})(uiModule, dataModule);

mainController.init();