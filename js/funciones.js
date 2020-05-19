function ValidaFormulario() {
  var valorNombre = document.getElementById("txtnombre").value;
  var valoremail = document.getElementById("txtemail").value;

  var carrera = document.getElementById("tipo_moto").selectedIndex;

  var radios = document.getElementsByName("marca");

  var dia = document.getElementById("combo_dia").selectedIndex;

  var semana = document.getElementById("combo_semana").selectedIndex;

  var ano = document.getElementById("combo_ano").selectedIndex;

  

  if (
    valorNombre == null ||
    valorNombre.length == 0 ||
    /^\s+$/.test(valorNombre)
  ) {
    alert("Debes escribir tu nombre completo");
    document.getElementById("txtnombre").focus();
    return false;
  }

  if (
    valoremail == null ||
    valoremail.length == 0 ||
    /^\s+$/.test(valoremail)
  ) {
    alert("Debes escribir correo electronico");
    document.getElementById("txtemail").focus();
    return false;
  }

  if (carrera == null || carrera == 00) {
    alert("Debes seleccionar tu sexo");
    document.getElementById("tipo_moto").focus();
    return false;
  }


  if (dia == null || dia == 00) {
    alert("Debes elegir un dia");
    document.getElementById("combo_dia").focus();
    return false;
  }

  if (semana == null || semana == 00) {
    alert("Debes elegir un mes");
    document.getElementById("combo_semana").focus();
    return false;
  }

  if (ano == null || ano == 00) {
    alert("Debes elegir una año");
    document.getElementById("combo_ano").focus();
    return false;
  }

  

  var seleccionado = false;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      seleccionado = true;
      break;
    }
  }

  if (!seleccionado) {
    alert("Debes elegir una marca");
    document.getElementById("marca1").focus();
    return false;
  }

  return true;
}
