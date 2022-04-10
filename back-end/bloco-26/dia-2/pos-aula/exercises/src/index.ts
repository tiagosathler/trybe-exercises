import { Car, Colors, Doors, Directions } from './cars';
import { main } from './pizzas';

let myCar = new Car('Ford', 'Focus', Colors.black, 4);
console.log(myCar);

// myCar.honk();
// myCar.openTheDoor(Doors.lf);
// myCar.closeTheDoor(Doors.lf);
// myCar.openTheDoor(Doors.rf);
// myCar.closeTheDoor(Doors.rf);
// myCar.openTheDoor(Doors.lb);
// myCar.closeTheDoor(Doors.lb);
// myCar.openTheDoor(Doors.rb);
// myCar.closeTheDoor(Doors.rb);
// myCar.turnOn();

// myCar.speedUp();
// myCar.turn(Directions.left);
// myCar.speedDown();
// myCar.turn(Directions.right);
// myCar.stop();
// myCar.turnOff();

// exercício 2:
console.log('==> Ligue o carro:/n');
myCar.turnOn();
console.log('...');

console.log('==> Siga em frente!/n');
myCar.speedUp();
console.log('...');

console.log('==> Em 600 metros vire a esquerda:/n');
myCar.speedDown();
myCar.stop();
myCar.speedUp();
myCar.turn(Directions.left);
console.log('...');

console.log('==>  Em 200 metros na rotatória pegue a segunda saída a direita:/n');
myCar.speedDown();
myCar.turn(Directions.right);
console.log('...');

console.log('==> Mantenha em frente pelos próximos 1,2 quilômetros:/n');
myCar.speedUp();
console.log('...');

console.log('==> Em 300 metros vire a direita:/n');
myCar.speedDown();
myCar.stop();
myCar.speedUp();
myCar.turn(Directions.right);
console.log('...');

console.log('==> Em 400 metros você chegará ao seu destino:/n');
myCar.speedUp();
myCar.speedDown();
myCar.stop();
myCar.openTheDoor(Doors.rf);
myCar.closeTheDoor(Doors.rf);
console.log('...');

console.log('==> Siga em frente!/n');
myCar.speedUp();
console.log('...');

console.log('==> Em 300 metros vire a direita:/n');
myCar.speedDown();
myCar.stop();
myCar.speedUp();
myCar.turn(Directions.right);
console.log('...');

console.log('==> Mantenha em frente pelos próximos 2 quilômetros:/n');
myCar.speedUp();
console.log('...');

console.log('==> Em 200 metros vire a esquerda:/n');
myCar.speedDown();
myCar.stop();
myCar.speedUp();
myCar.turn(Directions.left);
console.log('...');

console.log('==> Em 400 metros vire a direita:/n');
myCar.speedDown();
myCar.stop();
myCar.speedUp();
myCar.turn(Directions.right);
console.log('...');

console.log('==> Em 400 metros você chegará ao seu destino:/n');
myCar.speedUp();
myCar.speedDown();
myCar.stop();
myCar.turnOff();
myCar.openTheDoor(Doors.rf);
myCar.closeTheDoor(Doors.rf);
console.log('...');

// exercício 3 e 4:
main();