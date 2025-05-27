function calculateArea(rectangle) {
  const width = rectangle.width;
  const height = rectangle.height;
  
  // Assuming area is calculated as length multiplied by breadth
  const area = width * height;
  
  return area;
}

// Example usage:
const rectangle1 = { width: 5, height: 3 };
console.log(calculateArea(rectangle1)); // Output: 15

const rectangle2 = { width: 4, height: 6 };
console.log(calculateArea(rectangle2)); // Output: 24
