class PlaceHolderWrittingAnimation{

    constructor(inputId, phrasesCollection){
        this.inputIdElement = document.getElementById(inputId);
        this.phrasesCollection = phrasesCollection;
        this.animationStopped = false;

        this.printPhrases();
    }

    stopAnimation(){
        this.animationStopped = true;
    }

    printPhrases(){
        this.clearPlaceholder(this.inputIdElement);
        this.phrasesCollection.reduce(
                (promise, phrase) => promise.then(_ => this.printPhrase(phrase)), 
                Promise.resolve()
        );
    }
    
    printPhrase(phrase) {
        return new Promise(resolve => {
            // Clear placeholder before typing next phrase
            this.clearPlaceholder(this.inputIdElement);
            let letters = phrase.split('');
            // For each letter in phrase
            letters.reduce((promise, letter, index) => promise.then(_ => {
                        // Resolve promise when all letters are typed
                        if (index === letters.length - 1) {
                            // Delay before start next phrase "typing"
                            setTimeout(resolve, 2000);
                        }
                        return this.addToPlaceholder(letter);
                }),
                Promise.resolve()
            );
        });
    } 
    
    addToPlaceholder(toAdd) {
        if(!this.animationStopped){
            this.inputIdElement.setAttribute('placeholder',  this.inputIdElement.getAttribute('placeholder') + toAdd);
            if(this.inputIdElement.getAttribute('placeholder') + toAdd === this.phrasesCollection[this.phrasesCollection.length-1])
                setTimeout(()=>{ this.printPhrases() }, 2000);                
        }            
                    // Delay between symbols "typing" 
        return new Promise(resolve => setTimeout(resolve, 500));
    }
    clearPlaceholder(){
        this.inputIdElement.setAttribute("placeholder", "");
    }
}

export { PlaceHolderWrittingAnimation };