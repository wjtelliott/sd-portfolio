let triviaUtilObject =
{
// Used for playing again
  validateBool: function(userInput)
  {
      if (userInput === 'y') return true;
      return false;
  },

  // Only let the user answer with the appropriate letters for the multiple choice questions.
  // Anything else will be deemed invalid
  validateAnswer: function(userInput)
  {
      let validAnswers = ['A', 'B', 'C', 'D'];
      for (let i = 0; i < validAnswers.length; i++)
          if (validAnswers[i] === userInput) return true;
      return false;
  }
}