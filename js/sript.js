/* Mail para el formulario de contacto realizado con emailjs.com */

function SendMail(){
  var params = {
  from_name : document.getElementById("fullName").value,
  email_id : document.getElementById("email_id").value,
  message : document.getElementById("message").value,
  }
  emailjs.send("service")
  }

