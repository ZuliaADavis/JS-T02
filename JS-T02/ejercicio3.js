function encontrarDuplicados(arr) {
    let numerosVistos = {};
    let duplicados = [];

    for (let i = 0; i < arr.length; i++) {
        if (numerosVistos[arr[i]] !== undefined) {
            
            if (numerosVistos[arr[i]] === 1) {
                duplicados.push(arr[i]);
            }
            numerosVistos[arr[i]]++;
        } else {
           
            numerosVistos[arr[i]] = 1;
        }
    }

    return duplicados;
}

// Ejemplo de uso
const numeros = [1, 2, 3, 2, 4, 5, 6, 5, 7];
const duplicados = encontrarDuplicados(numeros);
console.log("Números duplicados: ", duplicados); // Salida: [2, 5]