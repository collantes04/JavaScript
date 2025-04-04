function piramide(num, relleno) {
    let linea = relleno; 
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
  

let altura = prompt("Introduce la altura");
let relleno = prompt("Inroduce el relleno");

piramide(altura, relleno);