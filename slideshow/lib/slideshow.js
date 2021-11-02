let slideShow = 
{

    imageIndex: 1,

    // This value starts at 1, 1. We must run init with our max limit
    indexClamp: [1, 1],


    init: function(clampMax)
    {
        this.indexClamp[1] = clampMax;
    },

    changeBubbleIcons: function()
    {
        for (let i = 0; i < bubblers.length; i++)
            bubblers[i].textContent = '○';
        bubblers[this.imageIndex - 1].textContent = '●';
    },


    //TODO: Merge these functions into one function. 'toggleControls()'
    hideControls: function()
    {
        for (let i = 0; i < bubblers.length; i++)
            bubblers[i].style.display = 'none';
        document.querySelector('.next').style.display = 'none';
        document.querySelector('.previous').style.display = 'none';
        document.querySelector('.controls').style.display = 'none';
    },

    showControls: function()
    {
        for (let i = 0; i < bubblers.length; i++)
            bubblers[i].style.display = 'inline';
        document.querySelector('.next').style.display = 'inline';
        document.querySelector('.previous').style.display = 'inline';
        document.querySelector('.controls').style.display = 'inline';        
    },

    changeImage: function(index)
    {
        this.imageIndex = index;

        // loop
        if (this.imageIndex < this.indexClamp[0]) this.imageIndex = this.indexClamp[1];
        if (this.imageIndex > this.indexClamp[1]) this.imageIndex = this.indexClamp[0];

        imgObj.setAttribute('src', `./assets/${this.imageIndex}.jpg`);
        this.changeBubbleIcons(this.imageIndex);
    },

    timerChangeImage: function()
    {
        this.changeImage(this.imageIndex + 1);
    }

};