// This is a simple example demonstrating how to use TypeScript and functional programming.
// It demonstrates basic usage of conditional expressions in the TS language.

// Define an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// Use a for loop to iterate over the array
for (let i = 0; i < numbers.length; i++) {
    console.log(`The ${i + 1}th number is: ${numbers[i]}`);
}

// Create an object of names and their corresponding ages
const people: { [key: string]: number } = {
    'Alice': 25,
    'Bob': 30,
    'Charlie': 35
};

// Print the name and age for each person in the object
for (const [name, age] of Object.entries(people)) {
    console.log(`The ${name} is ${age} years old.`);
}
