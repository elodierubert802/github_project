// Code generation script to create TypeScript code from an example program

import { default as Buffer } from 'buffer';

export function main(): void {
  const data = new Buffer([15, 23, 48, 97]);
  
  console.log(data.toString('hex'));
}

main();
