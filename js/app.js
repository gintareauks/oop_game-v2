const button = document.getElementById("btn__reset");
const game = new Game();


// clicking 'start game' button, starts the game.
button.addEventListener("click", () => {
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

// keyboard functionality added
// players can use their physical computer keyboard to enter guesses   
document.addEventListener('keydown', (event) => {
    const keyPressed = event.key;
    const buttons = document.querySelectorAll('.key');
    buttons.forEach((button) => {
      if (button.textContent === keyPressed) {
          button.click();
      }
    })
})