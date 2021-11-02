const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]


let imgObj = document.querySelector('.image');
let bubblers = document.querySelectorAll('.bubble');

// Create an object variable from our Object in our Lib
let slideShowObj = slideShow;
slideShowObj.init(images.length);

// Events for side bars
document.querySelector('.next').addEventListener('click', 
function(e){
    slideShowObj.changeImage(slideShowObj.imageIndex + 1);
});
document.querySelector('.previous').addEventListener('click', 
function(e){
    slideShowObj.changeImage(slideShowObj.imageIndex - 1);
});

// Bubble events
for (let i = 0; i < bubblers.length; i++)
{
    bubblers[i].addEventListener('click',
    function(e)
    {
        slideShowObj.changeImage(parseInt((e.target.id + '').substring(7)) + 1);
    });

}

// Events for hide/show controls
document.body.addEventListener('mouseover', function()
{
    slideShowObj.showControls();
});
document.body.addEventListener('mouseout', function()
{
    slideShowObj.hideControls();
});

// Finish init on slideshow obj
slideShowObj.changeImage(slideShowObj.indexClamp[0]);
slideShowObj.hideControls();


// Change our image over time
setInterval(function() { slideShowObj.timerChangeImage(); }, 3000);
