# [purple-burglar-alarm](https://www.youtube.com/watch?v=AC__o1UxDl8)

This is a CodeWars kata-like challenge created for the School of Code Week 6 Hackathon.

## Instructions

This is a revamped version of everyone's favourite challenge - **FizzBuzz**. The instructions for this revamped challenge are as follows:

1. The function takes **one number** as an argument, `n`.
2. The user should start by declaring an **empty array**.
3. Populate the array with **every number** from 1 to `n`(this will pass the first test).
4. Once the first test is passing, refactor your function to meet the following criteria (there will be 8 tests to pass in total, don't worry if the first starts failing):

- if `n` is divisible by 3, return **"purple"**.
- if `n` is divisible by 5, return **"burglar"**.
- if `n` is divisible by 7, return **"alarm"**.

- if there is any **overlap** in number divisibility, concatenate the words with a "-":

  For Example:
  in the case that n = 15: divisible by both 3 and 5, return **"purple-burglar"**
  in the case that n = 21: divisible by both 3 and 7, return **"purple-alarm"**
  And so on.

## Want to try?

1. Clone this project to your local machine:

```bash
git clone git@github.com:SchoolOfCode/week-6-hackathon-skudz96.git
```

2. Navigate to the project folder:

```bash
cd week-6-hackathon-skudz96
```

3. Install packages (should download vitest):

```bash
npm install
```

In case you don't see vitest in the package.json:

```bash
npm install vitest
```

4. Run the test script, head over to main.js, and see the test feedback in the console!

```bash
npm run test
```

## Good Luck!

I hope you enjoy solving this challenge and sharpening your coding skills.
