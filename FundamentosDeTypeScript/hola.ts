//tipos de datos en typescript

let hello : string = "Hola Mundo"
console.log(hello)

let edad : number = 1
let esMayor : boolean = true

let numeros : number[] = [1, 2, 3, 4, ]
let numer : Array<number> = [2, 3, 4, 5] 

let tupla : [string, number]
tupla = ["hola", 12]


//enumeradores

enum Color {
    ROJO,
    AZUL,
    VERDE
}

let color : Color = Color.AZUL

enum Numeros {
    UNO = 1,
    DOS = 2,
    TRES = 3
}

let numero : Numeros = Numeros.TRES
console.log('Numero', numero)

// tipo de dato any o unknown es como cuando no se definir de que tipo de datos es mi variable.

let variableX : unknown
variableX = 'Hola'
variableX = 5
variableX = false

let variableY : any
variableY = '12'
variableY = 12


//declarando funciones despues de los parentesis () : es para declara el tipo de dato que retorna

function sumar(n1: number, n2: number): number{
    return n1 + n2
}


//Clases 

class Persona {

    constructor(private nombre: string, private edad: number) {

    }

    public saludar (): string {
        return `Hola ${this.nombre} tengo ${this.edad} años` 
    }
}

let santiago: Persona = new Persona("Santiago", 24)
console.log(santiago.saludar())


//Interfaces muy utilizadas para definir modelos/firmas pero no funciones.
interface Perro {
    nombre: string;
    raza: string;
    edad: number
}

let lucas: Perro = {
    nombre: 'Lucas',
    raza: 'Pitbull',
    edad: 2
}