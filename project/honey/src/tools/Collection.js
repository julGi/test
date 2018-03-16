export default class Collection {

  _getClassifier(elt) {
    let classifierValue = ""
    if (this.classifier === "") {
      classifierValue = elt
    } else {
      let classifierValueOri = elt[this.classifier]
      let inc = 0
      classifierValue = classifierValueOri
      while (this.elements.has(classifierValue)) {
        classifierValue = classifierValueOri+"."+inc
        inc++
      }
    }
   return classifierValue
}

  constructor(values, classifier=""){
    this.elements = new Map();
    this.classifier = classifier
    for (let elt of values) {
      let c = this._getClassifier(elt)
      this.elements.set(c,elt)
    }
    this.elements = new Map([...this.elements.entries()].sort())
  }

  getMap() { return this.elements }

  getArray() {
    let returnArray = []
    this.elements.forEach((value) => returnArray.push(value))
    return returnArray
  }
}
