// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    //console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

});


/*

    - Initialize our variables
    - Display heads and clear variables to 0
    

    - When they click on the flip button, get random number to flip penny
    - Determine if it's heads or tails & change picture
    - Add to scoreboard corrisponding variable
    - Update percentages of heads / tails on scoreboard
    - Update status message

    - When they click on the clear button
    - Reset variables
    - Reset scoreboard
    - Change status message to let's get rolling
    - Change the picture

*/


let headsCount = 0;
let tailsCount = 0;


let updateScoreboard = function()
{
    let totalCount = headsCount + tailsCount;
    let percentHeads = (totalCount === 0) ? 0 : Math.round((headsCount / totalCount) * 100);
    let percentTails = (totalCount === 0) ? 0 : Math.round((tailsCount / totalCount) * 100);

    document.querySelector('#heads').textContent = headsCount;
    document.querySelector('#heads-percent').textContent = `${percentHeads}%`;
    document.querySelector('#tails').textContent = tailsCount;
    document.querySelector('#tails-percent').textContent = `${percentTails}%`;
}

let flipPenny = function()
{


    let isHeads = Math.round(Math.random()) > 0.5;
    if (isHeads)
    {
        headsCount++;
        document.querySelector('.pennyImage').src = './assets/images/penny-heads.jpg';
    }
    else
    {
        tailsCount++;
        document.querySelector('.pennyImage').src = './assets/images/penny-tails.jpg';
    }
    document.querySelector('.message-container').textContent = `You Flipped ${((isHeads) ? 'Heads' : 'Tails')}!`

    console.log(`TAILS:${tailsCount} HEADS:${headsCount}`);
    updateScoreboard();
};

let clearScoreboard = function()
{
    headsCount = 0;
    tailsCount = 0;
    updateScoreboard();
    document.querySelector('.pennyImage').src = './assets/images/penny-heads.jpg';
    document.querySelector('.message-container').textContent = "Let's Get Rolling!";
};

let flipButton = document.querySelector('#flip');
flipButton.addEventListener('click', flipPenny);

let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearScoreboard);
