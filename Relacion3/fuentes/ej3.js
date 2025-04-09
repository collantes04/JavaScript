function palindromo(cadenaPal) {
  const arrayCadena1 = cadenaPal.split(" ");
  const transformacionCadena = arrayCadena1.reverse().join("");
  
  if(cadenaPal != transformacionCadena){
    console.log("Traza false");
    return false;
  }
  console.log("Traza true")
  return true;
}

let cadena = prompt();

if(palindromo(cadena)){
  document.write("Es palíndromo");
} else {
  document.write("No es palindromo");
}
