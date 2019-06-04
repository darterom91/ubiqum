var url = 'https://api.propublica.org/congress/v1/113/senate/members.json';
var myHeaders = {
  method: 'GET',
  headers: {'X-API-Key': 'GsSYZ2inVKeuH50adSeijtpqabjqjgHOUD2nKFXA'}
};
var objGlobal =[];

console.log("LoadData");

let datos = loadData(url, myHeaders);
datos.then(result => {
  return result;
});

console.log("cargarDatos en la let datos");
datos.then(result => cargarDatos(result));


function loadData(url, myHeaders) {
  let datos = fetch(url, myHeaders)
    .then(result => result.json())
    .then(function (myJson) {
      console.log("MY JSON\n"
                + "-- ----");
      console.log(myJson);
    })
    .catch(error => console.error("ERROR: ", error));
  return datos;
}

function cargarDatos(array) {
  objGlobal = array;
  return array;
}
// prueba esto