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

// QUESTÕES INICIANTES

// Questão 2: Conversão de Temperatura
// Pergunta: Você tem uma variável chamada temperaturaCelsius, que contém uma temperatura em graus Celsius. Escreva um algoritmo que converta essa temperatura para Fahrenheit e armazene o resultado em uma variável chamada temperaturaFahrenheit. Qual será o código correto para fazer essa conversão?

// Questão 3: Verificação de Par ou Ímpar
// Pergunta: Você tem uma variável chamada numero, que armazena um número inteiro. Escreva um algoritmo que verifique se esse número é par ou ímpar e armazene a string "par" ou "ímpar" em uma variável chamada resultado. Qual será o código correto para realizar essa verificação?

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