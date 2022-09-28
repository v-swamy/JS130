'use strict';

class BeerSong {

  static verse(verseNum) {
    switch (verseNum) {
      case 0:
        return "No more bottles of beer on the wall, no more " +
        "bottles of beer.\nGo to the store and buy some " +
        "more, 99 bottles of beer on the wall.\n";
      case 1:
        return `1 bottle of beer on the wall, 1 bottle of beer.\n` +
        "Take it down and pass it around, no more bottles " +
        "of beer on the wall.\n";
      case 2:
        return `2 bottles of beer on the wall, 2 bottles of beer.\n` +
        `Take one down and pass it around, 1 bottle of beer ` +
        `on the wall.\n`;
      default:
        return `${verseNum} bottles of beer on the wall, ${verseNum} bottles of beer.\n` +
        `Take one down and pass it around, ${verseNum - 1} bottles of beer ` +
        `on the wall.\n`;
    }
  }

  static verses(startVerse, endVerse) {
    let result = [];
    let currentVerse = startVerse;

    while (currentVerse >= endVerse) {
      result.push(this.verse(currentVerse));
      currentVerse -= 1;
    }

    return result.join("\n");
  }

  static lyrics() {
    return this.verses(99, 0);
  }
}

module.exports = BeerSong;
