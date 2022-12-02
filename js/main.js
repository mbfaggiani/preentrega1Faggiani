const heladoPrecio = 1500
const heladoStock = 10

// Promociones
const sinDescuento = 1
const primerDescuento = (1 - 0.20)
const segundoDescuento = (1 - 0.50)

// IVA
const iva = 1.21

alert("Hola! Hace tu pedido a continuacion");

let nombre = prompt("Como es tu nombre:");

alert(` ${nombre}, que vas a llevar?`);

alert(`El precio de nuestros helados es de $1500 x Kg (max 10 Kg)
  
Nuestras promociones:
1 kilo = 0%
2 a 5 kilos = 20%
6 a 10 kilos = 50%`);

let heladosCantidad = parseInt(prompt("Cuantos kilos vas a llevar?"));

while (heladosCantidad > heladoStock) { 
  alert(`Nuestro stock maximo es ${heladoStock} kilos.`);
  heladosCantidad = prompt("Por favor indicanos la cantidad nuevamente:")
}

function priceCalculator(heladosCantidad, heladoPrecio, sinDescuento, primerDescuento, segundoDescuento, iva) {
  if (heladosCantidad >= 0 && heladosCantidad <= 1) {
    let total = (heladosCantidad * heladoPrecio * sinDescuento * iva)
    return total.toFixed(2);
  }
  else if (heladosCantidad >= 2 && heladosCantidad <= 5) {
    let total = (heladosCantidad * heladoPrecio * primerDescuento * iva)
    return total.toFixed(2);
  }
  else {
    let total = (heladosCantidad * heladoPrecio * segundoDescuento * iva)
    return total.toFixed(2);
  }
}

alert("El total de tu compra es: $" + priceCalculator(heladosCantidad, heladoPrecio, sinDescuento, primerDescuento, segundoDescuento, iva));

alert(`${nombre} muchas gracias por tu compra!`);

