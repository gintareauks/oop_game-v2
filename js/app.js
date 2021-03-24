/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const button = document.getElementById("btn__reset");
const game = new Game();


button.addEventListener("click", () => {
    game.startGame();
})

const keyboard = document.getElementById("qwerty");

keyboard.addEventListener("click", (key) => {
    const buttonClicked = key.target;
    if (buttonClicked.tagName === 'BUTTON') {
    game.handleInteraction(key.target)
    }
})

document.addEventListener('keydown', (event) => {
    const keyPressed = event.key;
    const buttons = document.querySelectorAll('.key');
    buttons.forEach((button) => {
      if (button.textContent === keyPressed) {
          button.click();
      }
    })
})