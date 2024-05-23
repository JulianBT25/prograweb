
function multi() {
    let num = prompt('Ingresa un numero(1-10)', '');
    num = parseInt(num);
    
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; 
    
    for (let x = 1; x <= 10; x++) {
      let tabla = num * x;
      resultadoDiv.innerHTML += "<p>" + num + " x " + x + " = " + tabla + "</p>";
    }
    
    resultadoDiv.classList.add("resultado-visible"); 
    resultadoDiv.style.display = "block";
  }
  