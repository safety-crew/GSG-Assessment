"use strict";

// JavaScript Fundamentals: Task 2
const nums = [5, 10, 15, 20];
findTotalSumAndAverage();

function findTotalSumAndAverage() {
  const total = nums.reduce(totalSum);
  const average = nums.reduce(totalAverage, 0);

  console.log(`Total: ${total}\nAverage: ${average}`);

  function totalSum(accumulator, currentValue) {
    return accumulator + currentValue;
  }

  function totalAverage(accumulator, currentValue) {
    return accumulator + currentValue / nums.length;
  }
}

// JavaScript Fundamentals: Task 3
const strs = ["Aman", "Ahmad", "Hasan", "Ahmad", "Khaled", "Hasan"];
const strSet = new Set(strs);
const filteredStrs = [...strSet];

console.log(filteredStrs);
