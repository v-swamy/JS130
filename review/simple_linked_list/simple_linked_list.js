'use strict';

class Element {
  constructor(datum, next) {
    this.elementDatum = datum;
    this.nextElement = next || null;
  }

  datum() {
    return this.elementDatum;
  }

  isTail() {
    return !this.next();
  }

  next() {
    return this.nextElement;
  }
}

class SimpleLinkedList {

  static fromArray(array) {
    let list = new SimpleLinkedList();
    if (array) {
      array.slice().reverse().forEach(datum => list.push(datum));
    }
    return list;
  }

  constructor() {
    this.headElement = null;
  }

  size() {
    let size = 0;
    let currentElement = this.headElement;
    while (currentElement) {
      size += 1;
      currentElement = currentElement.next();
    }
    return size;
  }

  isEmpty() {
    return !this.headElement;
  }

  push(datum) {
    let element = new Element(datum, this.head());
    this.headElement = element;
  }

  head() {
    return this.headElement;
  }

  peek() {
    return this.head() ? this.head().datum() : null;
  }

  pop() {
    let oldHead = this.head();
    this.headElement = oldHead.next();
    return oldHead.datum();
  }

  toArray() {
    let result = [];
    let element = this.head();

    while (element) {
      result.push(element.datum());
      element = element.next();
    }
    return result;
  }

  reverse() {
    let array = this.toArray();
    return SimpleLinkedList.fromArray(array.reverse());
  }
}

module.exports = { SimpleLinkedList, Element };
