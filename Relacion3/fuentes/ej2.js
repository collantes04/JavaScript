function funcEj2(cadenaPar){
  let resultado = " ";
  
  if(cadenaPar == cadenaPar.toUpperCase()){
    return resultado = "Todo mayúsculas";
  } else if (cadenaPar == cadenaPar.toLowerCase()){
    return resultado = "Todo minúsculas";
  } else {
    return resultado = "Combinado mayus y minus";
  }
}

let cadena = prompt();

document.write(funcEj2(cadena));