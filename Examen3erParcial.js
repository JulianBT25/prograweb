
function checarPalindromo() {
    var cadena = document.getElementById('inputPhrase').value;
    var resultado = 'La frase "' + cadena + '" ';
    var cadenaOriginal = cadena.toLowerCase();
    var letrasEspacios = cadenaOriginal.split('');
    var cadenaSinEspacios = '';
    for (var i in letrasEspacios) {
        if (letrasEspacios[i] !== ' ') {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }
    var letras = cadenaSinEspacios.split('');
    var letrasReves = cadenaSinEspacios.split('').reverse();
    var iguales = true;
    for (var i in letras) {
        if (letras[i] !== letrasReves[i]) {
            iguales = false;
            break;
        }
    }

    if (iguales) {
        resultado += 'es un palíndromo.';
    } else {
        resultado += 'no es un palíndromo.';
    }
    document.getElementById('result').innerText = resultado;
}
