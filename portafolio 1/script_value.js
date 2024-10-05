function validarFormulario() {
  
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;

  if (nombre.trim() === "") {
      alert("Por favor, ingresa tu nombre.");
      return false;
  }

  if (email.trim() === "") {
      alert("Por favor, ingresa tu correo electrónico.");
      return false;
  }
 
  var formatoEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!formatoEmail.test(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return false;
  }

  if (mensaje.trim() === "") {
      alert("Por favor, ingresa un mensaje.");
      return false;
  }

  return true;
}
