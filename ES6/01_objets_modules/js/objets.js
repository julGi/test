// Héritage:
class User {
  constructor(name) {
    this.name = name;
  }
  salut() {
    console.log('Coucou ' + this.name + ' !');
  }
}
class Redactor extends User {
  constructor(name, category) {
    super(name);
    this.category = category;
  }
  salut() {
    console.log('Coucou ' + this.name + ' de la catégorie ' + this.category + ' !');
  }
}
let redactor = new Redactor('Marcel', 'Jeunesse');
redactor.salut();  // Coucou Marcel de la catégorie Jeunesse !

// Fonctions static:
class Nombre {
  ajoute(nombre1, nombre2) {
    return nombre1 + nombre2;
  }
  static soustrait(nombre1, nombre2) {
    return nombre1 - nombre2;
  }
}
let nombres = new Nombre(6, 3);
console.log(nombres.ajoute(6, 3));  // 9
console.log(Nombre.soustrait(10, 4));  // 6

// Accesseurs:
class User2 {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
    get nomComplet() {
        return this.prenom + ' ' + this.nom;
    }
    set nomComplet(value) {
        let decompose = value.split(' ');
        this.prenom = decompose[0];
        this.nom = decompose[1];
    }
}
let user2 = new User2('Durand','Pierre');
console.log(user2.nomComplet);  // Pierre Durand
user2.nomComplet  = 'Marc Assain';
console.log(user2.nomComplet);  // Marc Assain
