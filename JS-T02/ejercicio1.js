//Contar la can*dad de palabras en un texto


let text = "hola como te va"

function contarPalabras(texto) {

    let palabras = texto.split('');
    palabras = palabras.filter(function(palabra) {
        return palabra.trim() !== '';

    });

    return palabras.length;

   }

   let contador = contarPalabras(text);

   console.log("La cantidad de palabras es", contador);