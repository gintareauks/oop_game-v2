/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlay = document.getElementById("overlay");
let hearts = document.querySelectorAll('.tries img');

 class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    
    createPhrases() {
       return [
           new Phrase("a piece of cake"),
           new Phrase("law of attraction"),
           new Phrase("an arm and a leg"),
           new Phrase("break the ice"),
           new Phrase("live and learn")
       ]
    }

    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    }

    startGame() {
        overlay.style.display = "none";

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

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

    checkForWin() {
        const hidden = document.querySelectorAll(".hide");

        if (hidden.length > 0 ) {
            return false;
        } else {
            return true;
        }
    }

    removeLife() {
        hearts[this.missed].src = 'images/lostHeart.png';
        this.missed++;

        if (this.missed == 5) {
            this.gameOver();
        } 
    }

    gameOver(gameWon) {
        overlay.style.display = "flex";

        if (gameWon) {
            overlay.className = "win"
            overlay.querySelector("h1").textContent = "You Win!";
        } else {
            overlay.className = "lose";
            overlay.querySelector("h1").textContent = "Sorry, You Lost!";
        }

        this.resetGame();
    } 

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


 