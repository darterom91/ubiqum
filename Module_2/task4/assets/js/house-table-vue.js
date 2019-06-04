var url = 'https://api.propublica.org/congress/v1/113/house/members.json';
var myHeaders = {
  method: 'GET',
  headers: { 'X-API-Key': 'GsSYZ2inVKeuH50adSeijtpqabjqjgHOUD2nKFXA'}
};
var datas;
var dataForm;
var vm;

console.log("LoadData");

let datos = loadData(url, myHeaders);
datos.then(result => {
  return result;
});

console.log("cargarDatos en la let datos");
datos.then(result => cargarDatos(result));
datos.then(result => parses());
datos.then(result => mostrar());
var objGlobal = [];

function loadData(url, myHeaders) {
  let datos = fetch(url, myHeaders)
    .then(result => result.json())
    .catch(error => console.error("ERROR: ", error));
  return datos;
}

function cargarDatos(array) {
  objGlobal = array;
  return array;
}

function parses() {
  datas = JSON.stringify(objGlobal);
  dataForm = JSON.parse(datas);
  vm = new Vue({
    el: '#app',
    data : datos
  })
}

function mostrar(){
  for (var i = 0; i < dataForm.results[0].members.length; i++) {
    console.log(dataForm.results[0].members[i].total_votes);
  }
}
// prueba esto