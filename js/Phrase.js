/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
const button = document.getElementsByClassName('key');

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
        addPhraseToDisplay() {
            const ul = document.querySelector("ul");
            const letters = this.phrase.split("");
            letters.forEach((letter) => {
                const li = document.createElement('li');

                if (letter !== ' ') {
                    li.classList.add("hide", "letter", `${letter}`);
                    li.textContent = letter;
                    ul.appendChild(li);
                } else {
                    li.classList.add("space");
                    ul.appendChild(li);
                }
            })
        }
     
        
        checkLetter(buttonSelected) {
            if (this.phrase.includes(buttonSelected)) {
                return true;
            } else {
                return false;
            }
        }

        showMatchedLetter(letter) {
            const letters = document.querySelectorAll(".letter");
            for (let i = 0; i < letters.length; i++) {
                if (letters.innerHTML == letter) {
                    letters[i].classList.remove('hide');
                    letters[i].classList.add('show');
                }
            }
        }
}