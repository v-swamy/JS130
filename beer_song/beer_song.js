"use strict";

class BeerSong {

  static verse(num) {
    switch (true) {
      case num >= 3:
        return `${num} bottles of beer on the wall, ${num} bottles of beer.\n` +
        `Take one down and pass it around, ${num - 1} bottles of beer ` +
        "on the wall.\n";
      case num === 2:
        return `2 bottles of beer on the wall, 2 bottles of beer.\n` +
        `Take one down and pass it around, 1 bottle of beer ` +
        "on the wall.\n";
      case num === 1:
        return `1 bottle of beer on the wall, 1 bottle of beer.\n` +
        `Take it down and pass it around, no more bottles of beer ` +
        "on the wall.\n";
      case num === 0:
        return "No more bottles of beer on the wall, no more " +
        "bottles of beer.\nGo to the store and buy some " +
        "more, 99 bottles of beer on the wall.\n";
    }
  }

  static verses(start, end) {
    let result = '';
    for (let verseNum = start; verseNum >= end; verseNum -= 1) {
      result = result + this.verse(verseNum) + "\n";
    }
    return result.slice(0, result.length - 1);
  }

  static lyrics() {
    return this.verses(99, 0);
  }
}

module.exports = BeerSong;
