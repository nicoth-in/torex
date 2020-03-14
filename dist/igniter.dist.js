var Igniter = (function (exports) {
  'use strict';

  class SharedStorage extends EventTarget {
  	constructor(parent) {
        super();
        this.storage = {};
        this.parent = parent;
      }
    set(name, value) {
    	let st = this.getParentStorage();
    	if(st) {
      	return st.set(name, value);
      } else {
      	this.storage[name] = value;
        this.parent.dispatchEvent(new Event("sharedstoragechanged", {
          bubbles: true,
          cancelable: false,
        }));
      }
    }
    get(name) {
    	let st = this.getParentStorage();
    	if(st) {
      	return st.get(name);
      } else {
      	return this.storage[name];
      }
    }
    clear() {
    	let st = this.getParentStorage();
    	if(st) {
      	return st.clear();
      } else {
        let s = this.storage;
        this.storage = {};
        return s;
      }
    }
    getParentStorage() {
    	if(!this.parent.parentNode) ;
      else if(this.parent.parentNode.sharedStorage) {
      	return this.parent.parentNode.sharedStorage;
      }
      return false;
    }
  }

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

  const ps_rand = new PseudoRand();

  class NodeConstructor {
  	constructor(t) {
    	var answer;
    	if(!t.is_native) {
      	if(t.custom) {
        	if(!customElements.get(t.custom)) this.customize(t.custom, t.tag);
          answer = document.createElement(t.custom);
        } else {
        	t.custom = ps_rand.next();
        	while(customElements.get(t.custom)) {
          	t.custom = ps_rand.next();
          }
          t.custom = "igniter-"+t.custom;
          this.customize(t.custom, t.tag);
          answer = document.createElement(t.tag, { extends: t.custom });
        }
      } else {
      	answer = Reflect.construct(t.from, [], this.constructor);
      }
  		this.storageSet(answer);
      return answer;
    }
    customize(name, from) {
    	customElements.define(name, this.constructor, { extends: from });
    }
    storageSet(node) {
    	node.sharedStorage = new SharedStorage(node);
    }
  }

  const SuperP = NodeConstructor;
  Object.setPrototypeOf(SuperP.prototype, HTMLParagraphElement.prototype);
  Object.setPrototypeOf(SuperP, HTMLParagraphElement);

  class P extends SuperP {
  	constructor(opt) {
    	if(opt) {
        opt.tag = "p";
        opt.is_native = false;
      } else {
      	opt = {
        	is_native: true,
          from: HTMLParagraphElement,
        };
      }
      super(opt);
    }
  }

  exports.P = P;

  return exports;

}({}));
