const nombres = ["Santiago", "Hugo", "Sol", "Patricia"];
let nombre = prompt("Ingrese su nombre y verificaremos si esta entre los invitados");
nombres.splice(1, 2);
if (nombres.includes(nombre)) {
    alert("Usted esta en la lista, bienvenido a la fiesta");
    }
    else{
        alert("Usted no esta en la lista, no puede ingresar");
    }