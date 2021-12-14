/* 
Aplicación para aprobar curso.

Consta de 3 examenes con calificación de 1 a 10.
Para aprobar:
Promedio de examenes mayor igual a 6.
Asistencia del 75%

*/
alert("Condiciones para aprobar el curso debe cumplir con los dos siguientes requisitos obligatorios: \n1. Obtener un promedio de más de 6 puntos \n2. Tener más del 75% de asistencias a clases.")
let alumno = prompt("Ingrese nombre y apellido del alumno: ");
let examen1 = prompt("Calificación primer examen: ");
let examen2 = prompt("Calificación segundo examen: ");
let examen3 = prompt("Calificación tercer examen: ");
let promedio = (parseFloat(examen1) + parseFloat(examen2) + parseFloat(examen3))/3;
let asistencia = parseFloat(prompt("Ingrese clases asistidas del alumno:"))/18;

if((promedio >= 6 && promedio > 9) && (asistencia >= 0.75)) {
    alert("El alumno " + alumno + " tiene una clasificación de Regular, con un promedio de: " + promedio);
}
else if((promedio >=9) && (asistencia >= 0.75)) {
    alert("El alumno " + alumno + " tiene una clasificación de Sobresaliente, con un promedio de: " + promedio);
}
else {
    alert("El alumno " + alumno + " tiene que recuperar, por un promedio de: " + promedio + " y una asistencia a clases de: " + asistencia);
    alert("Para aprobar el curso las asistencias deben tener más del 75%");
}

