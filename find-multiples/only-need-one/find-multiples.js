// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . 
// If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting
// of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// declare variable and assign it to an empty array
// for loop and have the i counter = the integer parameter, set i <= to limit i += itself, so it will output it multiplying
// push it into the empty limits array
// reutrn the array outside of the for loop


function findMultiples(integer, limit) {
    let limits = [];
  
    for(let i = integer; i <= limit; i += integer) {
      limits.push(i)
    }
    return limits
  }
  
  console.log(findMultiples(5, 25))
  console.log(findMultiples(4, 27))
  console.log(findMultiples(11, 54))