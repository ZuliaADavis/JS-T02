let estudiantes = [
   {nombre: "Zulia", nota1: 65, nota2: 65, nota3:65},
   {nombre: "Azalia", nota1: 90, nota2: 95, nota3:91}
];


function calcularPromedioNotas(estudiantes) {
    let sum = 0;
    let cantidadNotas = 0;

    for (let i = 0; i < estudiantes.length; i++) {
        sum += estudiantes[i].nota1 + estudiantes[i].nota2 + estudiantes[i].nota3;
        cantidadNotas += 3;
   }

   let promedio = sum / cantidadNotas;
   return promedio;
}

let promedioNotas = calcularPromedioNotas(estudiantes);
console.log("El promedio de notas de los estudiantes es: " + promedioNotas);