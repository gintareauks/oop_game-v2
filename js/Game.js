/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    createPhrases() {
        return [
            new Phrase("law of attraction"),
            new Phrase("break the ice"),
            new Phrase("live and learn"),
            new Phrase("on cloud nine"),
            new Phrase("A piece of cake")
        ];
    }

    startGame() {
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
            const randomPhrase = Math.floor(Math.random() * this.phrases.length);
            return this.phrases[randomPhrase];
    }

    
    
    // handleInteraction(key) {
    //     key.disabled = true;

    //         if (buttonClicked.tagName === 'BUTTON') {
    //             buttonClicked.classList.add('chosen');
    //             buttonClicked.disabled = 'true';
    //             showMatchedLetter()
    //             if (checkForWin() == true) {
    //                 this.gameOver();
    //             }
    //         } else {
    //             buttonClicked.classList.add('wrong');
    //             removeLife();
    //         }
    // }
    

//     removeLife() {
//         const letterFound = checkLetter(buttonClicked);
//         if (letterFound == null) {
//             let hearts = document.querySelectorAll('.tries img');
//             hearts[missed].src = 'images/lostHeart.png';
//             missed++;
//         }

//         if (missed > 4) {
//             gameOver();
//         }
//     }

//     checkForWin() {
//         let liLetter = document.querySelectorAll('.letter');
//         let liShow = document.querySelectorAll('.show');
//          if (liLetter.length === liShow.length) {
//         overlay.className = 'win';
//         document.querySelector('h2').innerHTML = 'Congratulations ! <br> YOU WON !';
//         overlay.style.display = 'flex';
//         startButton.textContent = 'Start Again'
//     }}

//     gameOver() {
//         overlay.className = 'lose';
//         document.querySelector('h2').innerHTML = 'SORRY, YOU LOST';
//         overlay.style.display = 'flex';
//         startButton.textContent = 'Start Again';
//     }

}