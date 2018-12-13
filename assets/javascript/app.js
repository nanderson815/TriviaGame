$(document).ready(function () {

    function Question(q, a1, a2, a3, a4) {
        this.question = q
        this.answer1 = a1;
        this.answer2 = a2;
        this.answer3 = a3;
        this.answer4 = a4;
    }

   var firstQuestion = new Question("Question one?", "answer 1", "answer 2", "correct answer", "answer 4" );


    console.log(firstQuestion);

});

