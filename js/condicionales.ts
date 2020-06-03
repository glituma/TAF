var cantidadSolicitada: number = 150;

var deseaImprimir: boolean = true;

deseaImprimir = cantidadSolicitada < 100;

if (deseaImprimir) {
  console.log('Tienes un descuento');
} else {
  console.log('No te cubre!!!');
}

var valor: number = 2;

switch (valor) {
  case 1: {
    console.log('Uno');
  }
  case 2: {
    console.log('Dos');
  }
  default: {
    console.log('Sin números');
  }
}
