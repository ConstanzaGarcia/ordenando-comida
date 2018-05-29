  let Ceviche= 0;
  let Tacos= 1;
  let EmpanadaChilena = 0;
  let Hamburguesas= 0;

  switch(menu) {
    case "Hamburguesas":
    document.write ("Tu plato estará listo en 15 minutos");
    break;
    case "Ceviche":
    document.write ("En media hora pasalo a buscar");
    break;
    case "Tacoss":
    alert ("NO TENEMOS");
    break;
    case "EmpanadaChilena":
    desafult:
    alert ("Por el momento se nos agoto, te invitamos a pedir otra cosa");
    }


/* 
let menu = function (request) { 
if (Ceviche)
  {
    console.log("Tu plato estará listo en 30 minutos");
  }
  
 else if (tacos) {
    console.log("En 15 minutos tu plato estara lista");
  }

  else if (empanada) {
    console.log("No tenemos en estos momentos pero hay mas opciones para elegir");
  }

  else (hamburguesa); {
    console.log("Nos encantan las hamburguesas,pero se nos acabaron");
  }
}
*/