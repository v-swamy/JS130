"use strict";

class Element {
  constructor(datum, element = null) {
    this.elementDatum = datum;
    this.linkedElement = element;
  }

  datum() {
    return this.elementDatum;
  }

  isTail() {
    return !this.linkedElement;
  }

  next() {
    return this.linkedElement;
  }
}

class SimpleLinkedList {

  static fromArray(array) {
    let list = new SimpleLinkedList();
    if (!array) return list;
    array.slice().reverse().forEach(element => list.push(element));
    return list;
  }

  list = [];

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.list.length === 0;
  }

  push(datum) {
    if (!this.isEmpty()) {
      this.list.push(new Element(datum, this.head()));
    } else {
      this.list.push(new Element(datum));
    }
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.head().datum();
  }

  head() {
    return this.list[this.list.length - 1];
  }

  pop() {
    return this.list.pop().datum();
  }

  toArray() {
    return this.list.slice().reverse().map(element => element.datum());
  }

  reverse() {
    return SimpleLinkedList.fromArray(this.toArray().slice().reverse());
  }
}

module.exports = { SimpleLinkedList, Element };
