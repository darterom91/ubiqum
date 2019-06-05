var url = 'https://api.propublica.org/congress/v1/113/house/members.json';
var myHeaders = {
  method: 'GET',
  headers: { 'X-API-Key': 'GsSYZ2inVKeuH50adSeijtpqabjqjgHOUD2nKFXA'}
};
var objGlobal = [];

var app = new Vue({
  el: '#app',
  data: {
    members: []
  }
});

console.log("LoadData");
let datos = loadData(url, myHeaders);
datos.then(result => {
  return result;
});

console.log("cargarDatos en la let datos");
datos.then(result => cargarDatos(result));

// datos.then(result => mostrar());

function loadData(url, myHeaders) {
  let datos = fetch(url, myHeaders)
    .then(result => result.json())
    .catch(error => console.error("ERROR: ", error));
  return datos;
}

function cargarDatos(array) {
  objGlobal = array;

  app.members = array;
  return array;
}

function checKboxes() {
  console.log("checKboxes");
  var checkboxes = new Vue({
    el: 'checkboxes',
    data: {
      checkedNames: []
    },
  });
  console.log("VALUE: " + checkboxes.checkedNames);
}

function mostrar(){
  for (var i = 0; i < objGlobal.results[0].members.length; i++) {
    console.log(objGlobal.results[0].members[i].first_name);
  }
}
// prueba esto