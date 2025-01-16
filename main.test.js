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

// Mass test that checks if function is fully functional
test("should return a sequence from 0 to n, correctly replacing numbers in the chosen range with words in instructions, based on divisibility", () => {
  const n = 105;

  const expected = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      expected.push("purple-burglar-alarm");
    } else if (i % 3 === 0 && i % 5 === 0) {
      expected.push("purple-burglar");
    } else if (i % 5 === 0 && i % 7 === 0) {
      expected.push("burglar-alarm");
    } else if (i % 3 === 0 && i % 7 === 0) {
      expected.push("purple-alarm");
    } else if (i % 3 === 0) {
      expected.push("purple");
    } else if (i % 5 === 0) {
      expected.push("burglar");
    } else if (i % 7 === 0) {
      expected.push("alarm");
    } else {
      expected.push(i);
    }
  }

  const result = tongueTwister(n);

  expect(result).toEqual(expected);
});

// Splitting different word replacements into seperate tests

// PURPLE
test("should replace numbers divisible by 3 with 'purple'", () => {
  const n = 105;
  const result = tongueTwister(n);

  expect(result[2]).toBe("purple");
});

// BURGLAR
test("should replace numbers divisibile by 5 with 'burglar'", () => {
  const n = 105;
  const result = tongueTwister(n);

  expect(result[4]).toBe("burglar");
});

// ALARM
test("should replace numbers divisible by 7 with 'alarm'", () => {
  const n = 105;
  const result = tongueTwister(n);

  expect(result[6]).toBe("alarm");
});

// PURPLE-ALARM
test("should replace numbers divisible by 3 AND 7 with 'purple-alarm'", () => {
  const n = 105;
  const result = tongueTwister(n);

  expect(result[20]).toBe("purple-alarm");
});

// PURPLE-BURGLAR
test("should replace numbers divisible by 3 AND 5 with 'purple-burglar'", () => {
  const n = 105;
  const result = tongueTwister(n);

  expect(result[14]).toBe("purple-burglar");
});

// BURGLAR-ALARM
test("should replace numbers divisible by 5 and 7 with 'burglar-alarm'", () => {
  const n = 105;
  const result = tongueTwister(n);

  expect(result[34]).toBe("burglar-alarm");
});

// PURPLE-BURGLAR-ALARM
test("should replace numbers divisible by 3, 5 AND 7 with 'purple-burglar-alarm'", () => {
  const n = 105;
  const result = tongueTwister(n);

  expect(result[104]).toBe("purple-burglar-alarm");
});

// Numbers
test("should print numbers up to n'", () => {
  const n = 105;
  const result = tongueTwister(n);
  const expected = [];

  for (let i = 1; i <= n; i++) {
    expected.push(i);
  }

  expect(result).toEqual(expected);
});
