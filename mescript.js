document.addEventListener('DOMContentLoaded', function () {
    var image = document.querySelector('.image-container img');
    var h1Element = document.querySelector('.textbox h1');
    var pElement = document.querySelector('.textbox p');
    var audio = new Audio('https://github.com/ShahramChaudhry/Portfolio/music.mp3'); // Create an Audio object with the path to your music file
    audio.volume = 0.1;

    image.addEventListener('mouseover', function () {
        h1Element.style.color = 'grey';
        pElement.style.color = 'grey';
        audio.play(); // Play the audio when the mouse hovers over the image
    });

    image.addEventListener('mouseout', function () {
        h1Element.style.color = 'black';
        pElement.style.color = 'black';
        audio.pause(); // Pause the audio when the mouse leaves the image
        audio.currentTime = 0; // Reset the audio to the beginning
    });

    var customCursor = document.createElement('img');
    customCursor.src = 'result.png';
    customCursor.style.width = '5vw';
    customCursor.style.position = 'absolute';
    customCursor.style.zIndex = '10000';
    customCursor.style.pointerEvents = 'none';
    document.body.appendChild(customCursor);

    document.addEventListener('mousemove', function (e) {
        customCursor.style.left = (e.clientX - customCursor.width / 2) + 'px';
        customCursor.style.top = (e.clientY - customCursor.height / 2) + 'px';
    });

    document.body.style.cursor = 'none';
});
