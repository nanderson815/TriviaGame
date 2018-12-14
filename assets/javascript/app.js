$(document).ready(function () {

    function Question(q, a1, a2, a3, a4, arrayNumber) {
        this.question = q
        this.answer1 = a1;
        this.answer2 = a2;
        this.answer3 = a3;
        this.answer4 = a4;
        this.currectAnswerNumber = arrayNumber;
    }



    var question0 = new Question("Who played Noah in the movie 'The Notebook'?",
        "Colin Ferrell", "Danny Devito", "Ryan Gossling", "Brad Pitt", 2);

    var question1 = new Question("What is Brennan's special talent in the movie 'Step Brothers'?",
        "Dancing", "Kissing", "Dog Training", "Singing", 3);

    var question2 = new Question("In what city does the crime thriller 'Black Mass' about the life of the infamous Whitey Bulger take place?",
        "Chicago", "Boston", "New York", "Los Angeles", 1);

    var questionList = [
        question0, question1, question2
    ];

    function pushQuestions(questionNumber) {
        $("#question").html(questionNumber.question);
        $("#a1").html(questionNumber.answer1);
        $("#a2").html(questionNumber.answer2);
        $("#a3").html(questionNumber.answer3);
        $("#a4").html(questionNumber.answer4);

    }

    var i = 0;
    var clickedValue;

    // console.log(questionList[i]);
    pushQuestions(questionList[i]);

    $('#a1, #a2, #a3, #a4').on("click", function () {
        clickedValue = this.value;
        questionLogic(question0);
    });

    function questionLogic(questionNumber) {
        if (clickedValue == questionNumber.currectAnswerNumber) {
            alert("That is correct!")

        } else {
            alert("Your Wrong MOFO")
        }
    }





});

