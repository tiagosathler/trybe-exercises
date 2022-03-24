import { Car, Colors, Doors, Directions } from './cars';

let myCar = new Car('Ford', 'Focus', Colors.black, 4);

myCar.honk();
myCar.openTheDoor(Doors.lf);
myCar.closeTheDoor(Doors.lf);
myCar.openTheDoor(Doors.rf);
myCar.closeTheDoor(Doors.rf);
myCar.openTheDoor(Doors.lb);
myCar.closeTheDoor(Doors.lb);
myCar.openTheDoor(Doors.rb);
myCar.closeTheDoor(Doors.rb);
myCar.turnOn();

myCar.speedUp();
myCar.turn(Directions.left);
myCar.speedDown();
myCar.turn(Directions.right);
myCar.stop();
myCar.turnOff();

console.log(myCar);