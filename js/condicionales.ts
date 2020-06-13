/*
var cantidadSolicitada: number = 150;

var deseaImprimir: boolean = true;

deseaImprimir = cantidadSolicitada < 100;

if (deseaImprimir) {
  console.log('Tienes un descuento');
} else {
  console.log('No te cubre!!!');
}

var boletosVendidos: number = 51;

if (boletosVendidos > 50) {
  console.log('Estamos bien muchachos');
} else {
  console.log('Algo va mal, muchachos a trabajar mas duro');
}
*/
var valor: number = 4;

switch (valor * 2) {
  case 4: {
    console.log('Cuatro');
    break;
  }
  case 2: {
    console.log('Dos');
    break;
  }
  default: {
    console.log('Cero');
    break;
  }
}
