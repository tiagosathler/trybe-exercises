"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.Directions = exports.Doors = exports.Colors = void 0;
const process_1 = require("process");
var Colors;
(function (Colors) {
    Colors["black"] = "preta";
    Colors["white"] = "branca";
    Colors["red"] = "vermelha";
    Colors["silver"] = "prata";
})(Colors = exports.Colors || (exports.Colors = {}));
var Doors;
(function (Doors) {
    Doors["lf"] = "dianteira esquerda";
    Doors["rf"] = "dianteira direita";
    Doors["lb"] = "traseira esquerda";
    Doors["rb"] = "traseira direita";
})(Doors = exports.Doors || (exports.Doors = {}));
var Directions;
(function (Directions) {
    Directions["left"] = "esquerda";
    Directions["right"] = "direita";
})(Directions = exports.Directions || (exports.Directions = {}));
class Car {
    constructor(brand, model, color, doors) {
        this._brand = brand;
        this._color = color;
        this._model = model;
        this._doors = doors;
        this.validadateCar();
    }
    validadateCar() {
        if (this._doors !== 4 && this._doors !== 2) {
            console.log(`Não existe carro com ${this._doors} portas`);
            (0, process_1.exit)();
        }
    }
    validateDoors(door) {
        if (this._doors === 2 && (door === Doors.lb || door === Doors.rb)) {
            console.log(`Porta ${door} do carro ${this._brand} não existe`);
            return false;
        }
        return true;
    }
    honk() {
        console.log(`Toca a buzina de ${this._model} da ${this._brand}`);
    }
    openTheDoor(door) {
        if (this.validateDoors(door)) {
            console.log(`Abrindo a porta ${door} do carro ${this._model} da ${this._brand}`);
        }
    }
    closeTheDoor(door) {
        if (this.validateDoors(door)) {
            console.log(`Fechando a porta ${door} do carro ${this._model} da ${this._brand}`);
        }
    }
    turnOn() {
        console.log(`Ligando o carro ${this._model} da ${this._brand}`);
    }
    turnOff() {
        console.log(`Desligando o carro ${this._model} da ${this._brand}`);
    }
    speedUp() {
        console.log(`Acelerando o carro ${this._model} da ${this._brand}`);
    }
    speedDown() {
        console.log(`Desacelerando o carro ${this._model} da ${this._brand}`);
    }
    stop() {
        console.log(`Parando o carro ${this._model} da ${this._brand}`);
    }
    turn(direction) {
        console.log(`Virando o carro ${this._model} da ${this._brand} para a ${direction}`);
    }
}
exports.Car = Car;
