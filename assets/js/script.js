console.log("hey there!")

function showIntroScreen() {
    - Display intro screen with instructions
    - Include 'Start Quiz' button
        - Hide quiz, timer, and score sections if they are visible
}



function beginTimer(duration) {
    - Set timer to given duration
        - Start countdown(decrement timer every second)
            - Update timer display on screen
                - Check if timer reaches 0, then call finishGame()
}



function startGame() {
    - Call beginTimer() with the specified duration
        - Hide intro screen
            - Display quiz section
                - Call chooseQuestion() to display the first question
}


function chooseQuestion() {
    - If there are remaining questions:
    - Select a question randomly or sequentially
        - Display question and corresponding answers
            - Else:
    - Call finishGame()
}

function processAnswer(selectedAnswer) {
    - Check if selectedAnswer is correct
        - If incorrect, subtract time from timer
            - Call chooseQuestion() for next question
}



function finishGame() {
    - Stop the timer
        - Display game over screen
            - Show user's score
                - Prompt for initials to save score
                    - Call showHighScores()
}



function showHighScores() {
    - Retrieve high scores from local storage
        - Display high scores
            - Include option to restart the quiz or clear high scores
}

function saveHighScore(initials, score) {
    - Save the score to local storage
}

function loadHighScores() {
    - Load high scores from local storage
}

function clearHighScores() {
    - Clear high scores from local storage
}
