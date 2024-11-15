document.getElementById("demo").innerHTML = "Hello JavaScript";
document.getElementById("demo").style.fontSize = "35px";

//Salida de datos 
window.alert("HOLA, COMO ESTAS?");
window.alert(5+2);
console.log(6+2);

//Declaracion de varibles
let a,b,c;
const M = 8;
a = 5;
b = 6;
c = a + b + M;
document.getElementById("demo").innerHTML = c;

// Tipos de datos
let num = 24;
let name = "Juan carlos bolaños"; // cadena de caracteres
let km = 14.5; // Numero decimal
let persona ={firstName:"ANA", lastName:"PEREZ"}; //Objeto

let y = 17 + "POO"; //JavaScript trata al numero como una cadena
let q = "17" + "POO"; 

// Operadores aritmeticos
let num1 = 8; num2 = 4;
let suma, resta, multiplicacion, division;
suma = num1 + num2;
resta = num1 - num2;
multiplicacion = num1 * num2;
division = num1 / num2;
document.getElementById("operaciones").innerHTML = 
"La suma es:  " + suma + "la resta es:  " + resta + "la multiplicacion es:  " 
+ multiplicacion +  "la division"  + division;

//Operadores de comparacion
let edad = 24;
document.getElementById("comparacion").innerHTML = (edad >= 18);

//Operadores logicos 
let num4 = 6, num5 = 3;
document.getElementById("logicos").innerHTML = 
(num4 < 10 && num5 > 1) + "<br>" + (num4 < 10 && num5 < 1);

//Fumciones 
function myfunction (){
    document.getElementById("demo").innerHTML = "New paragraph"}
