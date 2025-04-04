function piramide(num) {
  let linea = "*"; 
  let espacio = "&nbsp;";

  for (let h = 1; h <= num ; h++) {

    for(let i = h; i < num; i++){
      document.write(espacio);

      
    }
    for(let j = 0; j < h;  j++){
      document.write(linea);
    }
    document.write("<br>");
  }
}

let n = prompt();

piramide(n);