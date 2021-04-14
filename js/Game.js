const overlay = document.getElementById("overlay");
let hearts = document.querySelectorAll('.tries img');

class Game {
    constructor() {
        // used to track the number of missed guesses by the player.
        this.missed = 0;
        // an array of five Phrase objects to use with the game.
        this.phrases = this.createPhrases();
        // the phrase object that’s currently in play.
        this.activePhrase = null;
    }
    
    // an array of five Phrase objects to use with the game.
    createPhrases() {
       return [
           new Phrase("a piece of cake"),
           new Phrase("law of attraction"),
           new Phrase("an arm and a leg"),
           new Phrase("break the ice"),
           new Phrase("live and learn")
       ]
    }

    // randomly retrieves one of the phrases stored in the phrases array.
    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    }

    // hides the start screen overlay; adds random phrase to the board.
    startGame() {
        overlay.style.display = "none";

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

        document.addEventListener('keydown', allowType)
    }

    // checks to see if the button clicked by the player matches a letter in the phrase, 
    // and then directs the game based on a correct or incorrect guess.
    handleInteraction(key) {
        key.disabled = true;

        if (!this.activePhrase.checkLetter(key.innerHTML)) {
            key.classList.add("wrong");
            this.removeLife();
        } else {
            key.classList.add("chosen");
            this.activePhrase.showMatchedLetter(key.innerHTML);

            if (this.checkForWin()) {
                this.gameOver(this.checkForWin);
                this.resetGame();
            }
        }

    }

    // checks to see if the player has revealed all of the letters in the active phrase.
    checkForWin() {
        const hidden = document.querySelectorAll(".hide");

        if (hidden.length > 0 ) {
            return false;
        } else {
            return true;
        }
    }

    // removes life (heart) if the guessed letter is wrong.
    removeLife() {
        hearts[this.missed].src = 'images/lostHeart.png';
        this.missed++;

        if (this.missed == 5) {
            this.gameOver();
        } 
    }

    // displays the original start screen overlay, 
    // and depending on the outcome of the game, updates the overlay.
    gameOver(gameWon) {
        overlay.style.display = "flex";

        if (gameWon) {
            overlay.className = "win"
            document.removeEventListener('keydown', allowType)
            overlay.querySelector("h1").textContent = "You Win!";
        } else {
            overlay.className = "lose";
            document.removeEventListener('keydown', allowType)
            overlay.querySelector("h1").textContent = "Sorry, You Lost!";
        }

        this.resetGame();
    } 

    // the game is restored to its initial state
    resetGame() {
        this.missed = 0;
        const ul = document.querySelector("ul")
        ul.innerHTML = "";
        const key = document.querySelectorAll(".key");

        for (let i = 0; i < key.length; i++) {
            if (key[i].disabled = true) {
                key[i].disabled = false;
            }
            if (key[i].classList.contains("chosen")) {
                key[i].classList.remove("chosen")
            }
            if (key[i].classList.contains("wrong")) {
                key[i].classList.remove("wrong")
            }
        }

        for (let i = 0; i < hearts.length; i++) {
            hearts[i].src = `images/liveHeart.png`
        }
    }
    
}


 