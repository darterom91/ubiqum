//var
var data;
var url = 'https://api.propublica.org/congress/v1/113/house/members.json';
var myHeaders = {
  method: 'GET',
  headers: { 'X-API-Key': 'GsSYZ2inVKeuH50adSeijtpqabjqjgHOUD2nKFXA' }
};
var objGlobal = [];

var app = new Vue({
  el: '#app',
  data: {
    members: [],
    medD: 0,
    medR: 0,
    medI: 0,
    medDPCT: 0,
    medRPCT: 0,
    medIPCT: 0,
    totVotes: 0,
    totVotesPCT: 0,
  },
});

var app2 = new Vue({
  el: '#app2',
  data: {
    members: [],
    ascs: [],
    descs: []
  },
});
var aux=0;

//fetch function
fetch(url, myHeaders).then(function (response){
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);
}).then(function (json){
  data = json;
  console.log("Data\n"
            + "----\n\n");
  console.log(data);
  data = cargarDatos(data);
  addApp(objGlobal);
  members();
  medVotes(app);
  medVotesPct(app);
  totalPCTVotesAsc();
  totalPCTVotesDesc();

}).catch(function (error){
  console.log("Request Failed: "+error.message);
});

function cargarDatos(array) {
  console.log("cargarDatos\n"
    + "-----------\n\n");
  objGlobal = array;
  // this.app.members = objGlobal.results[0].members;
  return array;
}

function addApp(objGlobal) {
  app.members = objGlobal.results[0].members;
  app2.members = objGlobal.results[0].members;
}

function totalPCTVotesAsc() {
  var numAux = 10;
  cont = 0;
  console.log("totalPCTVotesAsc\n"
            + "----------------\n\n")

  for (var i in objGlobal.results[0].members) {
    if (objGlobal.results[0].members[i].missed_votes_pct <= 10 && objGlobal.results[0].members[i].missed_votes_pct != 0) {
      if (cont < numAux) {
        app2.ascs[cont] = objGlobal.results[0].members[i];
      }
      cont++;
    }
  }

  app2.ascs.sort(function (a, b) {
    return (a.missed_votes_pct - b.missed_votes_pct);
  });
}

function totalPCTVotesDesc() {
  var numAux = 10, aux2 = 0;
  cont = 0;
  console.log("totalPCTVotesDesc\n"
            + "-----------------\n\n");

  for (var i in app2.members) {
    if (app2.members[i].missed_votes_pct > 10) {
      if (cont < numAux) {
        app2.descs[cont] = app2.members[i];
      }
      cont++;
    }
  }
  //metodo burbuja en js
  for (var i = 0; i < app2.descs.length; i++) {
    for (var j = 0; j < app2.descs.length - 1; j++) {
      if (app2.descs[i].missed_votes_pct > app2.descs[j].missed_votes_pct) {
        aux2 = app2.descs[i].missed_votes_pct;
        app2.descs[i].missed_votes_pct = app2.descs[j].missed_votes_pct;
        app2.descs[j].missed_votes_pct = aux2;
			}
		}
	}
}

function members() {
  console.log("\nmembers\n"
              + "-------\n\n");
  for (var i in app.members) {
    console.log(app.members[i].first_name);
  }
}

function medVotes(app) {
  var cont = 0;
  console.log("\nAPP\n"
              + "---\n\n");
  //medD
  for (var i in app.members) {
    if (app.members[i].party == "D") {
      aux = aux + app.members[i].total_votes;
      cont++;
    }
  }
  app.totVotes = app.totVotes + aux;//Calcula los votos totales
  aux = aux /cont;
  app.medD = aux.toFixed(2);

  //medR
  cont = 0;
  aux = 0;
  for (var i in app.members) {
    if (app.members[i].party == "R") {
      aux = aux + app.members[i].total_votes;
      cont++;
    }
  }
  app.totVotes = app.totVotes + aux;//Calcula los votos totales
  aux = aux / cont;
  app.medR = aux.toFixed(2);

  //medI
  cont = 0;
  aux = 0;
  for (var i in app.members) {
    if (app.members[i].party == "I") {
      aux = aux + app.members[i].total_votes;
      cont++;
    }
  }
  app.totVotes = app.totVotes + aux;//Calcula los votos totales
  aux = aux / cont;
  app.medI = aux.toFixed(2);
  console.log("medI: " + app.medI);
  console.log("cont: " + cont);
}

function medVotesPct(app) {
  var cont = 0;
  aux = 0;
  for (var i in app.members) {
    if (app.members[i].party == 'D') {
      aux = aux + app.members[i].votes_with_party_pct;
      cont++;
    }
  }
  console.log(cont);
  
  app.totVotesPCT = app.totVotesPCT + aux;
  aux = aux / cont;
  app.medDPCT = aux.toFixed(2);

  cont = 0;
  aux = 0;
  for (var i in app.members) {
    if (app.members[i].party == 'R') {
      aux = aux + app.members[i].votes_with_party_pct;
      cont++;
    }
  }
  console.log(cont);
  app.totVotesPCT = app.totVotesPCT + aux;
  aux = aux / cont;
  app.medRPCT = aux.toFixed(2);

  cont = 0;
  aux = 0;
  for (var i in app.members) {
    if (app.members[i].party == 'I') {
      aux = aux + app.members[i].votes_with_party_pct;
      cont++;
    }
  }
  app.totVotesPCT = app.totVotesPCT + aux;
  aux = aux / cont;
  app.medIPCT = aux.toFixed(2);

  app.totVotesPCT = app.totVotesPCT.toFixed(2);
}

