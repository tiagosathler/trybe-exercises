import { exit } from "process";

export enum Colors {
  black = 'preta',
  white = 'branca',
  red = 'vermelha',
  silver = 'prata',
}

export enum Doors {
  lf = 'dianteira esquerda',
  rf = 'dianteira direita',
  lb = 'traseira esquerda',
  rb = 'traseira direita',
}

export enum Directions {
  left = 'esquerda',
  right = 'direita',
}

export class Car {
  _brand: string;
  _model: string;
  _color: Colors;
  _door: any;
  _doors: number;
  
  constructor(brand: string, model: string, color: Colors, doors: number) {
    this._brand = brand;
    this._color = color;
    this._model = model;
    this._doors = doors;
    this.validadateCar();
  }

  validadateCar(): void {
    if (this._doors !== 4 && this._doors !== 2) {
      console.log(`Não existe carro com ${this._doors} portas`);
      exit();
    }
  }

  validateDoors(door: Doors): boolean {
    if (this._doors === 2 && (door === Doors.lb || door === Doors.rb)) {
      console.log(`Porta ${door} do carro ${this._brand} não existe`);
      return false;
    }
    return true;
  }

  honk(): void {
    console.log(`Toca a buzina de ${this._model} da ${this._brand}`);
  }

  openTheDoor(door: Doors): void {
    if (this.validateDoors(door)) {
      console.log(`Abrindo a porta ${door} do carro ${this._model} da ${this._brand}`);
    }
  }
  
  closeTheDoor(door: Doors): void {
    if (this.validateDoors(door)) {
      console.log(`Fechando a porta ${door} do carro ${this._model} da ${this._brand}`);
    }
  }

  turnOn(): void {
    console.log(`Ligando o carro ${this._model} da ${this._brand}`);
  }
  
  turnOff(): void {
    console.log(`Desligando o carro ${this._model} da ${this._brand}`);
  }

  speedUp(): void {
    console.log(`Acelerando o carro ${this._model} da ${this._brand}`);
  }

  speedDown(): void {
    console.log(`Desacelerando o carro ${this._model} da ${this._brand}`);
  }

  stop(): void {
    console.log(`Parando o carro ${this._model} da ${this._brand}`);
  }

  turn(direction: Directions): void {
    console.log(`Virando o carro ${this._model} da ${this._brand} para a ${direction}`);
  }
}
