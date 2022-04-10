// ./exercises.ts

export function greeter(name: string): string {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number): string {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function rhombus(d: number, D: number): number {
  return d * D / 2;
}

export function trapeze(b: number, B: number, h: number): number {
  return ((b + B) * h) / 2;
}

export function circle(r: number): number {
  return Math.PI * Math.pow(r, 2);
}