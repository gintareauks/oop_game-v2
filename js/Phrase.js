 class Phrase {

    // receives a phrase parameter.
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    // adds letter placeholders to the display when the game starts.
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
    
    // checks to see if the letter selected by the player matches a letter in the phrase.
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    // eveals the letter(s) on the board that matches the player's selection.
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




