//tipos de datos en typescript
var hello = "Hola Mundo";
console.log(hello);
var edad = 1;
var esMayor = true;
var numeros = [1, 2, 3, 4,];
var numer = [2, 3, 4, 5];
var tupla;
tupla = ["hola", 12];
//enumeradores
var Color;
(function (Color) {
    Color[Color["ROJO"] = 0] = "ROJO";
    Color[Color["AZUL"] = 1] = "AZUL";
    Color[Color["VERDE"] = 2] = "VERDE";
})(Color || (Color = {}));
var color = Color.AZUL;
var Numeros;
(function (Numeros) {
    Numeros[Numeros["UNO"] = 1] = "UNO";
    Numeros[Numeros["DOS"] = 2] = "DOS";
    Numeros[Numeros["TRES"] = 3] = "TRES";
})(Numeros || (Numeros = {}));
var numero = Numeros.TRES;
console.log('Numero', numero);
// tipo de dato any o unknown es como cuando no se definir de que tipo de datos es mi variable.
var variableX;
variableX = 'Hola';
variableX = 5;
variableX = false;
var variableY;
variableY = '12';
variableY = 12;
//declarando funciones despues de los parentesis () : es para declara el tipo de dato que retorna
function sumar(n1, n2) {
    return n1 + n2;
}
//Clases 
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        return "Hola " + this.nombre + " tengo " + this.edad + " a\u00F1os";
    };
    return Persona;
}());
var santiago = new Persona("Santiago", 24);
console.log(santiago.saludar());
