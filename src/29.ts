// Importing necessary functions and packages if any
if (!window.Math.random) {
  window.Math.random = Math.random;
}

function getRandomNumber(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function getEvenOdd(number: number): string {
  return number % 2 === 0 ? "even" : "odd";
}
