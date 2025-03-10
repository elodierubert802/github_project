function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

const numbers = Array(getRandomInt(10)).fill(null).map(() => getRandomInt(100));
console.log(numbers);
