var datas = JSON.stringify(data);
var dataForm = JSON.parse(datas);
var members =  dataForm.results[0].members;
var filterMissedAsc = [], filterMissedDesc = [];
var contR = 0, contD = 0, contI = 0, contTotal = 0;
var cont = 0;
var rPCT = 0, dPCT = 0, iPCT = 0, tPCT = 0;
var tablaParty = '', tablaAsc = '', tablaDesc = '';
var totalVotesR = 0;
var totalVotesD = 0;
var totalVotesI = 0;
var totalVotesTOT = 0;
var pct10 = 0, pct100 = 0;

function totalPCTVotesAsc() {
  var numAux = 0;
  cont = 0;
  console.log("totalPCTVotesAsc");
  console.log("EL 10%: " + pct10);

  members.sort(function (a, b) {
    return (a.missed_votes_pct - b.missed_votes_pct);
  });

  for (var i in members) {
    if (members[i].missed_votes_pct <= 10 && members[i].missed_votes_pct != 0) {
      // if(cont<5){
        filterMissedAsc[i] = members[i];
      // }
      cont++;
    }
  }
  senateTableMissedAsc();
}

function totalPCTVotesDesc() {
  var numAux = 0;
  cont = 0;
  console.log("totalPCTVotesDesc");
  console.log("EL 10%: " + pct10);

  members.reverse();
  for (var i in members) {
    if (members[i].missed_votes_pct > 10) {
      // if (cont < 5) {
      filterMissedDesc[i] = members[i];
      // }
      cont++;
    }
  }
  senateTableMissedDesc();
}

function senateTableMissedAsc() {

  tablaAsc = '';
  // Cabecera de la tabla th

  tablaAsc +=
    '<thead><tr>' +
    '<th>Name</th>' +
    '<th>Number of Missed Votes</th>' +
    '<th>% Missed</th>' +
    '</tr></thead>';

  //cuerpo de  la tabla td num.toFixed(2)
  for (var i in filterMissedAsc) {

    if (filterMissedAsc[i].middle_name == null) {
      middleNotNull = ' ';
    } else {
      middleNotNull = filterMissedAsc[i].middle_name;
    }

    tablaAsc +=
      '<tbody><tr>' +
      '<td>' + filterMissedAsc[i].first_name + ' ' + middleNotNull + ' ' + filterMissedAsc[i].last_name + '</td>' +
      '<td>' + filterMissedAsc[i].missed_votes + '</td>' +
      '<td>' + filterMissedAsc[i].missed_votes_pct + '</td>' +
      '</tr></tbody>'
  }

  document.getElementById('senate-attendance-asc').innerHTML = tablaAsc;
}

function senateTableMissedDesc() {

  tablaDesc = '';
  // Cabecera de la tabla th

  tablaDesc +=
    '<thead><tr>' +
    '<th>Name</th>' +
    '<th>Number of Missed Votes</th>' +
    '<th>% Missed</th>' +
    '</tr></thead>';

  //cuerpo de  la tabla td num.toFixed(2)
  for (var i in filterMissedDesc) {
    if (filterMissedDesc[i].middle_name == null) {
      middleNotNull = ' ';
    } else {
      middleNotNull = filterMissedDesc[i].middle_name;
    }

    tablaDesc +=
      '<tbody><tr>' +
      '<td>' + filterMissedDesc[i].first_name + ' ' + middleNotNull + ' ' + filterMissedDesc[i].last_name + '</td>' +
      '<td>' + filterMissedDesc[i].missed_votes + '</td>' +
      '<td>' + filterMissedDesc[i].missed_votes_pct + '</td>' +
      '</tr></tbody>'
  }

  document.getElementById('senate-attendance-desc').innerHTML = tablaDesc;
}

function calculatePCTVotes() {
  for (var i in dataForm.results[0].members) {
    if(dataForm.results[0].members[i].party=="R"){

      totalVotesR = totalVotesR + (dataForm.results[0].members[i].total_votes - dataForm.results[0].members[i].missed_votes);

    }

    if (dataForm.results[0].members[i].party == "D") {

      totalVotesD = totalVotesD + (dataForm.results[0].members[i].total_votes - dataForm.results[0].members[i].missed_votes);

    }

    if (dataForm.results[0].members[i].party == "I") {

      totalVotesI = totalVotesI + (dataForm.results[0].members[i].total_votes - dataForm.results[0].members[i].missed_votes);

    }
  }

  totalVotesTOT = totalVotesR + totalVotesD;
  totalVotesTOT = totalVotesTOT + totalVotesI;

  rPCT = (totalVotesR / totalVotesTOT) * 100;
  dPCT = (totalVotesD / totalVotesTOT) * 100;
  iPCT = (totalVotesI / totalVotesTOT) * 100;

  tPCT = rPCT + dPCT + iPCT;

  partyTablePCT();
}

function numberPartyMembers() {
  for (var i in dataForm.results[0].members) {
    if (dataForm.results[0].members[i].party == 'R') {
      contR++;
    }
  }

  for (var i in dataForm.results[0].members) {
    if (dataForm.results[0].members[i].party == 'D') {
      contD++;
    }
  }

  for (var i in dataForm.results[0].members) {
    if (dataForm.results[0].members[i].party == 'I') {
      contI++;
    }
  }

  contTotal = contR + contD;
  contTotal =  contTotal + contI;

  pct10 = 10 / contTotal;
  pct10 = pct10 * 100;
  pct100 = contTotal - pct10;

  partyTablePCT();
}

function partyTablePCT() {

  tabla = '';
  // Cabecera de la tabla th

  tabla +=
    '<thead><tr>' +
    '<th>Party</th>' +
    '<th>Number of Reps</th>' +
    '<th>% Voted with Party</th>' +
    '</tr></thead>';

  //cuerpo de  la tabla td num.toFixed(2)
  tabla += 
    '<tbody><tr>'+
    '<td>Democrats</td>'+
    '<td>'+contD+'</td>'+
    '<td>'+dPCT.toFixed(2)+'</td></tr>'+
    '<tr><td>Republicans</td>'+
    '<td>'+contR+'</td>'+
    '<td>'+rPCT.toFixed(2)+'</td></tr>'+
    '<tr><td>Independents</td>'+
    '<td>'+contI+'</td>'+
    '<td>'+iPCT.toFixed(2)+'</td>'+
    '<tr><td>Total</td>'+
    '<td>'+contTotal+'</td>'+
    '<td>'+tPCT.toFixed(0)+'</td>'+
    '</tr></tbody>'

  document.getElementById('senate-attendance').innerHTML = tabla;
}