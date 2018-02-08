let tableau = [1, 2];
for (let element of tableau) {
    console.log(element);  // 1  2
}
// On peut utiliser break et continue dans cette boucle.

// A l’intérieur de la boucle on dispose de la clé et de la valeur, voici un exemple avec un map :
let map = new Map([['prenom', 'Pierre'], ['nom', 'Durand']]);
for (let [key, value] of map) {
    console.log(`clé : ${key}, valeur : ${value}`);
}

// Boucle avec une map
let map = new Map();
map.set('prenom', 'Pierre');
map.set('nom', 'Durand');
for (let element of map.entries()) {
  console.log(element);
}
for (let element of map.values()) {
  console.log(element);
}
for (let element of map.keys()) {
  console.log(element);
}

// Si un objet n'est pas itérable, il faut créer un itérateur pour pouvoir le parcourir :
function* Proprietes(objet) {
    let proprietes = Reflect.ownKeys(objet);
    for (let propriete of proprietes) {
        yield [propriete, objet[propriete]];
    }
}
let identite = { prenom: 'Pierre', nom: 'Durand' };
for (let [key, value] of Proprietes(identite)) {
    console.log(`${key}: ${value}`);
}

// Ensembles de valeurs --> set
let ensemble = new Set();
ensemble.add(4);
console.log(ensemble.has(4));  // true
ensemble.delete(4);
console.log(ensemble.has(4));  // false

let set = new Set([1, 2, 3]);
set.forEach(function(value) {
  console.log(value);  // 1  2  3
});

let set = new Set([1, 2, 3]);
let tableau = Array.from(set);
console.log(tableau);  // 1,2,3

// Autres collection type (clé, valeur) --> Map
let map = new Map();
map.set('prenom', 'Pierre');
map.set('nom', 'Durand');
console.log(map.get('prenom')); // Pierre
console.log(map.get('nom')); // Durand
console.log(map.size); // 2
map.clear();
console.log(map.size); // 0

let map = new Map([['prenom', 'Pierre'], ['nom', 'Durand']]);
console.log(map.get('prenom')); // Pierre
console.log(map.get('nom')); // Durand
console.log(map.has('nom')); // true
console.log(map.has('age')); // false
map.delete('prenom');
console.log(map.has('prenom')); // false

let map = new Map([['prenom', 'Pierre'], ['nom', 'Durand']]);
map.forEach(function(value, key) {
  console.log('clé : ' + key + ', valeur : ' + value);
});

// Déstructuration
let identite = { nom: 'Durand', prenom: 'Pierre' };
let {nom, prenom} = identite;
console.log(nom);  // Durand
console.log(prenom);  // Pierre

let personne = { 
  identite: { nom: 'Durand', prenom: 'Pierre' },
  age: 20
};
let { identite: { nom, prenom }, age } = personne;
console.log(nom)  // Durand
console.log(prenom)  // Pierre
console.log(age)  // 20

// Avec Alias
let personne = { 
  identite: { nom: 'Durand', prenom: 'Pierre' },
  age: 20
};
let { identite: { nom: identiteNom, prenom: identitePrenom }, age: identiteAge } = personne;
console.log(identiteNom)  // Durand
console.log(identitePrenom)  // Pierre
console.log(identiteAge)  // 20

// Valeur par défaut
let personne = {nom: 'Durand', prenom: 'Pierre'};
let { nom, prenom, age = 20 } = personne;
console.log(nom)  // Durand
console.log(prenom)  // Pierre
console.log(age)  // 20

// Sur un tableau
let prenoms = [ 'Pierre', 'Jacques', 'Paul' ];
let [ prenomUn, prenomDeux ] = prenoms;
console.log(prenomUn); // Pierre
console.log(prenomDeux); // Jacques

let prenoms = [ 'Pierre', 'Jacques', 'Paul' ];
let [ , , prenomTrois ] = prenoms;
console.log(prenomTrois); // Paul

// Inversion de variables
let prenomUn = 'Pierre';
let prenomDeux = 'Paul';
[ prenomUn, prenomDeux ] = [ prenomDeux, prenomUn ];
console.log(prenomUn); // Paul
console.log(prenomDeux); // Pierre

// Autre cas
let prenoms = [ 'Pierre', 'Jacques', 'Paul' ];
let [ prenomUn, ...autres ] = prenoms;
console.log(prenomUn); // Pierre
console.log(autres[0]); // Jacques
console.log(autres[1]); // Paul

