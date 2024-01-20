console.log("hey there!")

// Boolean to indicate if the game is active or not 
var gameOver = false;

// hoisted varible for access outside of timer function
var intervalId;


// creation of elements and text for intro screen
var displayText = document.getElementById("display-text");
var buttonSection = document.getElementById("button-container");
var h1 = document.createElement("h1");
var h2 = document.createElement("h2");
var startButton = document.createElement("button");
displayText.appendChild(h1);
displayText.appendChild(h2);
buttonSection.appendChild(startButton);
startButton.setAttribute("id", "startButton")
h1.textContent = "Coding Quiz Challenge";
h2.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your time by ten seconds!"
startButton.textContent = "Start Quiz"

// when start quiz button is clicked
startButton.addEventListener("click", startGame);

// function for showing intro screen
function showIntroScreen() {
    count = 20;
    clearHighScoresBtn.classList.add("hidden");
    highScoresH2.classList.add("hidden");
    scoreList.classList.add("hidden");
    initialsInput.classList.add("hidden");
    winLoseMessage.classList.add("hidden");
    submitButton.classList.add("hidden")
    testText.classList.add("hidden");
    scoreText.classList.add("hidden");
    h1.classList.remove("hidden");
    h2.classList.remove("hidden");
    startButton.classList.remove("hidden");

    // beginTimer(30);
    // - Display intro screen with instructions
    // - Include 'Start Quiz' button
    //     - Hide quiz, timer, and score sections if they are visible
}

// Creates area for timer
var timerArea = document.getElementById("timer-container");
var countDown = document.createElement("h2")
timerArea.appendChild(countDown)

// Creates start over button
var startOverButton = document.createElement("button")
timerArea.appendChild(startOverButton)
startOverButton.setAttribute("id", "startOver")
startOverButton.classList.add("hidden")
startOverButton.textContent = "Start Over";

// Function for when the start over button is clicked
startOverButton.addEventListener("click", function () {
    clearInterval(intervalId);
    gameOver = true;
    countDown.textContent = "";
    finishGame()
    showIntroScreen();
    startOverButton.classList.add("hidden")


});

// timer display before time counts down 
var count = 20;

var score = 0;

// function for timer
function beginTimer(duration) {
    countDown.classList.remove("hidden")
    count = duration;
    intervalId = setInterval(function () {
        if (count > 0) {
            count--;
            countDown.textContent = count;
        } else {
            clearInterval(intervalId);
            countDown.textContent = "";
            gameOver = true;
            finishGame();


        }
    }, 100)




    // - Set timer to given duration
    //     - Start countdown(decrement timer every second)
    //         - Update timer display on screen
    //             - Check if timer reaches 0, then call finishGame()
}


// function to start the game
function startGame() {
    gameOver = false;
    score = 0;
    scoreText.textContent = `Score ${score}`;
    countDown.textContent = count;
    beginTimer(20)
    h1.classList.add("hidden")
    h2.classList.add("hidden")
    startButton.classList.add("hidden")
    startOverButton.classList.remove("hidden")
    testText.classList.remove("hidden")
    scoreText.classList.remove("hidden")
    chooseQuestion()

    // - Call beginTimer() with the specified duration
    //     - Hide intro screen
    //         - Display quiz section
    //             - Call chooseQuestion() to display the first question
}

// creates elements related to the quiz, quiz text, score

var testContainer = document.getElementById("test-section");
var scoreText = document.createElement("h2")
var testText = document.createElement("h2");
testContainer.appendChild(scoreText);
testContainer.appendChild(testText);
var scoredisplay = scoreText.textContent;

var correctAnswer;

// array for buttons that will have questions on them
var testButtons = [];


// creates buttons for the answers and places them in the testButtons array
function makeTestButtons() {
    for (var i = 0; i < 4; i++) {
        var testButton = document.createElement("button");
        testContainer.appendChild(testButton);
        testButton.setAttribute("id", "test-button")
        testButton.classList.add("hidden")
        testButtons.push(testButton)
    }
}
makeTestButtons()

// randomly chooses question from the object, displays question, and assigns answers to buttons
function chooseQuestion() {
    var randomQuestion = Math.floor(Math.random() * jsQuizQuestions.length)
    var question = jsQuizQuestions[randomQuestion];
    var answers = [question.answers.a, question.answers.b, question.answers.c, question.answers.d];
    correctAnswer = question.correctAnswer


    testText.textContent = `${question.question}`
    for (var i = 0; i < 4; i++) {
        testButtons[i].classList.remove("hidden");
        testButtons[i].textContent = answers[i];
        testButtons[i].value = Object.keys(question.answers)[i];
    }

    // - If there are remaining questions:
    // - Select a question randomly or sequentially
    //     - Display question and corresponding answers
    //         - Else:
    // - Call finishGame()
}


// creates element that displays when user gets answer right or wrong
var messageSection = document.getElementById("message-section");
var winLoseMessage = document.createElement("h3");
messageSection.appendChild(winLoseMessage);
winLoseMessage.textContent = "";

// creates element for user to enter initials when game is over
var initialsInput = document.createElement("input");
var submitButton = document.createElement("button")
messageSection.appendChild(initialsInput);
messageSection.appendChild(submitButton);
winLoseMessage.classList.add("hidden");
initialsInput.setAttribute("type", "text");
initialsInput.setAttribute("placeholder", "Enter Your Initials");
initialsInput.classList.add("hidden");
submitButton.setAttribute("id", "submit")
submitButton.classList.add("hidden")
submitButton.textContent = "Submit Score"

// compares the button clicked with the correct answer from the questions object
for (var i = 0; i < testButtons.length; i++) {
    testButtons[i].addEventListener("click", function (e) {
        console.log(e.target.value)
        var answerChosen = e.target.value
        if (answerChosen === correctAnswer) {
            score++;
            scoreText.textContent = `Score ${score}`;
            winLoseMessage.classList.remove("hidden");
            winLoseMessage.textContent = "Great Job!";
            chooseQuestion();
        } else {
            count -= 10;
            winLoseMessage.classList.remove("hidden");
            winLoseMessage.textContent = "Sorry!";
            chooseQuestion();
        }

    })
}







function finishGame() {
    gameOver = true;

    for (var i = 0; i < 4; i++) {
        testButtons[i].classList.add("hidden")
    };

    testText.classList.add("hidden")
    scoreText.classList.add("hidden")
    winLoseMessage.textContent = `Your Final Score Is ${score}`
    initialsInput.value = "";
    initialsInput.classList.remove("hidden")
    submitButton.classList.remove("hidden")

}

submitButton.addEventListener("click", submitScore)

// point to section in html for high scores
var highScoresSection = document.getElementById("high-scores");
// Create an ordered list (ol) for the list of high scores
var scoreList = document.createElement("ol");
// append the ordered list 
highScoresSection.appendChild(scoreList);

// empty array for scores
var highScoresArray = [];


function clearHighScores() {

};

function submitScore() {
    clearHighScoresBtn.classList.remove("hidden");
    highScoresH2.classList.remove("hidden");
    submitButton.classList.add("hidden");
    initialsInput.classList.add("hidden");


    var initials = initialsInput.value.trim();

    // Load existing scores from localStorage
    highScoresArray = JSON.parse(localStorage.getItem("highScores")) || [];

    // Create a new score object
    var newScore = { initials: initials, score: score };

    // Add the new score to the array
    highScoresArray.push(newScore);

    // Save the updated array to localStorage
    localStorage.setItem("highScores", JSON.stringify(highScoresArray));

    console.log("Score submitted!");
    showHighScores();
}
// Get the high-scores section element
var highScoresSection = document.getElementById("high-scores");

// Create a heading (h2) for high scores
var highScoresH2 = document.createElement("h2");
highScoresH2.setAttribute("id", "highscore-h2");
highScoresH2.textContent = "HIGH SCORES";

// Create a button to clear high scores
var clearHighScoresBtn = document.createElement("button");
clearHighScoresBtn.setAttribute("id", "clear-button");
clearHighScoresBtn.textContent = "Clear High Scores";



// Append the heading and button to the highScoresSection
highScoresSection.prepend(clearHighScoresBtn);
highScoresSection.prepend(highScoresH2);

clearHighScoresBtn.addEventListener('click', function () {
    console.log("clear button is clicked");
    highScoresArray = [];
    // Save the updated array to localStorage
    localStorage.setItem("highScores", JSON.stringify(highScoresArray));
    showHighScores();

});





function showHighScores() {
    scoreList.innerHTML = "";

    clearHighScoresBtn.classList.remove("hidden");
    // highScoresH2.classList.remove("hidden");
    // scoreList.classList.remove("hidden");
    // Retrieve scores from localStorage and parse them
    var highScoresArray = JSON.parse(localStorage.getItem("highScores")) || [];

    // Sort the scores in descending order
    highScoresArray.sort(function (a, b) {
        return b.score - a.score;
    });





    // append a list of scores

    highScoresArray.forEach(function (scoreItem) {
        var scoreEntry = document.createElement("li");
        scoreEntry.textContent = `${scoreItem.initials}: ${scoreItem.score}`;
        scoreList.appendChild(scoreEntry);
        scoreList.setAttribute("class", "highscore-list")
    });


}


function saveHighScore(initials, score) {
    // - Save the score to local storage
}

function loadHighScores() {
    // - Load high scores from local storage
}

function clearHighScores() {
    // - Clear high scores from local storage
}


const jsQuizQuestions = [
    {
        question: "Which type of JavaScript language is ___",
        answers: {
            a: "Object-Oriented",
            b: "Object-Based",
            c: "Assembly-language",
            d: "High-level"
        },
        correctAnswer: "b"
    },
    {
        question: "Which one of the following also known as Conditional Expression:",
        answers: {
            a: "Alternative to if-else",
            b: "Switch statement",
            c: "If-then-else statement",
            d: "immediate if"
        },
        correctAnswer: "d"
    },
    {
        question: "In JavaScript, what is a block of statement?",
        answers: {
            a: "Conditional block",
            b: "block that combines a number of statements into a single compound statement",
            c: "both conditional block and a single statement",
            d: "block that contains a single statement"
        },
        correctAnswer: "b"
    },
    {
        question: "When interpreter encounters an empty statements, what it will do:",
        answers: {
            a: "Shows a warning",
            b: "Prompts to complete the statement",
            c: "Throws an error",
            d: "Ignores the statements"
        },
        correctAnswer: "d"
    },
    {
        question: "The 'function' and 'var' are known as:",
        answers: {
            a: "Keywords",
            b: "Data types",
            c: "Declaration statements",
            d: "Prototypes"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following variables takes precedence over the others if the names are the same?",
        answers: {
            a: "Global variable",
            b: "The local element",
            c: "The two of the above",
            d: "None of the above"
        },
        correctAnswer: "b"
    },
    {
        question: "Which one of the following is the correct way for calling the JavaScript code?",
        answers: {
            a: "Preprocessor",
            b: "Triggering Event",
            c: "RMI",
            d: "Function/Method"
        },
        correctAnswer: "d"
    },
    {
        question: "In the JavaScript, which one of the following is not considered as an error:",
        answers: {
            a: "Syntax error",
            b: "Missing of semicolons",
            c: "Division by zero",
            d: "Missing of Bracket"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following number object function returns the value of the number?",
        answers: {
            a: "toString()",
            b: "valueOf()",
            c: "toLocaleString()",
            d: "toPrecision()"
        },
        correctAnswer: "b"
    },
    {
        question: "In JavaScript, what will be used for calling the function definition expression:",
        answers: {
            a: "Function literal",
            b: "Function calling",
            c: "Function declaration",
            d: "Function expression"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following function of String object creates a string to blink as if it were in a <blink> tag?",
        answers: {
            a: "anchor()",
            b: "big()",
            c: "blink()",
            d: "italics()"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following function of String object returns the calling string value converted to lower case while respecting the current locale?",
        answers: {
            a: "toLocaleLowerCase()",
            b: "toLowerCase()",
            c: "toString()",
            d: "substring()"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following function of Array object calls a function for each element in the array?",
        answers: {
            a: "concat()",
            b: "every()",
            c: "filter()",
            d: "forEach()"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of the following function of Array object returns a string representing the array and its elements?",
        answers: {
            a: "toSource()",
            b: "sort()",
            c: "splice()",
            d: "toString()"
        },
        correctAnswer: "d"
    },
    {
        question: "What will the following code return: Boolean(10 > 9)",
        answers: {
            a: "NaN",
            b: "false",
            c: "true",
            d: "undefined"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the correct way to write an array in JavaScript?",
        answers: {
            a: "var colors = (1:'red', 2:'green', 3:'blue')",
            b: "var colors = ['red', 'green', 'blue']",
            c: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
            d: "var colors = 'red', 'green', 'blue'"
        },
        correctAnswer: "b"
    },
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        answers: {
            a: "min(x,y)",
            b: "Math.min(x,y)",
            c: "Math.min(xy)",
            d: "min(xy)"
        },
        correctAnswer: "b"
    },
    {
        question: "What will the following code return: console.log(typeof NaN)?",
        answers: {
            a: "number",
            b: "NaN",
            c: "undefined",
            d: "object"
        },
        correctAnswer: "a"
    },
    {
        question: "Which JavaScript method is used to access an HTML element by its ID?",
        answers: {
            a: "getElementById()",
            b: "getElementsByID()",
            c: "getElement(ID)",
            d: "getByID()"
        },
        correctAnswer: "a"
    },
    {
        question: "What does the 'this' keyword refer to in JavaScript?",
        answers: {
            a: "The current object",
            b: "The previous object",
            c: "The next object",
            d: "None of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "Which method is used to serialize an object into a JSON string in JavaScript?",
        answers: {
            a: "JSON.stringify()",
            b: "JSON.parse()",
            c: "JSON.toObject()",
            d: "JSON.toArray()"
        },
        correctAnswer: "a"
    },
    {
        question: "Which JavaScript event occurs when the user clicks on an HTML element?",
        answers: {
            a: "onmouseover",
            b: "onchange",
            c: "onclick",
            d: "onmouseclick"
        },
        correctAnswer: "c"
    },
    {
        question: "How do you declare a JavaScript variable with the name 'age'?",
        answers: {
            a: "v age;",
            b: "variable age;",
            c: "var age;",
            d: "int age;"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string?",
        answers: {
            a: "trimmed()",
            b: "trim()",
            c: "strip()",
            d: "stripped()"
        },
        correctAnswer: "b"
    },
    {
        question: "Which JavaScript method is used for parsing integers?",
        answers: {
            a: "Integer.parse()",
            b: "parseInt()",
            c: "parseInteger()",
            d: "None of the above"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the purpose of the 'Array.prototype.map' method in JavaScript ? ",
        answers: {
            a: "To loop through an array and perform a function on each element",
            b: "To check each element in an array against a condition",
            c: "To reduce an array to a single value",
            d: "To filter out certain elements of an array"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following is true about 'const' in JavaScript?",
        answers: {
            a: "Variables declared with 'const' can be reassigned",
            b: "'const' declarations are block scoped",
            c: "'const' declarations must be initialized at the time of declaration",
            d: "Both b and c"
        },
        correctAnswer: "d"
    },
    {
        question: "How do you create a new Promise in JavaScript?",
        answers: {
            a: "new Promise()",
            b: "Promise.new()",
            c: "Promise()",
            d: "new Promise{}"
        },
        correctAnswer: "a"
    },
    {
        question: "What does '===' operator do in JavaScript?",
        answers: {
            a: "Compares two values for equality, ignoring the type",
            b: "Compares two values for equality, considering the type",
            c: "Compares if one value is larger than the other",
            d: "Assigns the value of one variable to another"
        },
        correctAnswer: "b"
    },
    {
        question: "What is a JavaScript 'IIFE'?",
        answers: {
            a: "An external JavaScript file",
            b: "A function that runs as soon as it is defined",
            c: "A type of function declaration",
            d: "An API in JavaScript"
        },
        correctAnswer: "b"
    },
    {
        question: "Which method is used to combine two or more arrays in JavaScript?",
        answers: {
            a: "concat()",
            b: "join()",
            c: "merge()",
            d: "append()"
        },
        correctAnswer: "a"
    },
    {
        question: "What is event bubbling in JavaScript?",
        answers: {
            a: "A method for event handling in the DOM API",
            b: "An event starting from the deepest element and propagating outwards",
            c: "An event starting from the outermost element and propagating inwards",
            d: "A way to trigger all events bound to an element"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the primary use of the 'bind' method in JavaScript?",
        answers: {
            a: "To link a function to an object",
            b: "To prevent the default action of an event",
            c: "To bind two strings together",
            d: "To repeatedly execute a function with a delay"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the correct syntax for adding comments in JavaScript?",
        answers: {
            a: "// This is a comment",
            b: "<!-- This is a comment -->",
            c: "/* This is a comment */",
            d: "Both a and c"
        },
        correctAnswer: "d"
    },
    {
        question: "How can you detect the client's browser name in JavaScript?",
        answers: {
            a: "navigator.appName",
            b: "browser.name",
            c: "client.navName",
            d: "window.browser"
        },
        correctAnswer: "a"
    }
]



showIntroScreen();