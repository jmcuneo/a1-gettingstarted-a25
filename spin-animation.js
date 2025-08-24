picture = document.querySelector('.avatar-container').querySelector('img');

// when the mouse hover over the profile picture, add spinning class
picture.addEventListener('mouseover', function(){
    picture.classList.add('spin-effect');
});

// when the mouse leaves, remove the spinning class
picture.addEventListener('mouseout', function(){
    picture.classList.remove('spin-effect');
});