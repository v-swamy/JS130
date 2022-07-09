class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(strand2) {
    let shortStrand;
    let longStrand;
    let counter = 0;

    if (this.strand.length < strand2.length) {
      shortStrand = this.strand;
      longStrand = strand2;
    } else {
      shortStrand = strand2;
      longStrand = this.strand;
    }

    for (let index = 0; index < shortStrand.length; index += 1) {
      if (shortStrand[index] !== longStrand[index]) {
        counter += 1;
      }
    }
    return counter;
  }
}

module.exports = DNA;

// let dna = new DNA('');
// console.log(dna.hammingDistance(''));

// let dna = new DNA('GGACTGA');
// console.log(dna.hammingDistance('GGACTGA'));

// let dna = new DNA('ACT');
// console.log(dna.hammingDistance('GGA'));

// let strand = 'GGACGGATTCTGACCTGGACTAATTTTGGGG';
// let distance = 'AGGACGGATTCTGACCTGGACTAATTTTGGGG';
// let dna = new DNA(strand);
// console.log(dna.hammingDistance(distance));

// let dna = new DNA('GGACG');
// console.log(dna.hammingDistance('GGTCG'));

// let dna = new DNA('ACCAGGG');
// console.log(dna.hammingDistance('ACTATGG'));

// let dna = new DNA('AAACTAGGGG');
// console.log(dna.hammingDistance('AGGCTAGCGGTAGGAC'));

// let dna = new DNA('GACTACGGACAGGGTAGGGAAT');
// let distance = 'GACATCGCACACC';
// console.log(dna.hammingDistance(distance));

// let dna = new DNA('AGACAACAGCCAGCCGCCGGATT');
// console.log(dna.hammingDistance('AGGCAA'));
// console.log(dna.hammingDistance('AGACATCTTTCAGCCGCCGGATTAGGCAA'));
// console.log(dna.hammingDistance('AGG'));