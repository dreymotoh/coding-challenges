// Title: Square Every Digit

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// directly return starting with Number method 
// convert the num parameter to a string 
// split the string into an array 
// map through by creating an arrow function and multiply each element by itself (square)
// use join to join the elements back to a string

function squareDigits(num){
    return Number(num.toString().split('').map(elem => elem * elem).join(''));
}
console.log(squareDigits(3212))