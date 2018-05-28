const menu = function (request) {
  if (Ceviche < 5) {
    return 'Tu plato estará listo en 30 minutos';
  }
  else if (Tacos < 4) {
    return 'En 15 minutos tu plato estara lista';
  }
  else if (EmpanadaChilena < 0 ) {
  return 'No tenemos en estos momentos pero hay mas opciones para elegir';
}
 else if (Hambuerguesas < 0) {
  return "Nos encantan las hamburguesas,pero se nos acabaron"; 
; } }