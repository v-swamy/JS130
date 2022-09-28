class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(otherStrand) {
    let [ shortStrand, longStrand ] = this.strand.length < otherStrand.length ?
      [ this.strand, otherStrand ] : [ otherStrand, this.strand ];

    console.log(shortStrand);
    console.log(longStrand);

    let diff = 0;

    [].forEach.call(shortStrand, (base, idx) => {
      if (base !== longStrand[idx]) {
        diff += 1;
      }
    });

    return diff;
  }
}

module.exports = DNA;

