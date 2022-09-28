'use strict';

class CustomSet {
  constructor(array) {
    this.elements = array ? [...array] : [];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  contains(element) {
    return this.elements.includes(element);
  }

  isSubset(otherSet) {
    return this.elements.every(element => otherSet.contains(element));
  }

  isDisjoint(otherSet) {
    return this.elements.every(element => !otherSet.contains(element));
  }

  isSame(otherSet) {
    return this.isSubset(otherSet) && otherSet.isSubset(this);
  }

  add(element) {
    if (!this.contains(element)) this.elements.push(element);
    return this;
  }

  intersection(otherSet) {
    let result = [];
    this.elements.forEach(element => {
      if (otherSet.contains(element)) {
        result.push(element);
      }
    });
    return new CustomSet(result);
  }

  difference(otherSet) {
    let result = [];
    this.elements.forEach(element => {
      if (!otherSet.contains(element)) {
        result.push(element);
      }
    });
    return new CustomSet(result);
  }

  union(otherSet) {
    let result = [...this.elements];
    otherSet.elements.forEach(element => {
      if (!result.includes(element)) {
        result.push(element);
      }
    });
    return new CustomSet(result);
  }
}

module.exports = CustomSet;

