var datas = JSON.stringify(data);
var dataForm = JSON.parse(datas);
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

//Select state
function notDuplicate() {
  cont = 0;
  //Rellena todas las posiciones array aux
  for (var i = 0; i < dataForm.results[0].members.length; i++) {
    aux[i] = dataForm.results[0].members[i].state;
  }
  console.log('length aux = ' + aux.length);

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
  console.log('length aux = ' + aux.length);
  cont = 0;
  for (var i = 0; i < aux.length; i++) {
    if (aux[i] != undefined) {
      console.log('Aux [' + cont + ']: ' + aux[i]);
      stateArray[cont] = aux[i];
      cont++;
    }
  }
  console.log('length stateArray = ' + stateArray.length);
  stateArray.sort();
  //se llama a la funcion
  selectOptions();
}
//rellena los option con los valores de la array stateArray
function selectOptions() {
  selectOptions = '';
 selectOptions += "<option class='options' value='ALL'>ALL</option>";
  for (var i in stateArray) {
    selectOptions +=
      "<option class='options' value='" +
      stateArray[i] +
      "'>" +
      stateArray[i] +
      '</option>';
  }
  document.getElementById('selectState').innerHTML = selectOptions;
}

function selectSelectionOptions() {
  stateArrayOption = document.querySelectorAll('.options');
  for (var i = 0; i < stateArrayOption.length; i++) {
    if (stateArrayOption[i].selected == true) {
      console.log('i = [' + i + '] value: ' + stateArrayOption[i].value);
      op = stateArrayOption[i].value;
      houseTablesFiltreStateParty(partyArray, op);
    }
  }
  console.log(stateArrayOption.length);
  houseTablesFiltreStateParty(partyArray, op);
}

//tablas
function houseCheck() {
  filterCheck = document.querySelectorAll('.checkParty');
  partyArray = [];
  console.log(typeof filterCheck);
  console.log(filterCheck.length);
  for (var i = 0; i < filterCheck.length; i++) {
    if (filterCheck[i].checked == true) {
      console.log('El value de i = ' + i + ': ' + filterCheck[i].value);
      // partyArray.push(filterCheck[i].value);
      partyArray[i] = filterCheck[i].value;
      houseTablesFiltreStateParty(partyArray, op);
    } else if (filterCheck[i].checked == false) {
      partyArray.splice(i, 1); //bugs al quitar los elementos de la array
      houseTablesFiltreStateParty(partyArray, op);
    }
    mostrar();
  }

  if (partyArray.length == 0) {
    console.log('entra');
    houseTables();
  }
}

function mostrar() {
  for (var i = 0; i < partyArray.length; i++) {
    console.log(
      'i = [' +
        i +
        ']: ' +
        partyArray[i] +
        ' y la long de la array es: ' +
        partyArray.length
    );
  }
}

function houseTablesFiltreStateParty(partyArray, op) {
  filterMembers = [];
  cont = 0;
  console.log('partyArray.lengt = '+partyArray.length+" | op = "+op);
  if (partyArray.length != 0 && op == 0 || op == "ALL") {
    console.log('partyArray.length!=0');
    for (var i in dataForm.results[0].members) {
      // console.log("i = ["+i+"]");
      for (var j in partyArray) {
        if (dataForm.results[0].members[i].party == partyArray[j]) {
          console.log('state:'+ dataForm.results[0].members[i].state+" == "+op+" name: "+dataForm.results[0].members[i].first_name);
          filterMembers[cont] = dataForm.results[0].members[i];
          console.log('contador: ' + filterMembers.length);
          cont++;
        }
      }
    }
    houseTables(filterMembers);
  }else if (partyArray.length != 0 && op != 0) {
    console.log("partyArray.length!=0 && op !='ALL'");
    for (var i in dataForm.results[0].members) {
      // console.log("i = ["+i+"]");
      for (var j in partyArray) {
        if (dataForm.results[0].members[i].party == partyArray[j] && dataForm.results[0].members[i].state == op) {
          console.log('state:'+ dataForm.results[0].members[i].state+" == "+op+" name: "+dataForm.results[0].members[i].first_name);
          filterMembers[cont] = dataForm.results[0].members[i];
          console.log('contador: ' + filterMembers.length);
          cont++;
        }else{
          if (cont>=0) {
            console.log("ELSE:: state:"+ dataForm.results[0].members[i].state+" == "+op+" name: "+dataForm.results[0].members[i].first_name);       
            tabla = '<p>not have datas '+dataForm.results[0].members[i].state+'</p>';
            cont++;
          }
        }
      }
    }
    if (filterMembers.length!=0) {
      houseTables(filterMembers);
    }else{
      notDatas();
    }
  }else {
    if (op != 'ALL') {
    console.log("op !='ALL'");
      for (var i in dataForm.results[0].members) {
        // console.log("i = ["+i+"]");
        if (dataForm.results[0].members[i].state == op) {
          console.log('state:'+ dataForm.results[0].members[i].state+" == "+op+" name: "+dataForm.results[0].members[i].first_name);
          filterMembers[cont] = dataForm.results[0].members[i];
          console.log('contador: ' + filterMembers.length);
          cont++;
        }
      }
      houseTables(filterMembers);
    }
  }

  if (partyArray.length == 0 && op == 'ALL') {
    console.log("partyArray.length==0 && op =='ALL'");
    houseTables(filterMembers);
  }
}

function notDatas() {
  tabla = '';
  // Cabecera de la tabla th

  tabla +=
    '<thead><tr><th>All name</th>' +
    '<th>Party</th>' +
    '<th>state</th>' +
    '<th>seniority</th>' +
    '<th>%</th>' +
    '</tr></thead>';

  //cuerpo de  la tabla td
  for(var i in partyArray){
    tabla +=
      '<tbody><tr><td> Not data of party: ' +
      partyArray[i] +
      '</td></tr></tbody>';
  }

  document.getElementById('house-data').innerHTML = tabla;
  console.log('HouseTable Funtion: ' + filterMembers.length);
}

function houseTables(filterMembers) {
  tabla = '';
  // Cabecera de la tabla th

  tabla +=
    '<thead><tr><th>All name</th>' +
    '<th>Party</th>' +
    '<th>state</th>' +
    '<th>seniority</th>' +
    '<th>%</th>' +
    '</tr></thead>';

  //cuerpo de  la tabla td

  if (filterMembers.length <= 0) {
    for (var i in dataForm.results[0].members) {
      // console.log("i = ["+i+"]");
      cont++;
      if (dataForm.results[0].members[i].middle_name == null) {
        middleNotNull = ' ';
      } else {
        middleNotNull = dataForm.results[0].members[i].middle_name;
      }

      tabla +=
        "<tbody><tr><td><a href='" +
        dataForm.results[0].members[i].url +
        "'>" +
        dataForm.results[0].members[i].first_name +
        ' ' +
        middleNotNull +
        ' ' +
        dataForm.results[0].members[i].last_name +
        '</a></td>';
      tabla += '<td>' + dataForm.results[0].members[i].party + '</td>';
      tabla += '<td>' + dataForm.results[0].members[i].state + '</td>';
      tabla += '<td>' + dataForm.results[0].members[i].seniority + '</td>';
      tabla +=
        '<td>' +
        dataForm.results[0].members[i].votes_with_party_pct +
        '</td></tr></tbody>';
    }
  } else {
    for (var i in filterMembers) {
      // console.log("i = ["+i+"]");
      cont++;
      if (filterMembers[i].middle_name == null) {
        middleNotNull = ' ';
      } else {
        middleNotNull = filterMembers[i].middle_name;
      }

      tabla +=
        "<tbody><tr><td><a href='" +
        filterMembers[i].url +
        "'>" +
        filterMembers[i].first_name +
        ' ' +
        middleNotNull +
        ' ' +
        filterMembers[i].last_name +
        '</a></td>';
      tabla += '<td>' + filterMembers[i].party + '</td>';
      tabla += '<td>' + filterMembers[i].state + '</td>';
      tabla += '<td>' + filterMembers[i].seniority + '</td>';
      tabla +=
        '<td>' + filterMembers[i].votes_with_party_pct + '</td></tr></tbody>';
    }
  }

  document.getElementById('house-data').innerHTML = tabla;
  console.log('HouseTable Funtion: ' + filterMembers.length);
}
