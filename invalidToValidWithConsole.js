const invalidToValid = arr => {
    let checkDigit = arr[arr.length-1]; // array[last index value]
    let sum = checkDigit;   // sum will begin with far right number
    let doubleVal; 
    for(let i = arr.length - 2; i >= 0; i--){   // iterate from right to left(excluding check digit)
        if(arr.length % 2 === 0){       // if array is even
//console.log(`this is an EVEN length array`)
//console.log(`      CHECK DIGIT: ${checkDigit}`)
            if(i % 2 === 0){  // targets every other number 
console.log(`TO DOUBLE: INDEX[${i}],  VALUE [${arr[i]}]`)
                doubleVal = arr[i] * 2;  // doubles every other number
console.log(`DOUBLED VALUE = ${doubleVal}`)
                if(doubleVal > 9){   // targets doubled nums over 9
                    doubleVal -= 9;   // subtracts 9 
console.log(`VALUE OVER 9. SUBTRACT 9 = ${doubleVal}`)
                } 
console.log(`INDEX[${i}],   FINAL VALUE[${doubleVal}]`)
                sum += doubleVal    // // adds numbers to sum
console.log(sum)
            } else {
console.log(`NOT TO DOUBLE INDEX[${i}],  VALUE[${arr[i]}]`)
console.log(`INDEX[${i}],   FINAL VALUE[${arr[i]}]`)
                sum += arr[i]     // adds numbers not doubled to sum
console.log(sum)
            }
        } else {    //odd length array
            if(i % 2 !== 0){  // targets every other number 
console.log(`this is an ODD length array`)
console.log(`      CHECK DIGIT: ${checkDigit}`)
console.log(`TO DOUBLE: INDEX[${i}],  VALUE [${arr[i]}]`)
                doubleVal = arr[i] * 2;  // doubles every other number
console.log(`DOUBLED VALUE = ${doubleVal}`)
                if(doubleVal > 9){   // targets doubled nums over 9
                    doubleVal -= 9;   // subtracts 9 from it
console.log(`VALUE OVER 9. SUBTRACT 9 = ${doubleVal}`)
                }
console.log(`INDEX[${i}],   FINAL VALUE[${doubleVal}]`)
                sum += doubleVal;       // adds numbers to sum
console.log(sum)
            } else {
console.log(`NOT TO DOUBLE INDEX[${i}],  VALUE[${arr[i]}]`)
console.log(`INDEX[${i}],   FINAL VALUE[${arr[i]}]`)
                sum += arr[i];      // adds numbers not doubled to sum
console.log(sum)
            }
        }
    }
    if(sum % 10 === 0){      // if sum is divisible by 10 with 0 remainder
        return `Your card is valid`;
    } else {
console.log(`sum POST checkDigit: ${sum}`)
        sum -= checkDigit;  // remove checkDigit to see what number should replace it
console.log(`sum PRE checkDigit: ${sum}`)
console.log(`checkDigit was: ${checkDigit}`)

        if(sum % 10 !== 0){   // if sum (- checkDigit) is not / by 10
            if(sum % 10 === 1){         // if remainder = 1 ...
                checkDigit = 9  //checkDigit = 9 to make total sum / by 10
                arr[arr.length-1] = checkDigit; // save to original array
            } else if(sum % 10 === 2){      // if remainder = 2 ...
                checkDigit = 8  //checkDigit = 8 to make total sum / by 10
                arr[arr.length-1] = checkDigit; // save to original array
            } else if(sum % 10 === 3){      // if remainder = 3 ...
                checkDigit = 7  //checkDigit = 7 to make total sum / by 10
                arr[arr.length-1] = checkDigit; // save to original array
            } else if(sum % 10 === 4){
                checkDigit = 6
                arr[arr.length-1] = checkDigit;
            } else if(sum % 10 === 5){
                checkDigit = 5
                arr[arr.length-1] = checkDigit;
            } else if(sum % 10 === 6){
                checkDigit = 4
                arr[arr.length-1] = checkDigit;
            } else if(sum % 10 === 7){
                checkDigit = 3
                arr[arr.length-1] = checkDigit;
            } else if(sum % 10 === 8){
                checkDigit = 2
                arr[arr.length-1] = checkDigit;
            } else if(sum % 10 === 9){
                checkDigit = 1
                arr[arr.length-1] = checkDigit;
            }
        } else {        // if remainder = 0 ...
            checkDigit = 0    // checkDigit = 0 to make total sum / by 10
            arr[arr.length-1] = checkDigit;   // save to original array
        }

console.log(`to make divisible by 10, checkDigit is now: ${checkDigit}`);
        sum += checkDigit;       // add new checkDigit to the sum
console.log(`total sum is now: ${sum}`);        
    
        return (sum%10 === 0 ? `Card invalid. New valid card number: ${arr.join(" ")}` : `invalid`);      // if sum now / by 10 return new card number with mutated final digit, else return invalid
    }
};

const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]; // ODD, NO.s TO DOUBLE: [0, 6, 6, 6, 0, 0, 7, 1, 0]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]; // EVEN, NO.s TO DOUBLE: [2, 2, 0, 6, 0, 5, 1, 4]

console.log(invalidToValid(invalid1))