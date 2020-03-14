class PseudoRand {
	next() {
  	return this.random("abcdefghijklmnopqrstuvwxyz-", 16);
  }
  reset() {
    index = 0;
    bitIndex = 0;
    crypto.getRandomValues(buffer);
  }
  getBits(count) {
    let bits = 0;
    while (count > 0) {
      const todo = count < 8 - bitIndex ? count : 8 - bitIndex;
      count -= todo;
      bits = bits << todo;
      bits += (BigInt(buffer[index]) >> bitIndex) & ((1 << todo) -1);
      bitIndex += todo;
      if (bitIndex === 8) {
        bitIndex = 0;
        index++;
      }
      if (index === max) {
        this.reset();
      }
    }
    return bits;
  }
  countBits(num) {
    let bitCount = 0;
    while (num > 0) {
      bitCount++;
      num = num >> 1;
    }
    return bitCount;
  }
  getN(max, bitCount) {
    if (max <= 0) {
      throw new Error("this does not compute unless you want an infinite loop");
    }
    let out;

    do {
      out = this.getBits(bitCount);
    } while (out >= max);

    return out;
  }
  random(input, count) {
    const buffer = new Uint8Array(32);
    let index;
    let bitIndex;
    const max = BigInt(buffer.length);

    this.reset();

    let wasNumber = false;
    let wasString = false;

    switch (typeof input) {
      default: {
        throw new Error("unsupported input");
      }
      case "number": {
        wasNumber = true;
        input = BigInt(input);
      }
      case "bigint": {
        const out = this.getN(input, this.countBits(max));
        return wasNumber ? Number(out) : out;
      }
      case "string": {
        wasString = true;
        input = input.split("");
      }
      case "object": {
        if (!Array.isArray(input)) {
          throw new Error("objects are not supported here");
        }
        if (typeof count != "number" && typeof count != "bigint") {
          throw new Error("you need to specify a count");
        }
        const contentCount = BigInt(input.length);
        const bitCount = this.countBits(contentCount);
        const out = [...Array(count)].map(_=> {
          return input[this.getN(contentCount, bitCount)];
        });
        return wasString ? out.join("") : out;
      }
    }

  }
}

export default PseudoRand
