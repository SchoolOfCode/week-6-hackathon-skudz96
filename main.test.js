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

test("should return n for test init purposes", () => {
  // Arrange
  const n = 10;
  const expected = n;

  // Act
  const result = tongueTwister(n);

  // Assert
  expect(result).toBe(expected);
});

test("should return a sequence from 0 to n", () => {});

/* test("inputs should be numbers", () => {
  expect(() => tongueTwisterWrapper("test", "jest")).toThrow("Not a number");
});
 */
