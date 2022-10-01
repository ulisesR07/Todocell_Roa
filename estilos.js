let nomUsu = prompt("Ingresa tu nombre");
alert("Hola " + nomUsu);

///////////////////////////////
let respuestaComprar = "no";
let carrito = 0;
let total = 0;
let subtotal = 0;
let respuestaSeguirConsultando = "no";
function calcularIva(precio) {
  return precio * 0.21;
}

//Este ciclo lo repetirá hasta que el usuario decida seguir comprando
do {
  let marcaCel = prompt(
    nomUsu +
      "¿Qué marca de celular está buscando?. Elija una letra: a) Samsung, B) Motorola, C) Iphone"
  );

  let nombreCel = 5;
  if (marcaCel == "a") {
    nombreCel = prompt(
      "Celulares en Stock, elija un numero:  1)Samsung S8, 2)Samsung S7 Edge, 3)Samsung S22 Ultra, 4)Samsung S10."
    );

    if (nombreCel == 1) {
      respuestaComprar = prompt(
        "su precio es: $40000. ¿Desea comprarlo? si o no"
      );
      subtotal = 40000;
    } else if (nombreCel == 2) {
      respuestaComprar = prompt(
        "su precio es: $30000. ¿Desea comprarlo? si o no"
      );
      subtotal = 30000;
    } else if (nombreCel == 3) {
      respuestaComprar = prompt(
        "su precio es: $80000. ¿Desea comprarlo? si o no"
      );
      subtotal = 80000;
    } else {
      nombreCel = 5;
      subtotal = 0;
    }
    if (respuestaComprar == "si") {
      total = total + subtotal;
    }
    respuestaSeguirConsultando = prompt("¿Desea seguir consultando? si/no");
    if (respuestaSeguirConsultando == "no") {
      
      break;
    }


  }
///Comienza b) = Motorola

if (marcaCel == "b") {
    nombreCel = prompt(
      "Celulares en Stock, elija un numero:  1)Motorola G60.  2)Motorola G6 Play.  3)Motorola G100"
    );

    if (nombreCel == 1) {
      respuestaComprar = prompt(
        "su precio es: $35000. ¿Desea comprarlo? si o no"
      );
      subtotal = 35000;
    } else if (nombreCel == 2) {
      respuestaComprar = prompt(
        "su precio es: $40000. ¿Desea comprarlo? si o no"
      );
      subtotal = 40000;
    } else if (nombreCel == 3) {
      respuestaComprar = prompt(
        "su precio es: $60000. ¿Desea comprarlo? si o no"
      );
      subtotal = 60000;
    } else {
      nombreCel = 5;
      subtotal = 0;
    }
    if (respuestaComprar == "si") {
      total = total + subtotal;
    }
    respuestaSeguirConsultando = prompt("¿Desea seguir consultando? si/no");
    if (respuestaSeguirConsultando == "no") {
      
      break;
    }


  }

///finaliza b)

///Comienza C) = Iphone

if (marcaCel == "c") {
    nombreCel = prompt(
      "Celulares en Stock, elija un numero:  1)Iphone 7 Plus.  2)Iphone 13.  3)Iphone XR"
    );

    if (nombreCel == 1) {
      respuestaComprar = prompt(
        "su precio es: $60000. ¿Desea comprarlo? si o no"
      );
      subtotal = 60000;
    } else if (nombreCel == 2) {
      respuestaComprar = prompt(
        "su precio es: $65000. ¿Desea comprarlo? si o no"
      );
      subtotal = 65000;
    } else if (nombreCel == 3) {
      respuestaComprar = prompt(
        "su precio es: $70000. ¿Desea comprarlo? si o no"
      );
      subtotal = 70000;
    } else {
      nombreCel = 5;
      subtotal = 0;
    }
    if (respuestaComprar == "si") {
      total = total + subtotal;
    }
    respuestaSeguirConsultando = prompt("¿Desea seguir consultando? si/no");
    if (respuestaSeguirConsultando == "no") {
      
      break;
    }


  }

///Finaliza C) = Iphone
} while (respuestaComprar === "si");

let precioTotal = calcularIva(total);

alert("Su precio total con el IVA incluido es: " + (total + precioTotal));

////////////////////////////////

/*
else if (marcaCel == "b"){
    let nombreCel=prompt("Celulares en Stock, elija un numero:  1)Motorola G60.  2)Motorola G6 Play.  3)Motorola G100")
    if (nombreCel==1)
    alert("su precio es: $5000")
}

else if (marcaCel == "iphone"){
    alert("Mouse pad gamer - $ 6000")
}
else{
    alert("produto sin stock");
}}
*/
