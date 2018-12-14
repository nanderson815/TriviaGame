$(document).ready(function () {

    function Question(q, a1, a2, a3, a4, arrayNumber) {
        this.question = q
        this.answer1 = a1;
        this.answer2 = a2;
        this.answer3 = a3;
        this.answer4 = a4;
        this.currectAnswerNumber = arrayNumber;
    }

    var firstQuestion = new Question("Question one?",
        "answer 1", "answer 2", "correct answer", "answer 4", 2);
    pushQuestions(firstQuestion);

    function pushQuestions(questionNumber) {
        $("#question").html(questionNumber.question);
        $("#a1").html(questionNumber.answer1);
        $("#a2").html(questionNumber.answer2);
        $("#a3").html(questionNumber.answer3);
        $("#a4").html(questionNumber.answer4);

    }

    $('#a1, #a2, #a3, #a4').on("click", function () {
        console.log(this.value);
    });

    console.log(firstQuestion);

});

