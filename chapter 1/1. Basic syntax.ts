// ➡️ Type declarations

var nameOfUser: string = "Klecianny";
var age: number = 28;
var isStudent: boolean = true;

console.log(`Olá, meu nome é ${nameOfUser}, eu tenho ${age} anos e ${isStudent ? "eu" : "não"} sou estudante.`);
// Olá, meu nome é Klecianny, eu tenho 28 anos e eu sou estudante.

// 📝 Exercises

function calculaMedia(nota1: number, nota2: number): number {
    return (nota1 + nota2) / 2;
}

console.log('A média é: ', calculaMedia(10, 5));
// A média é: 7.5

const temperaturaCelsius: number = 30;

function converterTemperatura(temperaturaCelsius: number): number {
  return (temperaturaCelsius * 1.8) + 32;
}

console.log(`A temperatura em Fahrenheit é ${converterTemperatura(temperaturaCelsius)}°F`);
// A temperatura em Fahrenheit é 86°F

const numero: number = 2;

function verificaParOuImpar(numero: number): string {
  var resultado: string;

  if (numero % 2 === 0) {
    resultado = "par";
  } else {
    resultado = "ímpar";
  }


  return resultado;
}

console.log(`O número ${numero} é ${verificaParOuImpar(numero)}`);
// O número 2 é par

// 👉🏾 QUESTÕES DE NÍVEL INTERMEDIÁRIO (COM BOOLEAN)

// 🔵 Arrays

let numbers: Array<number> = [1, 2, 3, 4, 5];

const cars: string[] = ["Volvo", "BMW", "Mercedes", "Audi"];

// 🔵 Tuples

let petTuple: [string, number, boolean];

petTuple = ["cat", 5, true];

// 🔵 Objects

type Music = {
  name: string;
  artist: string;
  year: number;
};

let myMusic: Music = {
  name: "Um índio",
  artist: "Caetano Veloso",
  year: 1976,
};

const bestSoccerTeams: { [key: number]: string } = {
  1: "Real Madrid",
  2: "Barcelona",
  3: "Manchester United",
};