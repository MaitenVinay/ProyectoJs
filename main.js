let nombreUsuario;
let contraseña;
let dinero = 10000;
let precioHamburguesa = 500;
let precioPizza = 700;
let precioGaseosa = 300;

alert("Bienvenido/a a Mi Cocina Virtual."+ " "+ "Un juego en donde vas a poder cocinar y vender tus productos." + " " + "A afilar el cuchillo.")

function registro() {
  nombreUsuario = prompt("Para poder registrarte, deberás indicar un nombre de usuario que deberás recordar para ingresar cada vez que quieras jugar.");
  contraseña = prompt("Ahora, deberás registrar una contraseña asociada al nombre de usurio seleccionado.");
}

function ingresar() {
  let ingresarUsuario = prompt("Ingresá tu nombre de usuario.");
  let ingresarContraseña = prompt("Ingresá la contraseña.");

  if (ingresarUsuario === nombreUsuario && ingresarContraseña === contraseña) {
    alert("Bienvenido " + nombreUsuario + "!." + " Ya podés jugar a Mi Cocina Virtual");
  } else {
    alert("Alguno de los datos ingresados no es correcto. Por favor vuelve a intentarlo.");
  }
}

function seleccionarOperacion(){
    console.log ("1: consultar dinero")
    console.log ("2: vender pizza")
    console.log ("3: vender hamburguesa")
    console.log ("4: vender gaseosa")
    console.log ("5: salir")

    let operacion = prompt ("Ingresar el número de operación a realizar")
    switch (operacion) {
        case "1":
            consultarDinero ()
            break;
        case "2":
            venderPizza()
            break;
        case "3":
            venderHamburguesa()
            break;
        case "4":
            venderGaseosa()
            break;
        case "5":
            salir()
            break;
        default:
            console.log ("Operación inválida")
    }
}

function consultarDinero(){
    alert ("Su saldo es de " + dinero)
    seleccionarOperacion()
}

function venderPizza(){
    if (dinero >= 700){
        alert ("Vendiste una pizza.")
        dinero + 700
    }
    else{
        alert("El cliente no quedo satisfecho.")
    }
    seleccionarOperacion()

}

function venderHamburguesa(){
    if (dinero >= 500){
        alert ("Vendiste una hamburguesa.")
        dinero + 500
    }
    else{
        alert("El cliente no quedo satisfecho.")
    }
    seleccionarOperacion()
}

function venderGaseosa(){
    if (dinero >= 300){
        alert ("Vendiste una Gaseosa.")
        dinero + 300
    }
    else{
        alert("El cliente no quedo satisfecho.")
    }
    seleccionarOperacion()
}

function salir(){
    alert ("Gracias por jugar a Mi Cocina Virtual. Te esperamos.")
}

registro();
ingresar();
seleccionarOperacion();
