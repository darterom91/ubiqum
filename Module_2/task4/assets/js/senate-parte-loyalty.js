var datas = JSON.stringify(data);
var dataForm = JSON.parse(datas);
var members = dataForm.results[0].members;
var filterMissedAsc = [], filterMissedDesc = [];
var middleNotNull = '';
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
  var numAux = 10;
  cont = 0;
  console.log("totalPCTVotesAsc");
  console.log("EL 100%: " + pct100);

  members.sort(function (a, b) {
    return (a.votes_with_party_pct - b.votes_with_party_pct);
  });

  for (var i in members) {
    if (members[i].votes_with_party_pct <= 100 && members[i].votes_with_party_pct != 0) {
      if (cont < numAux) {
        filterMissedAsc[cont] = members[i];
      }
      cont++;
    }
  }
  senateTableMissedAsc();
}

function totalPCTVotesDesc() {
  var numAux = 10;
  cont = 0;
  console.log("totalPCTVotesDesc");
  console.log("EL 10%: " + pct10);

  members.reverse();
  for (var i in members) {
    if (members[i].votes_with_party_pct >= 10 && members[i].votes_with_party_pct != 0) {
      if (cont < numAux) {
        filterMissedDesc[cont] = members[i];
      }
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
    '<th>Number of Party Votes</th>' +
    '<th>% Party Votes</th>' +
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
    '<td>' + filterMissedAsc[i].total_votes + '</td>' +
    '<td>' + filterMissedAsc[i].votes_with_party_pct + '</td>' +
      '</tr></tbody>'
  }

  document.getElementById('senate-party-loyalty-asc').innerHTML = tablaAsc;
}

function senateTableMissedDesc() {
  tablaDesc = '';
  // Cabecera de la tabla th

  tablaDesc +=
    '<thead><tr>' +
    '<th>Name</th>' +
    '<th>Number of Party Votes</th>' +
    '<th>% Party Votes</th>' +
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
    '<td>' + filterMissedDesc[i].total_votes + '</td>' +
    '<td>' + filterMissedDesc[i].votes_with_party_pct + '</td>' +
      '</tr></tbody>'
  }

  document.getElementById('senate-party-loyalty-desc').innerHTML = tablaDesc;
}

function calculatePCTVotes() {
  for (var i in dataForm.results[0].members) {
    if (dataForm.results[0].members[i].party == "R") {

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

  console.log("total"+totalVotesTOT);

  pct10 = 10 / totalVotesTOT;
  pct10 = pct10 * 100;
  pct100 = totalVotesTOT - pct10;

  console.log("EL 10%: " + pct10);
  console.log("EL -100%: " + pct100);

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
  contTotal = contTotal + contI;

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
    '<tbody><tr>' +
    '<td>Democrats</td>' +
    '<td>' + contD + '</td>' +
    '<td>' + dPCT.toFixed(2) + '</td></tr>' +
    '<tr><td>Republicans</td>' +
    '<td>' + contR + '</td>' +
    '<td>' + rPCT.toFixed(2) + '</td></tr>' +
    '<tr><td>Independents</td>' +
    '<td>' + contI + '</td>' +
    '<td>' + iPCT.toFixed(2) + '</td>' +
    '<tr><td>Total</td>' +
    '<td>' + contTotal + '</td>' +
    '<td>' + tPCT.toFixed(0) + '</td>' +
    '</tr></tbody>'

  document.getElementById('senate-party-loyalty').innerHTML = tabla;
}
