var Igniter = (function (exports, Object) {
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

  const SuperAnchorElement = NodeConstructor;
  Object.setPrototypeOf(SuperAnchorElement.prototype, HTMLAnchorElement.prototype);
  Object.setPrototypeOf(SuperAnchorElement, HTMLAnchorElement);

  const SuperElement = NodeConstructor;
  Object.setPrototypeOf(SuperElement.prototype, HTMLElement.prototype);
  Object.setPrototypeOf(SuperElement, HTMLElement);

  const SuperUnknownElement = NodeConstructor;
  Object.setPrototypeOf(SuperUnknownElement.prototype, HTMLUnknownElement.prototype);
  Object.setPrototypeOf(SuperUnknownElement, HTMLUnknownElement);

  const SuperAreaElement = NodeConstructor;
  Object.setPrototypeOf(SuperAreaElement.prototype, HTMLAreaElement.prototype);
  Object.setPrototypeOf(SuperAreaElement, HTMLAreaElement);

  const SuperAudioElement = NodeConstructor;
  Object.setPrototypeOf(SuperAudioElement.prototype, HTMLAudioElement.prototype);
  Object.setPrototypeOf(SuperAudioElement, HTMLAudioElement);

  const SuperBaseElement = NodeConstructor;
  Object.setPrototypeOf(SuperBaseElement.prototype, HTMLBaseElement.prototype);
  Object.setPrototypeOf(SuperBaseElement, HTMLBaseElement);

  const SuperQuoteElement = NodeConstructor;
  Object.setPrototypeOf(SuperQuoteElement.prototype, HTMLQuoteElement.prototype);
  Object.setPrototypeOf(SuperQuoteElement, HTMLQuoteElement);

  const SuperBodyElement = NodeConstructor;
  Object.setPrototypeOf(SuperBodyElement.prototype, HTMLBodyElement.prototype);
  Object.setPrototypeOf(SuperBodyElement, HTMLBodyElement);

  const SuperBRElement = NodeConstructor;
  Object.setPrototypeOf(SuperBRElement.prototype, HTMLBRElement.prototype);
  Object.setPrototypeOf(SuperBRElement, HTMLBRElement);

  const SuperButtonElement = NodeConstructor;
  Object.setPrototypeOf(SuperButtonElement.prototype, HTMLButtonElement.prototype);
  Object.setPrototypeOf(SuperButtonElement, HTMLButtonElement);

  const SuperCanvasElement = NodeConstructor;
  Object.setPrototypeOf(SuperCanvasElement.prototype, HTMLCanvasElement.prototype);
  Object.setPrototypeOf(SuperCanvasElement, HTMLCanvasElement);

  const SuperTableCaptionElement = NodeConstructor;
  Object.setPrototypeOf(SuperTableCaptionElement.prototype, HTMLTableCaptionElement.prototype);
  Object.setPrototypeOf(SuperTableCaptionElement, HTMLTableCaptionElement);

  const SuperTableColElement = NodeConstructor;
  Object.setPrototypeOf(SuperTableColElement.prototype, HTMLTableColElement.prototype);
  Object.setPrototypeOf(SuperTableColElement, HTMLTableColElement);

  const SuperDataElement = NodeConstructor;
  Object.setPrototypeOf(SuperDataElement.prototype, HTMLDataElement.prototype);
  Object.setPrototypeOf(SuperDataElement, HTMLDataElement);

  const SuperDataListElement = NodeConstructor;
  Object.setPrototypeOf(SuperDataListElement.prototype, HTMLDataListElement.prototype);
  Object.setPrototypeOf(SuperDataListElement, HTMLDataListElement);

  const SuperModElement = NodeConstructor;
  Object.setPrototypeOf(SuperModElement.prototype, HTMLModElement.prototype);
  Object.setPrototypeOf(SuperModElement, HTMLModElement);

  const SuperDetailsElement = NodeConstructor;
  Object.setPrototypeOf(SuperDetailsElement.prototype, HTMLDetailsElement.prototype);
  Object.setPrototypeOf(SuperDetailsElement, HTMLDetailsElement);

  const SuperDirectoryElement = NodeConstructor;
  Object.setPrototypeOf(SuperDirectoryElement.prototype, HTMLDirectoryElement.prototype);
  Object.setPrototypeOf(SuperDirectoryElement, HTMLDirectoryElement);

  const SuperDivElement = NodeConstructor;
  Object.setPrototypeOf(SuperDivElement.prototype, HTMLDivElement.prototype);
  Object.setPrototypeOf(SuperDivElement, HTMLDivElement);

  const SuperDListElement = NodeConstructor;
  Object.setPrototypeOf(SuperDListElement.prototype, HTMLDListElement.prototype);
  Object.setPrototypeOf(SuperDListElement, HTMLDListElement);

  const SuperEmbedElement = NodeConstructor;
  Object.setPrototypeOf(SuperEmbedElement.prototype, HTMLEmbedElement.prototype);
  Object.setPrototypeOf(SuperEmbedElement, HTMLEmbedElement);

  const SuperFieldSetElement = NodeConstructor;
  Object.setPrototypeOf(SuperFieldSetElement.prototype, HTMLFieldSetElement.prototype);
  Object.setPrototypeOf(SuperFieldSetElement, HTMLFieldSetElement);

  const SuperFontElement = NodeConstructor;
  Object.setPrototypeOf(SuperFontElement.prototype, HTMLFontElement.prototype);
  Object.setPrototypeOf(SuperFontElement, HTMLFontElement);

  const SuperFormElement = NodeConstructor;
  Object.setPrototypeOf(SuperFormElement.prototype, HTMLFormElement.prototype);
  Object.setPrototypeOf(SuperFormElement, HTMLFormElement);

  const SuperFrameElement = NodeConstructor;
  Object.setPrototypeOf(SuperFrameElement.prototype, HTMLFrameElement.prototype);
  Object.setPrototypeOf(SuperFrameElement, HTMLFrameElement);

  const SuperFrameSetElement = NodeConstructor;
  Object.setPrototypeOf(SuperFrameSetElement.prototype, HTMLFrameSetElement.prototype);
  Object.setPrototypeOf(SuperFrameSetElement, HTMLFrameSetElement);

  const SuperHeadingElement = NodeConstructor;
  Object.setPrototypeOf(SuperHeadingElement.prototype, HTMLHeadingElement.prototype);
  Object.setPrototypeOf(SuperHeadingElement, HTMLHeadingElement);

  const SuperHeadElement = NodeConstructor;
  Object.setPrototypeOf(SuperHeadElement.prototype, HTMLHeadElement.prototype);
  Object.setPrototypeOf(SuperHeadElement, HTMLHeadElement);

  const SuperHRElement = NodeConstructor;
  Object.setPrototypeOf(SuperHRElement.prototype, HTMLHRElement.prototype);
  Object.setPrototypeOf(SuperHRElement, HTMLHRElement);

  const SuperHtmlElement = NodeConstructor;
  Object.setPrototypeOf(SuperHtmlElement.prototype, HTMLHtmlElement.prototype);
  Object.setPrototypeOf(SuperHtmlElement, HTMLHtmlElement);

  const SuperIFrameElement = NodeConstructor;
  Object.setPrototypeOf(SuperIFrameElement.prototype, HTMLIFrameElement.prototype);
  Object.setPrototypeOf(SuperIFrameElement, HTMLIFrameElement);

  const SuperImageElement = NodeConstructor;
  Object.setPrototypeOf(SuperImageElement.prototype, HTMLImageElement.prototype);
  Object.setPrototypeOf(SuperImageElement, HTMLImageElement);

  const SuperInputElement = NodeConstructor;
  Object.setPrototypeOf(SuperInputElement.prototype, HTMLInputElement.prototype);
  Object.setPrototypeOf(SuperInputElement, HTMLInputElement);

  const SuperLabelElement = NodeConstructor;
  Object.setPrototypeOf(SuperLabelElement.prototype, HTMLLabelElement.prototype);
  Object.setPrototypeOf(SuperLabelElement, HTMLLabelElement);

  const SuperLegendElement = NodeConstructor;
  Object.setPrototypeOf(SuperLegendElement.prototype, HTMLLegendElement.prototype);
  Object.setPrototypeOf(SuperLegendElement, HTMLLegendElement);

  const SuperLIElement = NodeConstructor;
  Object.setPrototypeOf(SuperLIElement.prototype, HTMLLIElement.prototype);
  Object.setPrototypeOf(SuperLIElement, HTMLLIElement);

  const SuperLinkElement = NodeConstructor;
  Object.setPrototypeOf(SuperLinkElement.prototype, HTMLLinkElement.prototype);
  Object.setPrototypeOf(SuperLinkElement, HTMLLinkElement);

  const SuperPreElement = NodeConstructor;
  Object.setPrototypeOf(SuperPreElement.prototype, HTMLPreElement.prototype);
  Object.setPrototypeOf(SuperPreElement, HTMLPreElement);

  const SuperMapElement = NodeConstructor;
  Object.setPrototypeOf(SuperMapElement.prototype, HTMLMapElement.prototype);
  Object.setPrototypeOf(SuperMapElement, HTMLMapElement);

  const SuperMarqueeElement = NodeConstructor;
  Object.setPrototypeOf(SuperMarqueeElement.prototype, HTMLMarqueeElement.prototype);
  Object.setPrototypeOf(SuperMarqueeElement, HTMLMarqueeElement);

  const SuperMenuElement = NodeConstructor;
  Object.setPrototypeOf(SuperMenuElement.prototype, HTMLMenuElement.prototype);
  Object.setPrototypeOf(SuperMenuElement, HTMLMenuElement);

  const SuperMenuItemElement = NodeConstructor;
  Object.setPrototypeOf(SuperMenuItemElement.prototype, HTMLMenuItemElement.prototype);
  Object.setPrototypeOf(SuperMenuItemElement, HTMLMenuItemElement);

  const SuperMetaElement = NodeConstructor;
  Object.setPrototypeOf(SuperMetaElement.prototype, HTMLMetaElement.prototype);
  Object.setPrototypeOf(SuperMetaElement, HTMLMetaElement);

  const SuperMeterElement = NodeConstructor;
  Object.setPrototypeOf(SuperMeterElement.prototype, HTMLMeterElement.prototype);
  Object.setPrototypeOf(SuperMeterElement, HTMLMeterElement);

  const SuperObjectElement = NodeConstructor;
  Object.setPrototypeOf(SuperObjectElement.prototype, HTMLObjectElement.prototype);
  Object.setPrototypeOf(SuperObjectElement, HTMLObjectElement);

  const SuperOListElement = NodeConstructor;
  Object.setPrototypeOf(SuperOListElement.prototype, HTMLOListElement.prototype);
  Object.setPrototypeOf(SuperOListElement, HTMLOListElement);

  const SuperOptGroupElement = NodeConstructor;
  Object.setPrototypeOf(SuperOptGroupElement.prototype, HTMLOptGroupElement.prototype);
  Object.setPrototypeOf(SuperOptGroupElement, HTMLOptGroupElement);

  const SuperOptionElement = NodeConstructor;
  Object.setPrototypeOf(SuperOptionElement.prototype, HTMLOptionElement.prototype);
  Object.setPrototypeOf(SuperOptionElement, HTMLOptionElement);

  const SuperOutputElement = NodeConstructor;
  Object.setPrototypeOf(SuperOutputElement.prototype, HTMLOutputElement.prototype);
  Object.setPrototypeOf(SuperOutputElement, HTMLOutputElement);

  const SuperParagraphElement = NodeConstructor;
  Object.setPrototypeOf(SuperParagraphElement.prototype, HTMLParagraphElement.prototype);
  Object.setPrototypeOf(SuperParagraphElement, HTMLParagraphElement);

  const SuperParamElement = NodeConstructor;
  Object.setPrototypeOf(SuperParamElement.prototype, HTMLParamElement.prototype);
  Object.setPrototypeOf(SuperParamElement, HTMLParamElement);

  const SuperPictureElement = NodeConstructor;
  Object.setPrototypeOf(SuperPictureElement.prototype, HTMLPictureElement.prototype);
  Object.setPrototypeOf(SuperPictureElement, HTMLPictureElement);

  const SuperProgressElement = NodeConstructor;
  Object.setPrototypeOf(SuperProgressElement.prototype, HTMLProgressElement.prototype);
  Object.setPrototypeOf(SuperProgressElement, HTMLProgressElement);

  const SuperScriptElement = NodeConstructor;
  Object.setPrototypeOf(SuperScriptElement.prototype, HTMLScriptElement.prototype);
  Object.setPrototypeOf(SuperScriptElement, HTMLScriptElement);

  const SuperSelectElement = NodeConstructor;
  Object.setPrototypeOf(SuperSelectElement.prototype, HTMLSelectElement.prototype);
  Object.setPrototypeOf(SuperSelectElement, HTMLSelectElement);

  const SuperSlotElement = NodeConstructor;
  Object.setPrototypeOf(SuperSlotElement.prototype, HTMLSlotElement.prototype);
  Object.setPrototypeOf(SuperSlotElement, HTMLSlotElement);

  const SuperSourceElement = NodeConstructor;
  Object.setPrototypeOf(SuperSourceElement.prototype, HTMLSourceElement.prototype);
  Object.setPrototypeOf(SuperSourceElement, HTMLSourceElement);

  const SuperSpanElement = NodeConstructor;
  Object.setPrototypeOf(SuperSpanElement.prototype, HTMLSpanElement.prototype);
  Object.setPrototypeOf(SuperSpanElement, HTMLSpanElement);

  const SuperStyleElement = NodeConstructor;
  Object.setPrototypeOf(SuperStyleElement.prototype, HTMLStyleElement.prototype);
  Object.setPrototypeOf(SuperStyleElement, HTMLStyleElement);

  const SuperTableElement = NodeConstructor;
  Object.setPrototypeOf(SuperTableElement.prototype, HTMLTableElement.prototype);
  Object.setPrototypeOf(SuperTableElement, HTMLTableElement);

  const SuperTableSectionElement = NodeConstructor;
  Object.setPrototypeOf(SuperTableSectionElement.prototype, HTMLTableSectionElement.prototype);
  Object.setPrototypeOf(SuperTableSectionElement, HTMLTableSectionElement);

  const SuperTableCellElement = NodeConstructor;
  Object.setPrototypeOf(SuperTableCellElement.prototype, HTMLTableCellElement.prototype);
  Object.setPrototypeOf(SuperTableCellElement, HTMLTableCellElement);

  const SuperTemplateElement = NodeConstructor;
  Object.setPrototypeOf(SuperTemplateElement.prototype, HTMLTemplateElement.prototype);
  Object.setPrototypeOf(SuperTemplateElement, HTMLTemplateElement);

  const SuperTextAreaElement = NodeConstructor;
  Object.setPrototypeOf(SuperTextAreaElement.prototype, HTMLTextAreaElement.prototype);
  Object.setPrototypeOf(SuperTextAreaElement, HTMLTextAreaElement);

  const SuperTimeElement = NodeConstructor;
  Object.setPrototypeOf(SuperTimeElement.prototype, HTMLTimeElement.prototype);
  Object.setPrototypeOf(SuperTimeElement, HTMLTimeElement);

  const SuperTitleElement = NodeConstructor;
  Object.setPrototypeOf(SuperTitleElement.prototype, HTMLTitleElement.prototype);
  Object.setPrototypeOf(SuperTitleElement, HTMLTitleElement);

  const SuperTableRowElement = NodeConstructor;
  Object.setPrototypeOf(SuperTableRowElement.prototype, HTMLTableRowElement.prototype);
  Object.setPrototypeOf(SuperTableRowElement, HTMLTableRowElement);

  const SuperTrackElement = NodeConstructor;
  Object.setPrototypeOf(SuperTrackElement.prototype, HTMLTrackElement.prototype);
  Object.setPrototypeOf(SuperTrackElement, HTMLTrackElement);

  const SuperUListElement = NodeConstructor;
  Object.setPrototypeOf(SuperUListElement.prototype, HTMLUListElement.prototype);
  Object.setPrototypeOf(SuperUListElement, HTMLUListElement);

  const SuperVideoElement = NodeConstructor;
  Object.setPrototypeOf(SuperVideoElement.prototype, HTMLVideoElement.prototype);
  Object.setPrototypeOf(SuperVideoElement, HTMLVideoElement);

  class A extends SuperAnchorElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "a";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLAnchorElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Abbr extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "abbr";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Acronym extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "acronym";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Address extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "address";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Applet extends SuperUnknownElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "applet";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLUnknownElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Area extends SuperAreaElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "area";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLAreaElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Article extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "article";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Aside extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "aside";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Audio extends SuperAudioElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "audio";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLAudioElement,
  				};
  			}
  			super(o);
  		}
  	}
  class B extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "b";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Base extends SuperBaseElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "base";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLBaseElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Basefont extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "basefont";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Bdi extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "bdi";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Bdo extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "bdo";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Bgsound extends SuperUnknownElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "bgsound";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLUnknownElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Big extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "big";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Blink extends SuperUnknownElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "blink";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLUnknownElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Blockquote extends SuperQuoteElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "blockquote";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLQuoteElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Body extends SuperBodyElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "body";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLBodyElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Br extends SuperBRElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "br";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLBRElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Button extends SuperButtonElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "button";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLButtonElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Canvas extends SuperCanvasElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "canvas";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLCanvasElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Caption extends SuperTableCaptionElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "caption";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLTableCaptionElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Center extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "center";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Cite extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "cite";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Code extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "code";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Col extends SuperTableColElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "col";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLTableColElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Colgroup extends SuperTableColElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "colgroup";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLTableColElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Command extends SuperUnknownElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "command";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLUnknownElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Content extends SuperUnknownElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "content";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLUnknownElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Data extends SuperDataElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "data";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLDataElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Datalist extends SuperDataListElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "datalist";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLDataListElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Dd extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "dd";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Del extends SuperModElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "del";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLModElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Details extends SuperDetailsElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "details";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLDetailsElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Dfn extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "dfn";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Dialog extends SuperUnknownElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "dialog";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLUnknownElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Dir extends SuperDirectoryElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "dir";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLDirectoryElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Div extends SuperDivElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "div";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLDivElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Dl extends SuperDListElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "dl";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLDListElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Dt extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "dt";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Em extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "em";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Embed extends SuperEmbedElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "embed";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLEmbedElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Fieldset extends SuperFieldSetElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "fieldset";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLFieldSetElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Figcaption extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "figcaption";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Figure extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "figure";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Font extends SuperFontElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "font";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLFontElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Footer extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "footer";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Form extends SuperFormElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "form";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLFormElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Frame extends SuperFrameElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "frame";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLFrameElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Frameset extends SuperFrameSetElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "frameset";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLFrameSetElement,
  				};
  			}
  			super(o);
  		}
  	}
  class H1 extends SuperHeadingElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "h1";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLHeadingElement,
  				};
  			}
  			super(o);
  		}
  	}
  class H2 extends SuperHeadingElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "h2";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLHeadingElement,
  				};
  			}
  			super(o);
  		}
  	}
  class H3 extends SuperHeadingElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "h3";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLHeadingElement,
  				};
  			}
  			super(o);
  		}
  	}
  class H4 extends SuperHeadingElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "h4";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLHeadingElement,
  				};
  			}
  			super(o);
  		}
  	}
  class H5 extends SuperHeadingElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "h5";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLHeadingElement,
  				};
  			}
  			super(o);
  		}
  	}
  class H6 extends SuperHeadingElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "h6";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLHeadingElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Head extends SuperHeadElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "head";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLHeadElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Header extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "header";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Hgroup extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "hgroup";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Hr extends SuperHRElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "hr";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLHRElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Html extends SuperHtmlElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "html";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLHtmlElement,
  				};
  			}
  			super(o);
  		}
  	}
  class I extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "i";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Iframe extends SuperIFrameElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "iframe";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLIFrameElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Image extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "image";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Img extends SuperImageElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "img";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLImageElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Input extends SuperInputElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "input";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLInputElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Ins extends SuperModElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "ins";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLModElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Isindex extends SuperUnknownElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "isindex";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLUnknownElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Kbd extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "kbd";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Keygen extends SuperUnknownElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "keygen";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLUnknownElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Label extends SuperLabelElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "label";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLLabelElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Legend extends SuperLegendElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "legend";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLLegendElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Li extends SuperLIElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "li";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLLIElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Link extends SuperLinkElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "link";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLLinkElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Listing extends SuperPreElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "listing";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLPreElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Main extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "main";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Map extends SuperMapElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "map";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLMapElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Mark extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "mark";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Marquee extends SuperMarqueeElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "marquee";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLMarqueeElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Menu extends SuperMenuElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "menu";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLMenuElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Menuitem extends SuperMenuItemElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "menuitem";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLMenuItemElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Meta extends SuperMetaElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "meta";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLMetaElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Meter extends SuperMeterElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "meter";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLMeterElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Multicol extends SuperUnknownElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "multicol";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLUnknownElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Nav extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "nav";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Nextid extends SuperUnknownElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "nextid";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLUnknownElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Nobr extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "nobr";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Noembed extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "noembed";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Noframes extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "noframes";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Noscript extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "noscript";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Ol extends SuperOListElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "ol";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLOListElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Optgroup extends SuperOptGroupElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "optgroup";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLOptGroupElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Option extends SuperOptionElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "option";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLOptionElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Output extends SuperOutputElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "output";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLOutputElement,
  				};
  			}
  			super(o);
  		}
  	}
  class P extends SuperParagraphElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "p";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLParagraphElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Param extends SuperParamElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "param";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLParamElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Picture extends SuperPictureElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "picture";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLPictureElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Plaintext extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "plaintext";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Pre extends SuperPreElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "pre";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLPreElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Progress extends SuperProgressElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "progress";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLProgressElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Q extends SuperQuoteElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "q";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLQuoteElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Rb extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "rb";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Rp extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "rp";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Rt extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "rt";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Rtc extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "rtc";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Ruby extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "ruby";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class S extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "s";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Samp extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "samp";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Script extends SuperScriptElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "script";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLScriptElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Section extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "section";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Select extends SuperSelectElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "select";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLSelectElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Shadow extends SuperUnknownElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "shadow";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLUnknownElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Slot extends SuperSlotElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "slot";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLSlotElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Small extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "small";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Source extends SuperSourceElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "source";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLSourceElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Spacer extends SuperUnknownElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "spacer";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLUnknownElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Span extends SuperSpanElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "span";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLSpanElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Strike extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "strike";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Strong extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "strong";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Style extends SuperStyleElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "style";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLStyleElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Sub extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "sub";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Summary extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "summary";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Sup extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "sup";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Table extends SuperTableElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "table";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLTableElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Tbody extends SuperTableSectionElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "tbody";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLTableSectionElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Td extends SuperTableCellElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "td";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLTableCellElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Template extends SuperTemplateElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "template";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLTemplateElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Textarea extends SuperTextAreaElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "textarea";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLTextAreaElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Tfoot extends SuperTableSectionElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "tfoot";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLTableSectionElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Th extends SuperTableCellElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "th";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLTableCellElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Thead extends SuperTableSectionElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "thead";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLTableSectionElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Time extends SuperTimeElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "time";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLTimeElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Title extends SuperTitleElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "title";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLTitleElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Tr extends SuperTableRowElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "tr";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLTableRowElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Track extends SuperTrackElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "track";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLTrackElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Tt extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "tt";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class U extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "u";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Ul extends SuperUListElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "ul";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLUListElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Var extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "var";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Video extends SuperVideoElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "video";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLVideoElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Wbr extends SuperElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "wbr";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLElement,
  				};
  			}
  			super(o);
  		}
  	}
  class Xmp extends SuperPreElement {
  		constructor(o) {
  			if(o) {
  				o.tag = "xmp";
  				o.is_native = false;
  			} else {
  				o = {
  					is_native: true,
  					from: HTMLPreElement,
  				};
  			}
  			super(o);
  		}
  	}

  exports.A = A;
  exports.Abbr = Abbr;
  exports.Acronym = Acronym;
  exports.Address = Address;
  exports.Applet = Applet;
  exports.Area = Area;
  exports.Article = Article;
  exports.Aside = Aside;
  exports.Audio = Audio;
  exports.B = B;
  exports.Base = Base;
  exports.Basefont = Basefont;
  exports.Bdi = Bdi;
  exports.Bdo = Bdo;
  exports.Bgsound = Bgsound;
  exports.Big = Big;
  exports.Blink = Blink;
  exports.Blockquote = Blockquote;
  exports.Body = Body;
  exports.Br = Br;
  exports.Button = Button;
  exports.Canvas = Canvas;
  exports.Caption = Caption;
  exports.Center = Center;
  exports.Cite = Cite;
  exports.Code = Code;
  exports.Col = Col;
  exports.Colgroup = Colgroup;
  exports.Command = Command;
  exports.Content = Content;
  exports.Data = Data;
  exports.Datalist = Datalist;
  exports.Dd = Dd;
  exports.Del = Del;
  exports.Details = Details;
  exports.Dfn = Dfn;
  exports.Dialog = Dialog;
  exports.Dir = Dir;
  exports.Div = Div;
  exports.Dl = Dl;
  exports.Dt = Dt;
  exports.Em = Em;
  exports.Embed = Embed;
  exports.Fieldset = Fieldset;
  exports.Figcaption = Figcaption;
  exports.Figure = Figure;
  exports.Font = Font;
  exports.Footer = Footer;
  exports.Form = Form;
  exports.Frame = Frame;
  exports.Frameset = Frameset;
  exports.H1 = H1;
  exports.H2 = H2;
  exports.H3 = H3;
  exports.H4 = H4;
  exports.H5 = H5;
  exports.H6 = H6;
  exports.Head = Head;
  exports.Header = Header;
  exports.Hgroup = Hgroup;
  exports.Hr = Hr;
  exports.Html = Html;
  exports.I = I;
  exports.Iframe = Iframe;
  exports.Image = Image;
  exports.Img = Img;
  exports.Input = Input;
  exports.Ins = Ins;
  exports.Isindex = Isindex;
  exports.Kbd = Kbd;
  exports.Keygen = Keygen;
  exports.Label = Label;
  exports.Legend = Legend;
  exports.Li = Li;
  exports.Link = Link;
  exports.Listing = Listing;
  exports.Main = Main;
  exports.Map = Map;
  exports.Mark = Mark;
  exports.Marquee = Marquee;
  exports.Menu = Menu;
  exports.Menuitem = Menuitem;
  exports.Meta = Meta;
  exports.Meter = Meter;
  exports.Multicol = Multicol;
  exports.Nav = Nav;
  exports.Nextid = Nextid;
  exports.Nobr = Nobr;
  exports.Noembed = Noembed;
  exports.Noframes = Noframes;
  exports.Noscript = Noscript;
  exports.Ol = Ol;
  exports.Optgroup = Optgroup;
  exports.Option = Option;
  exports.Output = Output;
  exports.P = P;
  exports.Param = Param;
  exports.Picture = Picture;
  exports.Plaintext = Plaintext;
  exports.Pre = Pre;
  exports.Progress = Progress;
  exports.Q = Q;
  exports.Rb = Rb;
  exports.Rp = Rp;
  exports.Rt = Rt;
  exports.Rtc = Rtc;
  exports.Ruby = Ruby;
  exports.S = S;
  exports.Samp = Samp;
  exports.Script = Script;
  exports.Section = Section;
  exports.Select = Select;
  exports.Shadow = Shadow;
  exports.Slot = Slot;
  exports.Small = Small;
  exports.Source = Source;
  exports.Spacer = Spacer;
  exports.Span = Span;
  exports.Strike = Strike;
  exports.Strong = Strong;
  exports.Style = Style;
  exports.Sub = Sub;
  exports.Summary = Summary;
  exports.Sup = Sup;
  exports.Table = Table;
  exports.Tbody = Tbody;
  exports.Td = Td;
  exports.Template = Template;
  exports.Textarea = Textarea;
  exports.Tfoot = Tfoot;
  exports.Th = Th;
  exports.Thead = Thead;
  exports.Time = Time;
  exports.Title = Title;
  exports.Tr = Tr;
  exports.Track = Track;
  exports.Tt = Tt;
  exports.U = U;
  exports.Ul = Ul;
  exports.Var = Var;
  exports.Video = Video;
  exports.Wbr = Wbr;
  exports.Xmp = Xmp;

  return exports;

}({}, Object));
