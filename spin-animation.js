/*-----------logic for spinning profile picture-------------*/
picture = document.querySelector('.avatar-container').querySelector('img');

// when the mouse hover over the profile picture, add spinning class
picture.addEventListener('mouseover', function(){
    picture.classList.add('spin-effect');
});

// when the mouse leaves, remove the spinning class
picture.addEventListener('mouseout', function(){
    picture.classList.remove('spin-effect');
});


/*----------- assign colors for pallet -------------*/
const colors = [
            '#3F1A17', // Dark Brown
            '#A14D2F', // Rust Orange
            '#E2C044', // Mustard Yellow
            '#F1EDDD', // Beige
            '#F9F9F9'  // Pale Grey
];

const colorPallets = document.querySelectorAll('.color-box'); //return an array

//loop through each 'div' tag in the array above
colorPallets.forEach((div, index) => {
    div.style.backgroundColor = colors[index];
});


