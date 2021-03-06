$(document).ready(function () {
    // consturctor for each question.
    function Question(q, a1, a2, a3, a4, arrayNumber, answer, gif) {
        this.question = q
        this.answer1 = a1;
        this.answer2 = a2;
        this.answer3 = a3;
        this.answer4 = a4;
        this.currectAnswerNumber = arrayNumber;
        this.correctAnswer = answer;
        this.showGif = gif;
    }


    // variables for each question that are passed into the constructor
    var question0 = new Question("Who played Noah in the movie 'The Notebook'?",
        "Colin Ferrell", "Danny Devito", "Ryan Gossling", "Brad Pitt", 2, "Ryan Gossling", 
        "https://media0.giphy.com/media/6XeQfKBcO3K6c/giphy.gif?cid=3640f6095c1822874d556f5559451e74");

    var question1 = new Question("What is Brennan's special talent in the movie 'Step Brothers'?",
        "Dancing", "Kissing", "Dog Training", "Singing", 3, "Singing",
        "https://media0.giphy.com/media/p7hzi3tXRhhPW/giphy.gif?cid=3640f6095c1827a1517247426ba994e9");

    var question2 = new Question("In what city does the crime thriller 'Black Mass' about the life of the infamous Whitey Bulger take place?",
        "Chicago", "Boston", "New York", "Los Angeles", 1, "Boston",
        "https://media3.giphy.com/media/yyNrF28FdYsUM/giphy.gif?cid=3640f6095c1825ea7239744b6b826bd1");

    var question3 = new Question("In the 2009 film 'Inglourious Basterds', Hans Landa has a reputation for hunting what?",
        "Jews", "Wolfs", "Nazis", "Fugitives", 0, "Jews",
        "https://media0.giphy.com/media/GrE01huFZ1RqU/giphy.gif?cid=3640f6095c182633674949596b46828f");

    var question4 = new Question("Wall Street guru Michael Burry makes a fortune purchasing what security in the movie 'The Big Short'?",
        "AAA Rated Corporate Bonds", "Penny Stocks", "Mortgage Backed Securities", "Credit Default Swaps", 3, "Credit Default Swaps",
        "https://media3.giphy.com/media/5eB5SsAlwSY1y/giphy.gif?cid=3640f6095c1826626539674955f82aaa");

    var question5 = new Question("The Wolf of Wall Street, AKA Jordan Belfort, is best categorized as a what?",
        "Genius", "Fraudster", "Family Man", "Innovator", 1, "Frauster",
        "https://media3.giphy.com/media/7LgKUsZiSjcRO/giphy.gif?cid=3640f6095c1828244555777932451f57");

    var question6 = new Question("In the film 'Django Unchained', Dr. King Schultz is in what profession?",
        "Optometry", "Dentistry", "Law", "Finance", 1, "Dentistry",
        "https://media3.giphy.com/media/ED5PuYsoAk15C/giphy.gif?cid=3640f6095c182895506634674124ea21");

    var question7 = new Question("Andrew, the main character in the movie Whiplash, plays what instrument?",
        "Piano", "Chello", "Bass Guitar", "Drums", 3, "Drums",
        "https://media3.giphy.com/media/nn72sURv3Tgsw/giphy.gif?cid=3640f6095c1828ce446a41415984c83d");

    var question8 = new Question("In The Life of Pi, Pi shares his life raft with what?",
        "A Tiger", "A Beaver", "A Dog", "A Racoon", 0, "A Tiger",
        "https://media2.giphy.com/media/N1dXLHCuqwuM8/giphy.gif?cid=3640f6095c1828f0452e586f63c74a99");

    var question9 = new Question("Baby, from the 2017 film 'Baby Driver', has what condition?",
        "Schizophrenia", "Tinnitus", "Aids", "Night Terrors", 1, "Tinnitus",
        "https://media1.giphy.com/media/l1J9AoMKecyAD0iu4/giphy.gif?cid=3640f6095c18290a547053426b10a68b");

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
    var timer;
    var setTimer;

    // Starts the game on click.
    $("#startButton").on("click", function () {
        // Timer variable
        timer = 30;
        // interval to start the countdown timer on load
        setTimer = setInterval(count, 1000);
        $("main").removeClass("hidden");
        $("#startButton").hide();

    });


    // Function to reset the value of the clock and push to DOM.
    function resetTimer() {
        timer = 30;
        $("#timeRemaining").html(timer);
    }

    // Push the first question on load.
    pushQuestions(questionList[i]);



    // Function that counts down by 1 if timer is above zero, or sends the next question if time expires. 
    // ClickedValue to null ensures that time expired is counted as a loss.
    function count() {
        if (timer > 0) {
            timer--;
            $("#timeRemaining").html(timer);
        }
        if (timer === 0) {
            clickedValue = null;
            questionLogic(questionList[i]);
        }
    }

    // Function that ends the game after the last question is answered or left blank.
    function gameOver() {
        $("#question").text("Game Over! You got " + wins + " questions correct!");
        $("#answers").hide();
        $("#timeRemaining").hide();
        $("#restartButton").removeClass("hidden");
        $("#restartButton").addClass("btn btn-2 btn-2g");

    }

    // Function to display the model after each answer.
    function displayModal(text) {
        modal = document.getElementById('myModal')
        modal.style.display = "block";
        $("#modalText").text(text);
    }

    function hideModal() {
        modal = document.getElementById('myModal')
        modal.style.display = "none";
        setTimer = setInterval(count, 1000);
    }

    $('#a1, #a2, #a3, #a4').on("click", function () {

        clickedValue = this.value;
        questionLogic(questionList[i]);
    });

    function questionLogic(questionNumber) {
        if (clickedValue == questionNumber.currectAnswerNumber) {
            wins++;
            $(".wins").text(wins);
            $("#gif").show();
            $("#gif").attr("src", questionList[i].showGif);
            i++;
            clearInterval(setTimer);
            displayModal("Thats correct!");
            
            setTimeout(hideModal, 3000);
            resetTimer();
            if (i < 10) {
                pushQuestions(questionList[i]);
            } else {
                gameOver();
            }

        } else {
            losses++;
            $(".losses").text(losses);
            clearInterval(setTimer);
            $("#gif").hide();
            displayModal("Wrong! The correct answer is: " + questionList[i].correctAnswer);
            i++;
            setTimeout(hideModal, 3000);
            resetTimer();
            if (i < 10) {
                pushQuestions(questionList[i]);
            } else {
                gameOver();

            }
        }
    }

    // Resets the game without reloading the page. 
    $("#restartButton").click(function () {
        wins = 0;
        losses = 0;
        i = 0;
        pushQuestions(questionList[i]);
        $(".losses").text(losses);
        $(".wins").text(wins);
        $("#answers").show();
        $("#timeRemaining").show();
        $("#restartButton").addClass("hidden");
        $("#restartButton").removeClass("btn btn-2 btn-2g");

    });



});

