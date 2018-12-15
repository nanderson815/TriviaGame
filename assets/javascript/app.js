$(document).ready(function () {
    // consturctor for each question.
    function Question(q, a1, a2, a3, a4, arrayNumber) {
        this.question = q
        this.answer1 = a1;
        this.answer2 = a2;
        this.answer3 = a3;
        this.answer4 = a4;
        this.currectAnswerNumber = arrayNumber;
    }


    // variables for each question that are passed into the constructor
    var question0 = new Question("Who played Noah in the movie 'The Notebook'?",
        "Colin Ferrell", "Danny Devito", "Ryan Gossling", "Brad Pitt", 2);

    var question1 = new Question("What is Brennan's special talent in the movie 'Step Brothers'?",
        "Dancing", "Kissing", "Dog Training", "Singing", 3);

    var question2 = new Question("In what city does the crime thriller 'Black Mass' about the life of the infamous Whitey Bulger take place?",
        "Chicago", "Boston", "New York", "Los Angeles", 1);

    var question3 = new Question("In the 2009 film 'Inglourious Basterds', Hans Landa has a reputation for hunting what?",
        "Jews", "Wolfs", "Nazis", "Fugitives", 0);

    var question4 = new Question("Wall Street guru Michael Burry makes a fortune purchasing what security in the movie 'The Big Short'?",
        "AAA Rated Corporate Bonds", "Penny Stocks", "Mortgage Backed Securities", "Credit Default Swaps", 3);

    var question5 = new Question("The Wolf of Wall Street, AKA Jordan Belfort, is best categorized as a what?",
        "Genius", "Fraudster and Drug Addict", "Family Man", "Innovator", 1);

    var question6 = new Question("In the film 'Django Unchained', Dr. King Schultz is in what profession?",
        "Optometry", "Dentistry", "Law", "Finance", 1);

    var question7 = new Question("Andrew, the main character in the movie Whiplash, plays what instrument?",
        "Piano", "Chello", "Bass Guitar", "Drums", 3);

    var question8 = new Question("In The Life of Pi, Pi shares his life raft with what?",
        "A Tiger", "A Beaver", "A Dog", "A Racoon", 0);

    var question9 = new Question("Baby, from the 2017 film 'Baby Driver', has what condition?",
        "Schizophrenia", "Tinnitus", "Aids", "Night Terrors", 1);

    // Each question is stored in this array so that we can use the index number to pass questions to the DOM. I need to write a function that automatically passes questions into the arry.
    var questionList = [
        question0, question1, question2, question3, question4, question5, question6, question7, question8, question9
    ];

    // Function to push question to the DOM.
    function pushQuestions(questionNumber) {
        $("#question").html(questionNumber.question);
        $("#a1").html(questionNumber.answer1);
        $("#a2").html(questionNumber.answer2);
        $("#a3").html(questionNumber.answer3);
        $("#a4").html(questionNumber.answer4);

    }
    // Vars that store the number of wins, losses, i for current question, and a global var to hold what element was clicked
    var wins = 0;
    var losses = 0;
    var i = 0;
    var clickedValue;

    // Timer variable
    var timer = 30;

    // Function to reset the value of the clock and push to DOM.
    function resetTimer() {
        timer = 30;
        $("#timeRemaining").html(timer);
    }

    // Push the first question on load.
    pushQuestions(questionList[i]);

    // interval to start the countdown timer on load
    setInterval(count, 1000);

    // Function that counts down by 1 if timer is above zero, or sends the next question if time expires. 
    // ClickedValue to null ensures that time expired is counted as a loss.
    function count() {
        if (timer > 0) {
            timer--;
            $("#timeRemaining").html(timer);
        }
        if (timer == 0) {
            clickedValue = null;
            questionLogic(questionList[i]);
        }
    }


    $('#a1, #a2, #a3, #a4').on("click", function () {

        clickedValue = this.value;
        questionLogic(questionList[i]);
    });

    function questionLogic(questionNumber) {
        if (clickedValue == questionNumber.currectAnswerNumber) {
            wins++;
            resetTimer();
            $(".wins").text(wins);
            i++;
            if (i < 10) {
                pushQuestions(questionList[i]);
            } else {
                alert("Game Over! You got " + wins + " questions correct!");
                $("#timeRemaining").hide();
            }

        } else {
            losses++;
            resetTimer();
            $(".losses").text(losses);
            i++;
            if (i < 10) {
                pushQuestions(questionList[i]);
            } else {
                alert("Game Over! You got " + wins + " questions correct!");
                $("#timeRemaining").hide();

            }
        }
    }





});

