/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
let piValue = Math.PI;
console.log(`PI value : ${piValue}`);

// Math sqrt
let sqrt = Math.sqrt(144);
console.log(`sqrt of 144 is : ${sqrt}`);

// find the min of 4 numbers
let min = Math.min(787,894,84,361,51,4,94,1,6,44,31,386,1,19);
console.log(`Min :  ${min}`);

// find the Max of 4 numbers
let max = Math.max(787,894,84,361,51,4,94,1,6,44,31,386,1,19);
console.log(`Max :  ${max}`);

// find the 'x' to the power of 'y' value, ex: 2^5
let pow = Math.pow(2 , 5);
console.log(`2 ^ 5 is : ${pow}`);

// generate the random numbers from 0 to 100
let random = Math.round(Math.random() * 100000);
console.log(random);


/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
let date = new Date();
console.log(date);

// Get proper date
let currentDate = date.toLocaleDateString();
console.log(currentDate);

// Current Time
let currentTime = date.toLocaleTimeString();
console.log(currentTime);

// get full day of the week using switch statement
let day = date.getDay();
let today = 'Today is : ';
switch(day){
    case 0:
        today += ' SUNDAY ';
        break;
    case 1:
        today += ' MONDAY ';
        break;
    case 2:
        today += ' TUESDAY ';
        break;
    case 3:
        today += ' WEDNESDAY ';
        break;
    case 4:
        today += ' THURSDAY ';
        break;
    case 5:
        today += ' FRIDAY ';
        break;
    case 6:
        today += ' SATURDAY ';
        break;
    default:
        today += ' Enter Proper Day Dude ';
        break;
}
console.log(today);

// Display a Digital Clock on the web page


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */
let minNumber = Number.MIN_SAFE_INTEGER;
console.log(minNumber);


let maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber);

let posInfinity = Number.POSITIVE_INFINITY;
console.log(posInfinity);

let negInfinity = Number.NEGATIVE_INFINITY;
console.log(negInfinity);

let num1 = 1000;
console.log(`Value : ${num1} Type : ${ typeof num1}`);

let str = num1.toString();
console.log(`Value : ${str} Type : ${ typeof str}`);

let str2 = '1000.456';
let num2 = Number.parseFloat(str2);
console.log(`Value : ${str2} Type : ${ typeof str2}`);
console.log(`Value : ${num2} Type : ${ typeof num2}`);

/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */

let wishMessage = 'Good Morning';
console.log(wishMessage);

// uppercase
console.log(wishMessage.toUpperCase()); // GOOD MORNING

// Lowercase
console.log(wishMessage.toLowerCase()); // good morning

// charAt
console.log(wishMessage.charAt(0)); // G

// charCodeAt
console.log(wishMessage.charCodeAt(0)); // 71

// substr
console.log(wishMessage.substr(0,4)); // Good

// substr
console.log(wishMessage.substr(5)); // Morning

// trim
let msg1 = ' Apple ';
let msg2 = msg1.trim();
console.log(msg1.length); // 7
console.log(msg2.length); // 5

if('Good' === 'Good'){
    console.log('Equal');
}
else{
    console.log('Not Equal');
}

// Example : Count the number of 'a' in the given string
let message = 'aabbAbc';
let countAs = (str) => {
    let count = 0;
    for(let i=0 ; i<str.length; i++){
        let ch = str.charAt(i);
        if(ch === 'a' || ch === 'A'){
            count++;
        }
    }
    return count;
};
console.log(countAs(message));

// Example : ReverseString
message = 'Good Morning'; // gninroM dooG
let reverseString = (str) => {
   let tempStr = '';
   for(let i = str.length-1 ; i >= 0 ; i--){
       let ch = str.charAt(i);
       tempStr += ch;
   }
   return tempStr;
};
console.log(reverseString(message));

// Example 3 : isPalindrome or Not
message = 'ABCBA';
let isPalindrome = (str) => {
    return str === reverseString(str);
};
console.log(`${message} is Palindrome ? : ${isPalindrome(message)}`);

// Example 4 : Convert to Palindrome String
message = 'AB';
let convertToPalindrome = (str) => {
    return str + reverseString(str.substr(0,str.length-1));
};
console.log(`${message} => ${convertToPalindrome(message)}`);

// Example 5 : 123 -> ONE TWO THREE
let theNumber = '0456';
let convertToWordNumber = (str) => {
    let tempStr = '';
    for(let i=0; i<str.length; i++){
        let digit = Number.parseInt(str.charAt(i));
        switch(digit){
            case 0:
                tempStr += ' ZERO ';
                break;
            case 1:
                tempStr += ' ONE ';
                break;
            case 2:
                tempStr += ' TWO ';
                break;
            case 3:
                tempStr += ' THREE ';
                break;
            case 4:
                tempStr += ' FOUR ';
                break;
            case 5:
                tempStr += ' FIVE ';
                break;
            case 6:
                tempStr += ' SIX ';
                break;
            case 7:
                tempStr += ' SEVEN ';
                break;
            case 8:
                tempStr += ' EIGHT ';
                break;
            case 9:
                tempStr += ' NINE ';
                break;
        }
    }
    return tempStr;
};
console.log(convertToWordNumber(theNumber));

// Example 6 : display Word Number
theNumber = '0456';
let numbers = ['ZERO' , 'ONE' , 'TWO' ,'THREE' , 'FOUR' , 'FIVE' , 'SIX' , 'SEVEN' , 'EIGHT' , 'NINE'];
let displayWordNumber = (str) => {
    let tempStr = '';
    for(let i=0; i<str.length; i++) {
        let digit = Number.parseInt(str.charAt(i));
        tempStr += ` ${numbers[digit]} `;
    }
    return tempStr;
};
console.log(displayWordNumber(theNumber));