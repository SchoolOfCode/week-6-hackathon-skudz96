import { test, expect } from "vitest";
import { tongueTwister, tongueTwisterWrapper } from "./main";

/* 
What should I be testing for?
Make tickets for:
Input must be number - Ticket 7
Start number must be less than end - Ticket 8
Error if numbers are negative - Ticket 9
Return numbers for a range - Ticket 6
Word replacement logic - Ticket 10
*/

// Come back to this, how to test for multiple scenarios? Same function but multiple tests?? Works
// Check if n's type is equal to number, rather than n directly

/* test("should return n for test init purposes", () => {
  // Arrange
  const n = 10;
  const expected = n;

  // Act
  const result = tongueTwister(n);

  // Assert
  expect(result).toBe(expected);
}); */

// Works
/* test("should return a sequence from 0 to n", () => {
  const n = 11;
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const result = tongueTwister(n);

  expect(result).toEqual(expected);
}); */

test("should return a sequence from 0 to n, correctly replacing numbers in the chosen range with words in instructions, based on divisibility", () => {
  const n = 15;
  const expected = [
    1,
    2,
    "purple",
    4,
    "burglar",
    "purple",
    "alarm",
    8,
    "purple",
    "burglar",
    11,
    "purple",
    13,
    "alarm",
    "purple-burglar",
  ];

  const result = tongueTwister(n);

  expect(result).toEqual(expected);
});

// Ignore these, copilot suggestions. Maybe come back to them though
/* test("inputs should be numbers", () => {
  expect(() => tongueTwisterWrapper("test", "jest")).toThrow("Not a number");
});
 */
