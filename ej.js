const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));
let num3 = parseFloat(prompt("Introduce el tercer número:"));

let mayor = Math.max(num1, num2, num3);
let menor = Math.min(num1, num2, num3);
let centro = num1 + num2 + num3 - mayor - menor;

console.log("De mayor a menor: " + mayor + ", " + centro + ", " + menor);

console.log("De menor a mayor: " + menor + ", " + centro + ", " + mayor);

if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son iguales.");
} else if (num1 === num2 || num1 === num3 || num2 === num3) {
    console.log("Hay dos números iguales.");
} else {
    console.log("Los tres números son diferentes.");
}