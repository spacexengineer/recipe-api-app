/**
/*  Dice with loaded sides
**/

class Dice {
  // default weights to 1, with a 6 sided dice
  // we also assume that the numbers of weights corresponds with the number of sides
  constructor(weights = [1, 1, 1, 1, 1, 1]) {
    this.weights = weights;
  }
  roll() {
    const { weights } = this;
    const weightSum = weights.reduce((a, b) => a + b, 0);

    // on each roll, we effectively "roll" for a random weight
    const randomWeight = Math.random() * weightSum;

    console.log("Here's the random rolled randomWeight ", randomWeight);

    let startRange = 0,
      idx = 0;
    let endRange = 0;
    for (let weight of weights) {
      endRange += weight;
      if (startRange < randomWeight && randomWeight <= endRange) return idx + 1;
      startRange = endRange;
      idx++;
    }
    // this should never happen...
    return "something went wrong, and the dice exploded";
  }
}

// high chance of a one
var testDice = new Dice([5.235, 1, 1, 1, 1, 1]);
console.log("Here is the side rolled onto: " + testDice.roll());

/*
// Given an array of integer ranges, return an array that merges all of the overlapping ranges from the original input.

// For example, given the input:
// [ [2,5], [9, 18], [8, 14], [34, 38], [21, 27], [30, 35], [37, 40]]
// expected output is: 
// [[2,5], [8, 18], [21, 27], [30, 40]].


*/

function mergeIntervals(arr) {
  const sortedArr = arr.sort((a, b) => a[0] - b[0]);
  const result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (result[result.length - 1][1] >= arr[i][0]) {
      const newMax = Math.max(result[result.length - 1][1], arr[i][1]);
      result[result.length - 1][1] = newMax;
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

const testArry = [
  [2, 5],
  [9, 18],
  [8, 14],
  [34, 38],
  [21, 27],
  [30, 35],
  [37, 40]
];
const testResultArray = [[2, 5], [8, 18], [21, 27], [30, 40]];

console.log(
  `Test passes for mergeIntervals: ${JSON.stringify(
    mergeIntervals(testArry)
  ) === JSON.stringify(testResultArray)}`
);
