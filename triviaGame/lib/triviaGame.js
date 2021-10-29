
let triviaGameObject =
{

    clearHighScores: function()
    {
        // Make sure this is setItem as null. Do NOT use ''
        localStorage.setItem(_storageGameName, null);
    },


    serializeGame: function (nameOfUser, scoreOfUser)
    {
        // return this as an object for ease
        return {
            user: nameOfUser,
            score: scoreOfUser
        };
    },

    loadGame: function()
    {
        // Make sure we return as a null if no games have been found.

        let serializedGames = localStorage.getItem(_storageGameName);
        if (serializedGames === null) return null;
        return JSON.parse(serializedGames);
    },

    saveGame: function(gamesToSave)
    {
        serializedGames = JSON.stringify(gamesToSave);
        localStorage.setItem(_storageGameName, serializedGames);
    },

    findHighScores: function(savedGames, userName)
    {

        console.log(JSON.stringify(savedGames));

        // If saved games data is null or empty, just return an object with default empty data
        if (savedGames === null)
            return {
                highest: 0,
                highestUser: 'Nobody',
                current: 0
            };

        
        let highestScore = savedGames[0].score;
        let highestScoreUser = savedGames[0].user;
        let currentUserHighScore = 0;

        // We can start this index at 1 to skip a loop iteration. Thanks Don! :)
        // No we can't, this skips the new second part of the loop below to determine the current user's high score. Keeping this comment here to make sure we know why this iterates at 0
        for (let i = 0; i < savedGames.length; i++)
        {
            if (savedGames[i].score > highestScore)
            {
                // At the moment high scores apply first come first serve. If two users have the same high score, whomever gained that score first will be displayed.
                // TODO: Create the highestScoreUser as an array to display all users with a tied high score
                highestScore = savedGames[i].score;
                highestScoreUser = savedGames[i].user;
            }

            // TODO: Clean up some of these variable names. savedGames[i].userName and userName (global) and other variables are easily mixed up.
            if (savedGames[i].user === userName)
            {
                if (savedGames[i].score > currentUserHighScore)
                {
                    currentUserHighScore = savedGames[i].score;
                }
            }
        }

        return {
            highest: highestScore,
            highestUser: highestScoreUser,
            current: currentUserHighScore
        };


    }
}