let nombreUser = prompt('Ingresa tu nombre');

function saludar (nombre) {
  alert('Bienvenido/a '+nombre);
}

saludar(nombreUser);

let cantidadTickets = parseInt(
  prompt("Elige la cantidad de tickets que deseas. Cantidad máxima: 2")
);

let cantidadMax = 2;
let cantidadMin = 1;

if (cantidadTickets == cantidadMax) {
  alert("Elige tu locación");
} else if (cantidadTickets == cantidadMin) {
  alert("Elige tu locación");
} else {
  alert("Opción invalida");
}

let oriental = 500; 
let occidental = 300;
let norte = 100;
let vip = 900;

let locacionConcierto = prompt(
  "Elige tu locación: \n1- Tribuna Oriental. \n2 - Tribuna Occidental \n3 - Tribuna Norte \n4 - VIP"
);

switch (locacionConcierto) {
  case "1":
    alert("Precio tribuna Oriental $ " + oriental);
    break;

  case "2":
    alert("Precio tribuna Occidental $ " + occidental);
    break;

  case "3":
    alert("Precio tribuna Norte $ " + norte);
    break;

  case "4":
    alert("Precio tribuna VIP $ " + vip);
    break;

  default:
    alert("Elegiste una opción inválida");
    break;
}

for (let i = 3; i > 0; i--) {
  alert("faltan " + i + " segundos para que completes tu compra. Si no lo haces en este tiempo, deberas comenzar de nuevo");
}

alert(
  "Refresca la página y comienza de nuevo"
); 


