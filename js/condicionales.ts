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
    break;
  }
  case 2: {
    console.log('Dos');
    break;
  }
  default: {
    console.log('Sin números');
    break;
  }
}

var cantidadDeNumeroEnviados: number = 50;

switch (cantidadDeNumeroEnviados) {
  case 25: {
    console.log('Son Veinte y Cinco');
    break;
  }
  case 50: {
    console.log('Son cincuenta');
    break;
  }
  default: {
    console.log('Número no reconocido');
    break;
  }
}

//! Menú de canciones
//* Menú de Albums
//! Menú del perfil

var menu: number = 3;

switch (menu) {
  case 1: {
    console.log('Accede a las canciones');
    break;
  }
  case 2: {
    console.log('Accede a los albums');
  }
  case 3: {
    console.log('Accede al perfil');
    break;
  }
  default: {
    console.log('El menú no existe');
  }
}
