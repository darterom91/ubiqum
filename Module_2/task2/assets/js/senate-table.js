var datas = JSON.stringify(data);
var dataForm = JSON.parse(datas);
var tabla = "";
var filterCheck = [];
var middleNotNull = "";
var partyArray = [];
var cont = 0;

function houseCheck() {
  filterCheck = document.querySelectorAll(".checkParty");
  partyArray = [];
  console.log(typeof (filterCheck));
  console.log(filterCheck.length);
  for (var i = 0; i < filterCheck.length; i++) {
    if (filterCheck[i].checked == true) {
      console.log("El value de i = " + i + ": " + filterCheck[i].value);
      // partyArray.push(filterCheck[i].value);
      partyArray[i] = filterCheck[i].value;
      senateTablesFiltre(partyArray);
    } else if (filterCheck[i].checked == false) {
      partyArray.splice(i, 1);//bugs al quitar los elementos de la array
      senateTablesFiltre(partyArray);
    }
    mostrar();
  }

  if (partyArray.length == 0) {
    console.log("entra");
    senateTables();
  }
}

function mostrar() {
  for (var i = 0; i < partyArray.length; i++) {
    console.log("i = [" + i + "]: " + partyArray[i] + " y la long de la array es: " + partyArray.length);
  }
}

function senateTablesFiltre(partyArray) {
  console.log("houseTablesFiltre Funtion: " + partyArray[2]);
  // Cabecera de la tabla th
  tabla = "";
  tabla += "<thead><tr><th>All name</th>" +
    "<th>Party</th>" +
    "<th>state</th>" +
    "<th>seniority</th>" +
    "<th>%</th>" +
    "</tr></thead>";

  //cuerpo de  la tabla td
  for (var i in dataForm.results[0].members) {
    // console.log("i = ["+i+"]");
    for (var j in partyArray) {
      if (dataForm.results[0].members[i].party == partyArray[j]) {
        if (dataForm.results[0].members[i].middle_name == null) {
          middleNotNull = " ";
        } else {
          middleNotNull = dataForm.results[0].members[i].middle_name;
        }

        tabla += "<tbody><tr><td><a href='" + dataForm.results[0].members[i].url + "'>" +
          dataForm.results[0].members[i].first_name + " "
          + middleNotNull + " "
          + dataForm.results[0].members[i].last_name + "</a></td>";
        tabla += "<td>" +
          dataForm.results[0].members[i].party + "</td>";
        tabla += "<td>" +
          dataForm.results[0].members[i].state + "</td>";
        tabla += "<td>" +
          dataForm.results[0].members[i].seniority + "</td>";
        tabla += "<td>" +
          dataForm.results[0].members[i].votes_with_party_pct + "</td></tr></tbody>";
        console.log("j = " + j + " value: " + partyArray[j] + " =  dataForm: " + dataForm.results[0].members[i].party[j]);
      }
    }
  }
  document.getElementById("senate-data").innerHTML = tabla;
  // console.log(partyArray.length);

}

function senateTables() {
  console.log("HouseTable Funtion: " + partyArray[2]);
  tabla = "";
  // Cabecera de la tabla th
  tabla += "<thead><tr><th>All name</th>" +
    "<th>Party</th>" +
    "<th>state</th>" +
    "<th>seniority</th>" +
    "<th>%</th>" +
    "</tr></thead>";

  //cuerpo de  la tabla td
  for (var i in dataForm.results[0].members) {
    // console.log("i = ["+i+"]");
    cont++;
    if (dataForm.results[0].members[i].middle_name == null) {
      middleNotNull = " "
    } else {
      middleNotNull = dataForm.results[0].members[i].middle_name;
    }

    tabla += "<tbody><tr><td><a href='" + dataForm.results[0].members[i].url + "'>" +
      dataForm.results[0].members[i].first_name + " "
      + middleNotNull + " "
      + dataForm.results[0].members[i].last_name + "</a></td>";
    tabla += "<td>" +
      dataForm.results[0].members[i].party + "</td>";
    tabla += "<td>" +
      dataForm.results[0].members[i].state + "</td>";
    tabla += "<td>" +
      dataForm.results[0].members[i].seniority + "</td>";
    tabla += "<td>" +
      dataForm.results[0].members[i].votes_with_party_pct + "</td></tr></tbody>";
  }
  document.getElementById("senate-data").innerHTML = tabla;
}