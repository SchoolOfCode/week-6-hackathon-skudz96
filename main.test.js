import { test, expect } from "vitest";
import { tongueTwister } from "./main";

test("should return 1, 50 for test init purposes", () => {
  // Arrange
  const numOne = 25;
  const numTwo = 50;
  const expected = numOne + ", " + numTwo;

  // Act
  const result = tongueTwister(numOne, numTwo);

  // Assert
  expect(result).toBe(expected);
});
