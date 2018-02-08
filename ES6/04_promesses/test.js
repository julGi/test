// promesse (promise) = requête asynchrone avec ES6

// 1- Déclaration de la promesse
let promesse = new Promise(function (resolve, reject) {
  // On accomplit une tâche
  if ( Tout s'est bien déroulé ) {
    resolve(value);s
  } else {
    reject(reason);
  }
});

// 2- Utilisation de la promesse
promesse.then(resultat => {
    console.log(result); // Ca s'est bien passé !
}, err => {
    console.log(err); // Il y a une erreur !
});

//---------------------------------------
// Requête AJAX avec une promesse
function getJSON(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
      try {
        if(this.status === 200 ){
            resolve(JSON.parse(this.response));
        } else{
            reject(this.status + " " + this.statusText);
        }
      } catch(e){
          reject(e.message);
      }
    };
    request.onerror = function() {
      reject(this.status + " " + this.statusText);
    };
    request.send();
  });
}
getJSON("test").then(resultat => {
    console.log(resultat);
}, erreur => {
    console.log(erreur);
});

//---------------------------------------

