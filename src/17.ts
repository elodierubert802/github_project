// A simple program to demonstrate TypeScript type annotations and variable initialization
type Student = { name: string; age: number };
let student = {
  name: "Alice",
  age: 18,
};

// Example of using a variable with type inference in TypeScript
function greetPerson(name: string): string {
  return `Hello, ${name}!`;
}

greetPerson("John");
