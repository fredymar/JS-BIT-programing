// console.log("hello world")

// function suma (num1, num2) {
//     console.log(num1 + num2)
// }
//suma(2,3)

// Dado un numero el estudiante debe construir un algoritmo que le imprima el sifguiente numero primo a ese

// Restricciones
// El usuario debe escribir el numero por consola o por prompt y este debe responderle con el numero primo siguiente a ese numero
// si el numero ingresado por el usuario no es un numero primo este debe indicarle al usuario que el numero no es primo

let numero = window.prompt("ingrese un numero", "")
for (let i = numero; i <= numero * 2; i++) { 
    let num = 0
    for (let j = 0; j <= numero * 2; j++) {
        if (i % j === 0) { 
            num += 1
        }
    }

    if (num === 2) {
        primo = true // si es primo
    }

    if (i < numero*2) {
        if (num === 2 && numero < i) {
            if (primo) {
                alert("Es primo "+ i)
                break;
            }else{
                alert("no es primo")
                break;
            }
        }  
    }
}