/**
 * @param {string} s
 * @return {number}
 */

// First we Initialize 3 var's one for the sum two arrays one for letters and one to save the converted letters as numbers
// we loop over the strings and add them to array so we can convert them to numbers
// we loop over the numbers and see if the next value bigger then the current we subtract
// we return the sum

var romanToInt = function (s) {
  
    let sum = 0;
    let LettersArray = []
    let numbersArray = []

    for (let i = 0; i < s.length; i++) {
        LettersArray = LettersArray.concat(s[i])
    }
    for (let j = 0; j < s.length; j++) {

        if (LettersArray[j] == 'I') {
           numbersArray = numbersArray.concat(1)
        } else if (LettersArray[j] === 'V') {
           numbersArray =  numbersArray.concat(5)
        }
        else if (LettersArray[j] === 'X') {
           numbersArray = numbersArray.concat(10)
        }
        else if (LettersArray[j] === 'L') {
           numbersArray = numbersArray.concat(50)
        }
        else if (LettersArray[j] === 'C') {
           numbersArray = numbersArray.concat(100)
        }
        else if (LettersArray[j] === 'D') {
           numbersArray = numbersArray.concat(500)
        }
        else if (LettersArray[j] === 'M') {
           numbersArray = numbersArray.concat(1000)
        }
        
    }
    for (let k = 0; k < numbersArray.length; k++) {
        if (numbersArray[k] < numbersArray[k + 1]) {
            sum -= numbersArray[k]
        } else {
            sum += numbersArray[k]
        }
        
    }
    return sum;
};



console.log(romanToInt("MCMXCIV"))