$(document).ready(function () {

    function Question(q, a1, a2, a3, a4, arrayNumber) {
        this.question = q
        this.answer1 = a1;
        this.answer2 = a2;
        this.answer3 = a3;
        this.answer4 = a4;
        this.currectAnswerNumber = arrayNumber;
    }

    var firstQuestion = new Question("Who played Noah in the movie 'The Notebook'?",
        "Colin Ferrell", "Danny Devito", "Ryan Gossling", "Brad Pitt", 2);
    pushQuestions(firstQuestion);

    function pushQuestions(questionNumber) {
        $("#question").html(questionNumber.question);
        $("#a1").html(questionNumber.answer1);
        $("#a2").html(questionNumber.answer2);
        $("#a3").html(questionNumber.answer3);
        $("#a4").html(questionNumber.answer4);

    }

    $('#a1, #a2, #a3, #a4').on("click", function () {
        console.log(firstQuestion.currectAnswerNumber);
        console.log(this.value);
        if (this.value == firstQuestion.currectAnswerNumber) {
            alert("That is correct!")
        } else {
            alert("Wrong Answer, try again!")
        }
    });

    console.log(firstQuestion);

});

