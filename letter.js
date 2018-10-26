function Letter(chosenChar){
    this.currentLetter;
    this.guessedRight = false;
    //Method to check letter and output if right or wrong
    this.statusUpdate(chosenChar){
        if (this.currentLetter == chosenChar){
            console.log(chosenChar);
            
        }
        else if (this.currentLetter != chosenChar){
            console.log('_');
        }
    },

    //Method 
    this.guessCheck(chosenChar){
        if (this.currentLetter == chosenChar){
            this.guessedRight = true;
            
        }
        else if (this.currentLetter != chosenChar){
            this.guessedRight = false;
        }
    },
};
