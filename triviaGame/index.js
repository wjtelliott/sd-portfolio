/*

finished product should be able to have users do the following:

- provide their name
- answer a series of questions
- be awarded 10 points for each question they answer correctly
- see their score at the end of the game
- see the all-time high score at the end of the game
- see whether they answered a question correct or incorrect immediately
- see the name of the user who achieved the hishest score, with the high score
- see their personal high score (high score left by the person with the same name)
- be asked if they would like to play again each time they complete a game

- link to my portfolio page after a game is over.

*/

    // If we ever need or want to change the points per question, or change the storage key:
    const _storageGameName = 'games';
    const _pointsPerQuestion = 10;

runTriviaGame =
{
    runGame: function()
    {

        let gameObject = triviaGameObject;
        let util = triviaUtilObject;

        let playAgain = false;
        var userName = window.prompt('Please enter your name:');
        if (userName === null) userName = 'unnamed';
        do
        {
            let userScore = 0;

            for (let i = 0; i < questions.length; i++)
            {

                let question = questions[i];

                // Make sure we always get this as uppercase. Do not change.
                let userAnswer = window.prompt(question.text);
                if (userAnswer === null)
                    return;
                else userAnswer = userAnswer.toUpperCase();


                // Allow our users to clear the highscores:
                if (userAnswer === "CLEAR")
                {
                    gameObject.clearHighScores();
                    window.alert("Highscores have been cleared! The game will now restart.");
                    userScore = 0;
                    i = -1;
                    continue;
                }

                // Validate user input. Always assume the user entered invalid options or input until verified as appropriate
                if (!util.validateAnswer(userAnswer))
                {

                    // lowering i by 1 will keep the loop in the same iteration and redo a question
                    i--;
                    window.alert('That was an invalid input. Please use A, B, C or D.');

                    // Make sure we continue here after modifing the index. We cannot run code below if we wish to redo user inputs
                    continue;
                }


                if (userAnswer === question.correctAnswer)
                {
                    window.alert('That was correct!');
                    userScore += _pointsPerQuestion;
                }
                else
                {
                    window.alert('That was incorrect.');
                }


            }

            let savedGames;
            if ((savedGames = gameObject.loadGame()) === null)
            {
                savedGames = [];
            }

            savedGames.push(gameObject.serializeGame(userName, userScore));


            gameObject.saveGame(savedGames, userName);

            let highScores = gameObject.findHighScores(savedGames);

            // BUG: If a user beat their latest high score, it would show their old score instead of their new record.
            // I added a conditional operator to this line to avoid this occurance
            window.alert(`Your score this time was: ${userScore}. Your current high score is ${(highScores.current > userScore) ? highScores.current : userScore} points. ${highScores.highestUser} has the highest score with ${highScores.highest} points.`);

            playAgain =
            util.validateBool(
                window.prompt('Would you like to play again? (Y/N)').toLowerCase()
            );

        // play again.
        } while (playAgain)
    }   
}