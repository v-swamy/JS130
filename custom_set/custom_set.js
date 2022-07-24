"use strict";

class CustomSet {
  constructor(array = []) {
    this.set = array;
  }

  isEmpty() {
    return (this.set.length === 0);
  }

  contains(element) {
    return this.set.includes(element);
  }

  isSubset(anotherSet) {
    return this.set.every(element => anotherSet.contains(element));
  }

  isDisjoint(anotherSet) {
    return this.set.every(element => !anotherSet.contains(element));
  }

  isSame(anotherSet) {
    return this.isSubset(anotherSet) && anotherSet.isSubset(this);
  }

  add(element) {
    if (!this.contains(element)) {
      this.set.push(element);
    }
    return this;
  }

  intersection(anotherSet) {
    let commonElements = this.set.filter(element =>
      anotherSet.contains(element));

    return new CustomSet(commonElements);
  }

  difference(anotherSet) {
    let differentElements = this.set.filter(element =>
      !anotherSet.contains(element));

    return new CustomSet(differentElements);
  }

  union(anotherSet) {
    let allElements = [...this.set, ...anotherSet.set];
    let uniqueElements = [];
    allElements.forEach(element => {
      if (!uniqueElements.includes(element)) {
        uniqueElements.push(element);
      }
    });
    return new CustomSet(uniqueElements);
  }
}


module.exports = CustomSet;
