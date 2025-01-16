/*  
    Hello challenger! Here are your instructions:
    You are given 5 words, each assigned with a number -

                3 => Bold
                5 => Bugs
                7 => Build
                9 => Big
                11 => Binaries

    Your task is to write a function named "tongueTwister" which takes in 2 numbers as parameters. These numbers indicate the ranges your function will cover, For example, inputting 1 and 50 would cause your function to return every number from 1 to 50.

    Every number that is divisible by 3, will instead return "bold" as a string. Every number that is divisible by 5 will instead return "bugs", and so on. 

    Most importantly: ANY OVERLAPS IN DIVISIBLE NUMBERS HAVE TO PRINT BOTH WORDS. For example, if 15 was to be returned, 15 is divisible by both 3 and 5, so it will instead return "bold-bugs"
*/

export function tongueTwister(numOne, numTwo) {
  /*  numOne = 1;
  numTwo = 50; */

  return numOne + ", " + numTwo;
}
