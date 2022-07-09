class Diamond {

  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static makeDiamond(letter) {
    let topHalfArray = this.createTopHalfArray(letter);
    let bottomHalfArray = [...topHalfArray].reverse().slice(1);
    let diamond = topHalfArray.concat(bottomHalfArray).join('');
    return diamond;
  }

  static createTopHalfArray(letter) {
    let targetIndex = this.alphabet.indexOf(letter);
    let allRows = [];

    for (let currentIndex = 0; currentIndex <= targetIndex; currentIndex += 1) {
      let row = this.createRow(currentIndex, targetIndex);
      allRows.push(row);
    }

    return allRows;
  }

  static createRow(currentIndex, targetIndex) {
    let totalWidth = this.calculateWidth(targetIndex);

    if (currentIndex === 0) {
      return " ".repeat((totalWidth - 1) / 2) + 'A' + " ".repeat((totalWidth - 1) / 2) + "\n";
    }

    let currentLetter = this.alphabet[currentIndex];
    let rowWidth = this.calculateWidth(currentIndex);

    let row = " ".repeat((totalWidth - rowWidth) / 2) +
                currentLetter +
                " ".repeat(rowWidth - 2) +
                currentLetter +
                " ".repeat((totalWidth - rowWidth) / 2) + "\n";

    return row;
  }

  static calculateWidth(index) {
    if (index === 0) {
      return 1;
    }
    return (this.calculateWidth(index - 1) + 2);
  }
}

module.exports = Diamond;