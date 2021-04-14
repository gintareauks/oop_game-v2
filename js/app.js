const button = document.getElementById("btn__reset");
let game;


// clicking 'start game' button, starts the game.
button.addEventListener("click", () => {
    game = new Game();
    game.startGame();
})

const keyboard = document.getElementById("qwerty");

// letters on the screen made functional (respond to the click)
keyboard.addEventListener("click", (key) => {
    const buttonClicked = key.target;
    if (buttonClicked.tagName === 'BUTTON') {
    game.handleInteraction(key.target)
    }
})


// function for keyboard functionality 
// players can use their physical computer keyboard to enter guesses   
// function is called in game.js to avoid bugs
function allowType() {
    const keyPressed = event.key;
    const buttons = document.querySelectorAll('.key');
    buttons.forEach((button) => {
      if (button.textContent === keyPressed) {
          button.click();
      }
    })
}





