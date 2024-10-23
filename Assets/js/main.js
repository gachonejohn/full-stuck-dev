//getting the button element
const myButton = document.getElementById('colorButton');

//adding an event listener
myButton.addEventListener('click', () => {
    myButton.style.backgroundColor=myButton.style.backgroundColor==='blue' ? '#4caf50': 'blue';
});


