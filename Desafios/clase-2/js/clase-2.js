/* 
Aplicación para aprobar curso.

Consta de 3 examenes con calificación de 1 a 10.
Para aprobar:
Promedio de examenes mayor igual a 6.
Asistencia del 75%

*/
alert("Condiciones para aprobar el curso, se debe cumplir con los siguientes requisitos obligatorios: \n1. Obtener un promedio de más de 6 puntos, \n2. Tener más del 75% de asistencias a clases.")
let alumno = prompt("Ingrese nombre y apellido del alumno: ");
let examen1 = prompt("Calificación primer examen: ");
let examen2 = prompt("Calificación segundo examen: ");
let examen3 = prompt("Calificación tercer examen: ");
let promedio = (parseFloat(examen1) + parseFloat(examen2) + parseFloat(examen3))/3;
let asistencia = (parseFloat(prompt("Ingrese clases asistidas del alumno:"))/18) * 100;


if((promedio >=9) && (asistencia >= 75)){
    alert("El alumno " + alumno + " tiene una calificación de Sobresaliente, con un promedio de " + promedio  + " y una asistencia de " + asistencia + "%");
}
else if((promedio >= 6) && (asistencia >= 75)){
    alert("El alumno " + alumno + " tiene una calificación de Regular, con un promedio de " + promedio + " y una asistencia de " + asistencia + "%");
}
else if ((promedio >= 6) && (asistencia < 75)){
    alert("El alumno " + alumno + " tiene que rendir, por una asistencia a clases de: " + asistencia + "%. No cumple con el requisito de asistencias.");
    alert("Para aprobar el curso las asistencias deben tener más del 75%");
}
else if ((promedio <6) && (promedio >=4)){
    alert("El alumno " + alumno + " tiene que recuperar, por un promedio de: " + promedio + ". No cumple con el requisito del promedio.");
}
else{
    alert("El alumno " + alumno + " tiene que rendir en febrero, por un promedio de: " + promedio + " y una asistencia a clases de: " + asistencia + "%. No cumple con algún requisito.");
}

