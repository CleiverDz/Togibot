
function executeCommand() {
    var input = document.getElementById("command-input").value;
    var output = document.getElementById("command-output");
    
    // Aquí simulamos la ejecución del comando
    // En una aplicación real, deberías enviar esta entrada a tu bot y manejar la respuesta adecuadamente
    
    output.innerHTML = "<p>Ejecutando comando: <span class='command'>" + input + "</span></p>";
  }
  