/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x: number) {
    let Array : string = x.toString();
    let newArray : string[] = [];
    let ReversedArray: string[] = [];

    for (let i = 0; i < Array.length; i++) {
        newArray  = newArray.concat(Array[i]);
        
    }   
    for (let j = Array.length -1 ; j >= 0; j--) {
        ReversedArray = ReversedArray.concat(Array[j]);
        
    }
    return newArray.toString() === ReversedArray.toString()

};


console.log(isPalindrome(1000021))
