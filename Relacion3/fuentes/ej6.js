function linea(char, n){
    let cadena = "";
    for(let i = 0; i <= num; i++){
        cadena += char;
        console.log("Traza de for");
    }

    document.write(cadena);
}

let caracter = prompt("Introduce un carácter");
let numero = prompt("Introduce un numero");

linea(caracter, numero);