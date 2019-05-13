function validateForm() {
  var x = document.forms["myForm"][0].value;
  var y = document.forms["myForm"][1].value;
  if (x == "" && y == "") {
    document.getElementById("errorMessage").innerHTML ="Los campos no estan llenos";
    return false;
  }else if( x == ""){
    document.getElementById("errorMessage").innerHTML = "El campo nombre esta vacio";
    return false;
  }else if( y == ""){
    document.getElementById("errorMessage").innerHTML = "El campo del Apellido esta vacio";
    return false;
  }
}

function check(browser) {
  var nav = document.myForm.value = browser;

  document.getElementById("navegador").innerHTML=nav;
}


function viewName(fname) {
  var val = document.myForm.respuesta.value = fname;
}