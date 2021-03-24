/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        const ul = document.querySelector("ul");
        const letters = this.phrase.split("");
        
        letters.forEach((letter) => {
            const li = document.createElement('li');
            li.textContent = letter;
            ul.appendChild(li);

            if (letter !== ' ') {
                li.classList.add("hide", "letter", `${letter}`);
            } else {
                li.classList.add("space")
            }
        })
    }

    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    showMatchedLetter(letter) {
        const lettersAll = document.getElementsByClassName("letter");

        for (let i = 0; i < lettersAll.length; i++) {
            if (lettersAll[i].classList.contains(letter)) {
                lettersAll[i].classList.remove("hide");
                lettersAll[i].classList.add('show');
            }
        }
    }
}




