let salarioMensual = 12000;
let antiguedadLaboralAnios = 4;
let tieneDeudasPendientes = false;
let puntajeCredito = 2000;

if (((salarioMensual > 3000 && antiguedadLaboralAnios >= 2 && !tieneDeudasPendientes ))
    || ((puntajeCredito >= 750 || salarioMensual > 5000 )) && !tieneDeudasPendientes)
{
    console.log("Credito aceptado");
} else {
    console.log("Credito rechazado");




}