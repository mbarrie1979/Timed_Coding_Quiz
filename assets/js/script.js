console.log("hey there!")

function showIntroScreen() {
    var displayText = document.getElementById("display-text");
    var h1 = document.createElement("h1");
    displayText.appendChild(h1);
    h1.textContent = "Hey There!";
    // - Display intro screen with instructions
    // - Include 'Start Quiz' button
    //     - Hide quiz, timer, and score sections if they are visible
}



function beginTimer(duration) {
    // - Set timer to given duration
    //     - Start countdown(decrement timer every second)
    //         - Update timer display on screen
    //             - Check if timer reaches 0, then call finishGame()
}



function startGame() {
    // - Call beginTimer() with the specified duration
    //     - Hide intro screen
    //         - Display quiz section
    //             - Call chooseQuestion() to display the first question
}


function chooseQuestion() {
    // - If there are remaining questions:
    // - Select a question randomly or sequentially
    //     - Display question and corresponding answers
    //         - Else:
    // - Call finishGame()
}

function processAnswer(selectedAnswer) {
    // - Check if selectedAnswer is correct
    //     - If incorrect, subtract time from timer
    //         - Call chooseQuestion() for next question
}



function finishGame() {
    // - Stop the timer
    //     - Display game over screen
    //         - Show user's score
    //             - Prompt for initials to save score
    //                 - Call showHighScores()
}



function showHighScores() {
    // - Retrieve high scores from local storage
    //     - Display high scores
    //         - Include option to restart the quiz or clear high scores
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