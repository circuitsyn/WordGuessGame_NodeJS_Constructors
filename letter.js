var chosenChar = process.argv[2];
var standingChar = process.argv[3];

function Letter(chosenChar, standingChar) {
    this.currentLetter = standingChar;
    this.guessedRight = false;
    this.chosenChar = chosenChar;
    //Method to check letter and output if right or wrong
    this.statusUpdate = function (){
        if (this.currentLetter == this.chosenChar){
            console.log(this.chosenChar);
            
        }
        else if (this.currentLetter != this.chosenChar){
            console.log('_');
        }
    };

    //Method 
    this.guessCheck = function (){
        if (this.currentLetter == this.chosenChar){
            this.guessedRight = true;
            console.log(this.guessedRight);
            
        }
        else if (this.currentLetter != this.chosenChar){
            this.guessedRight = false;
            console.log(this.guessedRight);
        }
    };
};

var tester = new Letter(chosenChar, standingChar);

tester.statusUpdate();
tester.guessCheck();


