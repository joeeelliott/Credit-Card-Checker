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

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]; // ODD, NO.s TO DOUBLE: [0, 6, 6, 6, 0, 0, 7, 1, 0]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]; // EVEN, NO.s TO DOUBLE: [2, 2, 0, 6, 0, 5, 1, 4]


const validateCred = arr => { 
    let checkDigit = arr[arr.length-1]; //= array[last index value]
    let sum = checkDigit;   // sum will begin with far right number
    let doubleVal;
    for(let i = arr.length - 2; i >= 0; i--){ // iterate from right to left(excluding check digit)
        if(arr.length % 2 === 0){  // targets arrays of even length
console.log(`this is an EVEN length array`)
console.log(`      CHECK DIGIT: ${checkDigit}`)
            if(i % 2 === 0){        // targets every other number 
console.log(`TO DOUBLE: INDEX[${i}],  VALUE [${arr[i]}]`)
                doubleVal = arr[i] * 2;  //doubles targeted numbers
console.log(`DOUBLED VALUE = ${doubleVal}`)
                if(doubleVal > 9){   // targets doubled nums > 9
                doubleVal -= 9;         // subtracts 9
console.log(`VALUE OVER 9. SUBTRACT 9 = ${doubleVal}`)                
            } 
console.log(`INDEX[${i}],   FINAL VALUE[${doubleVal}]`)
            sum += doubleVal;       // adds numbers to sum
console.log(sum)
            } else {
console.log(`NOT TO DOUBLE INDEX[${i}],  VALUE[${arr[i]}]`)
console.log(`INDEX[${i}],   FINAL VALUE[${arr[i]}]`)
                sum += arr[i];   // adds numbers not doubled to sum
console.log(sum)
            }
        } else {                   // targets arrays of odd length
            if(i % 2 !== 0){        // targets every other number 
console.log(`this is an ODD length array`)
console.log(`      CHECK DIGIT: ${checkDigit}`)
console.log(`TO DOUBLE: INDEX[${i}],  VALUE [${arr[i]}]`)
                doubleVal = arr[i] * 2;   // doubles targeted numbers
console.log(`DOUBLED VALUE = ${doubleVal}`)
                if(doubleVal > 9){   // targets doubled nums > 9
                    doubleVal -= 9;         // subtracts 9
console.log(`VALUE OVER 9. SUBTRACT 9 = ${doubleVal}`)
                }
console.log(`INDEX[${i}],   FINAL VALUE[${doubleVal}]`)
                sum += doubleVal;       // adds numbers to sum
console.log(sum)
            } else {  
console.log(`NOT TO DOUBLE INDEX[${i}],  VALUE[${arr[i]}]`)
console.log(`INDEX[${i}],   FINAL VALUE[${arr[i]}]`)
                sum += arr[i];   // adds numbers not doubled to sum
console.log(sum)
            }
        }       
    }      
console.log(`final sum = ${sum}`) 
    return (sum%10 === 0 ? true : false);   //? valid : invalid
};


console.log(validateCred(valid1))