var url = 'https://api.propublica.org/congress/v1/113/senate/members.json';
var myHeaders = {
  method: 'GET',
  headers: {'X-API-Key': 'GsSYZ2inVKeuH50adSeijtpqabjqjgHOUD2nKFXA'}
};
var tabla = '';
var sele = '';
var filterCheck = [];
var middleNotNull = '';
var partyArray = [];
var stateArray = [];
var stateArrayOption = [];
var op = 0;
var aux = [];
var cont = 0;
var objGlobal = [];
var filterMembers = [];

// console.log("LoadData");

//datos fetch y then
let datos = loadData(url, myHeaders);
datos.then(result => {
  return result;
});

// console.log("cargarDatos en la let datos");
datos.then(result => cargarDatos(result));
datos.then(result => appState());
// datos.then(result => senateCheck());
// datos.then(result => selectSelectionOptions());
// datos.then(result => mostrar());

function loadData(url, myHeaders) {
  let datos = fetch(url, myHeaders)
    .then(result => result.json())
    .catch(error => console.error("ERROR: ", error));
  return datos;
}

function cargarDatos(array) {
  console.log("cargarDatos\n"
            + "-----------\n\n");
  objGlobal = array;
  // selectSelectionOptions();
  // filterMembers = senateTablesFiltreStateParty();

  console.log("members: " + filterMembers.length);
  if (filterMembers.length != 0) {
    this.app.members = filterMembers;
  } else {
    this.app.members = objGlobal.results[0].members;
  }
  return array;
}

function appState() {
  //appState
  // console.log("appState()");

  stateArray = notDuplicate();
  this.app2.opts = stateArray;

  for (var i = 0; i < app2.opts.length; i++) {
    // console.log("app2: " + app2.opts[i]);
  }
}

function mostrar() {
  for (var i = 0; i < app.members.length; i++) {
    // console.log(app.members[i].first_name);
  }
}
//functions
function notDuplicate() {
  console.log("notDuplicate");

  cont = 0;
  //Rellena todas las posiciones array aux
  for (var i = 0; i < objGlobal.results[0].members.length; i++) {
    aux[i] = objGlobal.results[0].members[i].state;
  }
  // console.log('length aux = ' + aux.length);

  //Busca todos los valores i y comprueba si hay iguales en la j
  //si los hay borra los valores de la array aux
  for (var i = 0; i < aux.length; i++) {
    for (var j = 0; j < aux.length - 1; j++) {
      if (i < j) {
        if (aux[i] == aux[j]) {
          delete aux[j];
          aux.slice(j, 1);
        }
      }
    }
    cont++;
  }
  //comprueba los valores de la array no son undefined,
  // para luego meter cada valor en la array stateArray
  // console.log('length aux = ' + aux.length);
  cont = 0;
  for (var i = 0; i < aux.length; i++) {
    if (aux[i] != undefined) {
      // console.log('Aux [' + cont + ']: ' + aux[i]);
      stateArray[cont] = aux[i];
      cont++;
    }
  }
  // console.log('length stateArray = ' + stateArray.length);
  stateArray.sort();
  for (var i = 0; i < stateArray.length; i++) {
    // console.log('APP2 [' + i + ']: ' + stateArray[i]);
  }
  //se llama a la funcion
  return stateArray;
}

function selectSelectionOptions() {
  filterMembers = [];
  console.log("selectSelectionOptions\n"
            + "----------------------\n\n");
  console.log("filterMembers.length: " + filterMembers.length);
  stateArrayOption = document.querySelectorAll('.options');
  console.log(stateArrayOption);
  for (var i = 0; i < stateArrayOption.length; i++) {
    if (stateArrayOption[i].selected == true) {
      // console.log('i = [' + i + '] value: ' + stateArrayOption[i].value);
      op = stateArrayOption[i].value;
      senateTablesFiltreStateParty(partyArray, op);
    }
  }
  // console.log(stateArrayOption.length);
  // senateTablesFiltreStateParty(partyArray, op);
}

function senateCheck() {
  filterMembers = [];
  var cont2 = 0;
  console.log("senateCheck\n"
            + "-----------\n\n");
  console.log("filterMembers.length: "+filterMembers.length);
  filterCheck = document.querySelectorAll('.checkParty');
  // partyArray = checkboxes.checkedNames;
  // console.log(typeof filterCheck);
  // console.log(filterCheck.length);
  for (var i = 0; i < filterCheck.length; i++) {
    if (filterCheck[i].checked == true) {
      console.log('El value de i = ' + i + ': ' + filterCheck[i].value);
      // partyArray.push(filterCheck[i].value);
      partyArray[cont2] = filterCheck[i].value;
      senateTablesFiltreStateParty(partyArray, op);
      cont2++;
    } else if (filterCheck[i].checked == false) {
      partyArray.splice(i, 1); //bugs al quitar los elementos de la array
      datos.then(result => senateTablesFiltreStateParty(partyArray, op));
    }
    mostrar();
  }

  if (partyArray.length == 0) {
    // console.log('entra');
    // houseTables();
  }
}

function senateTablesFiltreStateParty(partyArray, op) {
  filterMembers = [];
  cont = 0;
  console.log("senateTablesFiltreStateParty\n"
            + "----------------------------\n");
  console.log("op: "+op);
  for (var i = 0; i < partyArray.length; i++) {
    console.log("partyArray ["+i+"]: "+partyArray[i]);
  }
  // console.log('partyArray.lengt = ' + partyArray.length + " | op = " + op);
  if (partyArray.length != 0 && op == 0 || op == "ALL") {
    console.log('partyArray.length!=0 && op == 0 || op == "ALL"');
    for (var i in objGlobal.results[0].members) {
      // console.log("i = ["+i+"]");
      for (var j in partyArray) {
        if (objGlobal.results[0].members[i].party == partyArray[j]) {
          // console.log('state:' + objGlobal.results[0].members[i].state + " == " + op + " name: " + objGlobal.results[0].members[i].first_name);
          console.log("cont: " + cont);
          filterMembers[cont] = objGlobal.results[0].members[i];
          // console.log('contador: ' + filterMembers.length);
          cont++;
        }
      }
    }
  } else if (partyArray.length != 0 && op != 0) {
    console.log("partyArray.length!=0 && op !='ALL'");
    for (var i in objGlobal.results[0].members) {
      // console.log("i = ["+i+"]");
      for (var j in partyArray) {
        if (objGlobal.results[0].members[i].party == partyArray[j] && objGlobal.results[0].members[i].state == op) {
          // console.log('state:' + objGlobal.results[0].members[i].state + " == " + op + " name: " + objGlobal.results[0].members[i].first_name);
          console.log("cont: " + cont);
          filterMembers[cont] = objGlobal.results[0].members[i];
          // console.log('contador: ' + filterMembers.length);
          cont++;
        } else {
          if (cont >= 0) {
            console.log("ELSE:: state:" + objGlobal.results[0].members[i].state + " == " + op + " name: " + objGlobal.results[0].members[i].first_name);
            console.log("cont: " + cont);
            // tabla = '<p>not have datas ' + objGlobal.results[0].members[i].state + '</p>';
          }
        }
      }
    }
    if (filterMembers.length != 0) {
      // houseTables(filterMembers);
    } else {
      // notDatas();
    }
  } else {
    if (op != 'ALL') {
      console.log("op !='ALL'");
      for (var i in objGlobal.results[0].members) {
        // console.log("i = ["+i+"]");
        if (objGlobal.results[0].members[i].state == op) {
          // console.log('state:' + objGlobal.results[0].members[i].state + " == " + op + " name: " + objGlobal.results[0].members[i].first_name);
          filterMembers[cont] = objGlobal.results[0].members[i];
          // console.log('contador: ' + filterMembers.length);
          cont++;
        }
      }
    }
  }

  if (partyArray.length == 0 && op == 'ALL' || op == 0) {
    console.log("partyArray.length==0 && op =='ALL'");
    // houseTables(filterMembers);
  }

  for (var i = 0; i < filterMembers.length; i++) {
    // console.log("filterMembers First Name["+i+"]: "+filterMembers[i].first_name+" -- filterMembers STATE[" + i + "]: " + filterMembers[i].state);
  }
  console.log("cont: "+cont);
  
  datos.then(result => cargarDatos(result));
  return filterMembers;
}

var app = new Vue({
  el: '#app',
  data: {
    members: []
  },
});

var app2 = new Vue({
  el: '#app2',
  data: {
    opts: []
  },
});

var checkboxes = new Vue({
  el: '#checkboxes',
  data: {
    checkedNames: []
  },
});
// prueba esto