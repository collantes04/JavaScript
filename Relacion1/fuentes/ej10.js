let precioSinIva = 123.45;
let iva = 21;
let operacion = 0;

operacion = (123.45 * 21) / 100;

let descuento = precioSinIva + operacion;

document.write("El precio sin IVA es: " + precioSinIva + "€" + "<br>");

document.write("El precio con IVA es: " + descuento.toFixed(2) + "€ ");