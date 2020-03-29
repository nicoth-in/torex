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

  function Randomize() {
  	return Array.apply(0, Array(16)).map(function() {
      return (function(charset){
          return charset.charAt(Math.floor(Math.random() * charset.length))
      }('abcdefghijklmnopqrstuvwxyz-'));
  	}).join('')
  }

  class NodeConstructor {
  	constructor(ray) {
  		this.c = ray.c;
  		switch (ray.type) {
  			case "native":
  				break;
  			case "tag":
  				if(!customElements.get(ray.custom)) {
  					this.customize(ray.custom, ray.tag);
  				}
  				break;
  			case "custom":
  				if(!customElements.get(ray.custom)) {
  					try {
  						this.customize(ray.custom, ray.tag);
  					}
  					catch(e) {
  						//console.error(e);
  					}
  				}
  				break;
  			case "default":
  				try {
  					this.customize("igniter-"+ray.custom, ray.tag);
  				}
  				catch(e) {
  					//console.error(e);
  				}
  				break;
  		}
  		let answer = Reflect.construct(ray.from, [], ray.c);

  		for(let v in ray.attr) {
  			answer.setAttribute(v, ray.attr[v]);
  		}

  		for(let item of ray.items) {
  			answer.appendChild(item);
  		}

  		if(answer) this.storageSet(answer);
      return answer;
    }
    customize(name, from) {
    	customElements.define(name, this.c, { extends: from });
    }
    storageSet(node) {
    	node.sharedStorage = new SharedStorage(node);
    }
  }

  class Ray {
  	constructor(options) {
  		this.tag = options.tag;
  		this.c = options.c;
  		this.from = options.from;
  		if(options.native) {
  			this.type = "native";
  		} else if(this.c.name.toLowerCase() == this.tag.toLowerCase()) {
  			if(this.custom) console.error("You can't customize default elements. Create a new class and extend this element.");
  			this.type = "tag";
  			this.custom = "igniter-"+this.tag;
  		} else if(options.custom) {
  			this.type = "custom";
  			this.custom = options.custom;
  		} else {
  			this.type = "default";
  			this.custom = false;
  			this.genCustom();
  		}

  		this.attr = options.attr || {};
  		this.items = options.items || [];

  		if(!(this.items instanceof Array)) {
  			this.items = [this.items];
  		}

  	}
  	genCustom() {
  		while(customElements.get(this.custom)||(!this.custom)) {
  			this.custom = Randomize();
  		}
  	}
  }

  class IgniterAnchorElement {
  	constructor(inp) {
  		let from = HTMLAnchorElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterAnchorElement.prototype, HTMLAnchorElement.prototype);
  Object.setPrototypeOf(IgniterAnchorElement, HTMLAnchorElement);

  class IgniterElement {
  	constructor(inp) {
  		let from = HTMLElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterElement.prototype, HTMLElement.prototype);
  Object.setPrototypeOf(IgniterElement, HTMLElement);

  class IgniterUnknownElement {
  	constructor(inp) {
  		let from = HTMLUnknownElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterUnknownElement.prototype, HTMLUnknownElement.prototype);
  Object.setPrototypeOf(IgniterUnknownElement, HTMLUnknownElement);

  class IgniterAreaElement {
  	constructor(inp) {
  		let from = HTMLAreaElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterAreaElement.prototype, HTMLAreaElement.prototype);
  Object.setPrototypeOf(IgniterAreaElement, HTMLAreaElement);

  class IgniterAudioElement {
  	constructor(inp) {
  		let from = HTMLAudioElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterAudioElement.prototype, HTMLAudioElement.prototype);
  Object.setPrototypeOf(IgniterAudioElement, HTMLAudioElement);

  class IgniterBaseElement {
  	constructor(inp) {
  		let from = HTMLBaseElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterBaseElement.prototype, HTMLBaseElement.prototype);
  Object.setPrototypeOf(IgniterBaseElement, HTMLBaseElement);

  class IgniterQuoteElement {
  	constructor(inp) {
  		let from = HTMLQuoteElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterQuoteElement.prototype, HTMLQuoteElement.prototype);
  Object.setPrototypeOf(IgniterQuoteElement, HTMLQuoteElement);

  class IgniterBodyElement {
  	constructor(inp) {
  		let from = HTMLBodyElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterBodyElement.prototype, HTMLBodyElement.prototype);
  Object.setPrototypeOf(IgniterBodyElement, HTMLBodyElement);

  class IgniterBRElement {
  	constructor(inp) {
  		let from = HTMLBRElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterBRElement.prototype, HTMLBRElement.prototype);
  Object.setPrototypeOf(IgniterBRElement, HTMLBRElement);

  class IgniterButtonElement {
  	constructor(inp) {
  		let from = HTMLButtonElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterButtonElement.prototype, HTMLButtonElement.prototype);
  Object.setPrototypeOf(IgniterButtonElement, HTMLButtonElement);

  class IgniterCanvasElement {
  	constructor(inp) {
  		let from = HTMLCanvasElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterCanvasElement.prototype, HTMLCanvasElement.prototype);
  Object.setPrototypeOf(IgniterCanvasElement, HTMLCanvasElement);

  class IgniterTableCaptionElement {
  	constructor(inp) {
  		let from = HTMLTableCaptionElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterTableCaptionElement.prototype, HTMLTableCaptionElement.prototype);
  Object.setPrototypeOf(IgniterTableCaptionElement, HTMLTableCaptionElement);

  class IgniterTableColElement {
  	constructor(inp) {
  		let from = HTMLTableColElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterTableColElement.prototype, HTMLTableColElement.prototype);
  Object.setPrototypeOf(IgniterTableColElement, HTMLTableColElement);

  class IgniterDataElement {
  	constructor(inp) {
  		let from = HTMLDataElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterDataElement.prototype, HTMLDataElement.prototype);
  Object.setPrototypeOf(IgniterDataElement, HTMLDataElement);

  class IgniterDataListElement {
  	constructor(inp) {
  		let from = HTMLDataListElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterDataListElement.prototype, HTMLDataListElement.prototype);
  Object.setPrototypeOf(IgniterDataListElement, HTMLDataListElement);

  class IgniterModElement {
  	constructor(inp) {
  		let from = HTMLModElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterModElement.prototype, HTMLModElement.prototype);
  Object.setPrototypeOf(IgniterModElement, HTMLModElement);

  class IgniterDetailsElement {
  	constructor(inp) {
  		let from = HTMLDetailsElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterDetailsElement.prototype, HTMLDetailsElement.prototype);
  Object.setPrototypeOf(IgniterDetailsElement, HTMLDetailsElement);

  class IgniterDirectoryElement {
  	constructor(inp) {
  		let from = HTMLDirectoryElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterDirectoryElement.prototype, HTMLDirectoryElement.prototype);
  Object.setPrototypeOf(IgniterDirectoryElement, HTMLDirectoryElement);

  class IgniterDivElement {
  	constructor(inp) {
  		let from = HTMLDivElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterDivElement.prototype, HTMLDivElement.prototype);
  Object.setPrototypeOf(IgniterDivElement, HTMLDivElement);

  class IgniterDListElement {
  	constructor(inp) {
  		let from = HTMLDListElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterDListElement.prototype, HTMLDListElement.prototype);
  Object.setPrototypeOf(IgniterDListElement, HTMLDListElement);

  class IgniterEmbedElement {
  	constructor(inp) {
  		let from = HTMLEmbedElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterEmbedElement.prototype, HTMLEmbedElement.prototype);
  Object.setPrototypeOf(IgniterEmbedElement, HTMLEmbedElement);

  class IgniterFieldSetElement {
  	constructor(inp) {
  		let from = HTMLFieldSetElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterFieldSetElement.prototype, HTMLFieldSetElement.prototype);
  Object.setPrototypeOf(IgniterFieldSetElement, HTMLFieldSetElement);

  class IgniterFontElement {
  	constructor(inp) {
  		let from = HTMLFontElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterFontElement.prototype, HTMLFontElement.prototype);
  Object.setPrototypeOf(IgniterFontElement, HTMLFontElement);

  class IgniterFormElement {
  	constructor(inp) {
  		let from = HTMLFormElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterFormElement.prototype, HTMLFormElement.prototype);
  Object.setPrototypeOf(IgniterFormElement, HTMLFormElement);

  class IgniterFrameElement {
  	constructor(inp) {
  		let from = HTMLFrameElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterFrameElement.prototype, HTMLFrameElement.prototype);
  Object.setPrototypeOf(IgniterFrameElement, HTMLFrameElement);

  class IgniterFrameSetElement {
  	constructor(inp) {
  		let from = HTMLFrameSetElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterFrameSetElement.prototype, HTMLFrameSetElement.prototype);
  Object.setPrototypeOf(IgniterFrameSetElement, HTMLFrameSetElement);

  class IgniterHeadingElement {
  	constructor(inp) {
  		let from = HTMLHeadingElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterHeadingElement.prototype, HTMLHeadingElement.prototype);
  Object.setPrototypeOf(IgniterHeadingElement, HTMLHeadingElement);

  class IgniterHeadElement {
  	constructor(inp) {
  		let from = HTMLHeadElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterHeadElement.prototype, HTMLHeadElement.prototype);
  Object.setPrototypeOf(IgniterHeadElement, HTMLHeadElement);

  class IgniterHRElement {
  	constructor(inp) {
  		let from = HTMLHRElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterHRElement.prototype, HTMLHRElement.prototype);
  Object.setPrototypeOf(IgniterHRElement, HTMLHRElement);

  class IgniterHtmlElement {
  	constructor(inp) {
  		let from = HTMLHtmlElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterHtmlElement.prototype, HTMLHtmlElement.prototype);
  Object.setPrototypeOf(IgniterHtmlElement, HTMLHtmlElement);

  class IgniterIFrameElement {
  	constructor(inp) {
  		let from = HTMLIFrameElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterIFrameElement.prototype, HTMLIFrameElement.prototype);
  Object.setPrototypeOf(IgniterIFrameElement, HTMLIFrameElement);

  class IgniterImageElement {
  	constructor(inp) {
  		let from = HTMLImageElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterImageElement.prototype, HTMLImageElement.prototype);
  Object.setPrototypeOf(IgniterImageElement, HTMLImageElement);

  class IgniterInputElement {
  	constructor(inp) {
  		let from = HTMLInputElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterInputElement.prototype, HTMLInputElement.prototype);
  Object.setPrototypeOf(IgniterInputElement, HTMLInputElement);

  class IgniterLabelElement {
  	constructor(inp) {
  		let from = HTMLLabelElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterLabelElement.prototype, HTMLLabelElement.prototype);
  Object.setPrototypeOf(IgniterLabelElement, HTMLLabelElement);

  class IgniterLegendElement {
  	constructor(inp) {
  		let from = HTMLLegendElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterLegendElement.prototype, HTMLLegendElement.prototype);
  Object.setPrototypeOf(IgniterLegendElement, HTMLLegendElement);

  class IgniterLIElement {
  	constructor(inp) {
  		let from = HTMLLIElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterLIElement.prototype, HTMLLIElement.prototype);
  Object.setPrototypeOf(IgniterLIElement, HTMLLIElement);

  class IgniterLinkElement {
  	constructor(inp) {
  		let from = HTMLLinkElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterLinkElement.prototype, HTMLLinkElement.prototype);
  Object.setPrototypeOf(IgniterLinkElement, HTMLLinkElement);

  class IgniterPreElement {
  	constructor(inp) {
  		let from = HTMLPreElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterPreElement.prototype, HTMLPreElement.prototype);
  Object.setPrototypeOf(IgniterPreElement, HTMLPreElement);

  class IgniterMapElement {
  	constructor(inp) {
  		let from = HTMLMapElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterMapElement.prototype, HTMLMapElement.prototype);
  Object.setPrototypeOf(IgniterMapElement, HTMLMapElement);

  class IgniterMarqueeElement {
  	constructor(inp) {
  		let from = HTMLMarqueeElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterMarqueeElement.prototype, HTMLMarqueeElement.prototype);
  Object.setPrototypeOf(IgniterMarqueeElement, HTMLMarqueeElement);

  class IgniterMenuElement {
  	constructor(inp) {
  		let from = HTMLMenuElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterMenuElement.prototype, HTMLMenuElement.prototype);
  Object.setPrototypeOf(IgniterMenuElement, HTMLMenuElement);

  class IgniterMenuItemElement {
  	constructor(inp) {
  		let from = HTMLMenuItemElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterMenuItemElement.prototype, HTMLElement.prototype);
  Object.setPrototypeOf(IgniterMenuItemElement, HTMLElement);

  class IgniterMetaElement {
  	constructor(inp) {
  		let from = HTMLMetaElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterMetaElement.prototype, HTMLMetaElement.prototype);
  Object.setPrototypeOf(IgniterMetaElement, HTMLMetaElement);

  class IgniterMeterElement {
  	constructor(inp) {
  		let from = HTMLMeterElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterMeterElement.prototype, HTMLMeterElement.prototype);
  Object.setPrototypeOf(IgniterMeterElement, HTMLMeterElement);

  class IgniterObjectElement {
  	constructor(inp) {
  		let from = HTMLObjectElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterObjectElement.prototype, HTMLObjectElement.prototype);
  Object.setPrototypeOf(IgniterObjectElement, HTMLObjectElement);

  class IgniterOListElement {
  	constructor(inp) {
  		let from = HTMLOListElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterOListElement.prototype, HTMLOListElement.prototype);
  Object.setPrototypeOf(IgniterOListElement, HTMLOListElement);

  class IgniterOptGroupElement {
  	constructor(inp) {
  		let from = HTMLOptGroupElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterOptGroupElement.prototype, HTMLOptGroupElement.prototype);
  Object.setPrototypeOf(IgniterOptGroupElement, HTMLOptGroupElement);

  class IgniterOptionElement {
  	constructor(inp) {
  		let from = HTMLOptionElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterOptionElement.prototype, HTMLOptionElement.prototype);
  Object.setPrototypeOf(IgniterOptionElement, HTMLOptionElement);

  class IgniterOutputElement {
  	constructor(inp) {
  		let from = HTMLOutputElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterOutputElement.prototype, HTMLOutputElement.prototype);
  Object.setPrototypeOf(IgniterOutputElement, HTMLOutputElement);

  class IgniterParagraphElement {
  	constructor(inp) {
  		let from = HTMLParagraphElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterParagraphElement.prototype, HTMLParagraphElement.prototype);
  Object.setPrototypeOf(IgniterParagraphElement, HTMLParagraphElement);

  class IgniterParamElement {
  	constructor(inp) {
  		let from = HTMLParamElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterParamElement.prototype, HTMLParamElement.prototype);
  Object.setPrototypeOf(IgniterParamElement, HTMLParamElement);

  class IgniterPictureElement {
  	constructor(inp) {
  		let from = HTMLPictureElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterPictureElement.prototype, HTMLPictureElement.prototype);
  Object.setPrototypeOf(IgniterPictureElement, HTMLPictureElement);

  class IgniterProgressElement {
  	constructor(inp) {
  		let from = HTMLProgressElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterProgressElement.prototype, HTMLProgressElement.prototype);
  Object.setPrototypeOf(IgniterProgressElement, HTMLProgressElement);

  class IgniterScriptElement {
  	constructor(inp) {
  		let from = HTMLScriptElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterScriptElement.prototype, HTMLScriptElement.prototype);
  Object.setPrototypeOf(IgniterScriptElement, HTMLScriptElement);

  class IgniterSelectElement {
  	constructor(inp) {
  		let from = HTMLSelectElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterSelectElement.prototype, HTMLSelectElement.prototype);
  Object.setPrototypeOf(IgniterSelectElement, HTMLSelectElement);

  class IgniterSlotElement {
  	constructor(inp) {
  		let from = HTMLSlotElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterSlotElement.prototype, HTMLSlotElement.prototype);
  Object.setPrototypeOf(IgniterSlotElement, HTMLSlotElement);

  class IgniterSourceElement {
  	constructor(inp) {
  		let from = HTMLSourceElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterSourceElement.prototype, HTMLSourceElement.prototype);
  Object.setPrototypeOf(IgniterSourceElement, HTMLSourceElement);

  class IgniterSpanElement {
  	constructor(inp) {
  		let from = HTMLSpanElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterSpanElement.prototype, HTMLSpanElement.prototype);
  Object.setPrototypeOf(IgniterSpanElement, HTMLSpanElement);

  class IgniterStyleElement {
  	constructor(inp) {
  		let from = HTMLStyleElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterStyleElement.prototype, HTMLStyleElement.prototype);
  Object.setPrototypeOf(IgniterStyleElement, HTMLStyleElement);

  class IgniterTableElement {
  	constructor(inp) {
  		let from = HTMLTableElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterTableElement.prototype, HTMLTableElement.prototype);
  Object.setPrototypeOf(IgniterTableElement, HTMLTableElement);

  class IgniterTableSectionElement {
  	constructor(inp) {
  		let from = HTMLTableSectionElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterTableSectionElement.prototype, HTMLTableSectionElement.prototype);
  Object.setPrototypeOf(IgniterTableSectionElement, HTMLTableSectionElement);

  class IgniterTableCellElement {
  	constructor(inp) {
  		let from = HTMLTableCellElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterTableCellElement.prototype, HTMLTableCellElement.prototype);
  Object.setPrototypeOf(IgniterTableCellElement, HTMLTableCellElement);

  class IgniterTemplateElement {
  	constructor(inp) {
  		let from = HTMLTemplateElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterTemplateElement.prototype, HTMLTemplateElement.prototype);
  Object.setPrototypeOf(IgniterTemplateElement, HTMLTemplateElement);

  class IgniterTextAreaElement {
  	constructor(inp) {
  		let from = HTMLTextAreaElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterTextAreaElement.prototype, HTMLTextAreaElement.prototype);
  Object.setPrototypeOf(IgniterTextAreaElement, HTMLTextAreaElement);

  class IgniterTimeElement {
  	constructor(inp) {
  		let from = HTMLTimeElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterTimeElement.prototype, HTMLTimeElement.prototype);
  Object.setPrototypeOf(IgniterTimeElement, HTMLTimeElement);

  class IgniterTitleElement {
  	constructor(inp) {
  		let from = HTMLTitleElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterTitleElement.prototype, HTMLTitleElement.prototype);
  Object.setPrototypeOf(IgniterTitleElement, HTMLTitleElement);

  class IgniterTableRowElement {
  	constructor(inp) {
  		let from = HTMLTableRowElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterTableRowElement.prototype, HTMLTableRowElement.prototype);
  Object.setPrototypeOf(IgniterTableRowElement, HTMLTableRowElement);

  class IgniterTrackElement {
  	constructor(inp) {
  		let from = HTMLTrackElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterTrackElement.prototype, HTMLTrackElement.prototype);
  Object.setPrototypeOf(IgniterTrackElement, HTMLTrackElement);

  class IgniterUListElement {
  	constructor(inp) {
  		let from = HTMLUListElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterUListElement.prototype, HTMLUListElement.prototype);
  Object.setPrototypeOf(IgniterUListElement, HTMLUListElement);

  class IgniterVideoElement {
  	constructor(inp) {
  		let from = HTMLVideoElement;
  		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
  		let ray = new Ray(opt);
  		return new NodeConstructor(ray);
  	}
  }Object.setPrototypeOf(IgniterVideoElement.prototype, HTMLVideoElement.prototype);
  Object.setPrototypeOf(IgniterVideoElement, HTMLVideoElement);

  class A extends IgniterAnchorElement {
  	constructor(o) {
  		if(o) o.tag = "a";
  		super(o);
  	}
  }
  class Abbr extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "abbr";
  		super(o);
  	}
  }
  class Acronym extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "acronym";
  		super(o);
  	}
  }
  class Address extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "address";
  		super(o);
  	}
  }
  class Applet extends IgniterUnknownElement {
  	constructor(o) {
  		if(o) o.tag = "applet";
  		super(o);
  	}
  }
  class Area extends IgniterAreaElement {
  	constructor(o) {
  		if(o) o.tag = "area";
  		super(o);
  	}
  }
  class Article extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "article";
  		super(o);
  	}
  }
  class Aside extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "aside";
  		super(o);
  	}
  }
  class Audio extends IgniterAudioElement {
  	constructor(o) {
  		if(o) o.tag = "audio";
  		super(o);
  	}
  }
  class B extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "b";
  		super(o);
  	}
  }
  class Base extends IgniterBaseElement {
  	constructor(o) {
  		if(o) o.tag = "base";
  		super(o);
  	}
  }
  class Basefont extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "basefont";
  		super(o);
  	}
  }
  class Bdi extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "bdi";
  		super(o);
  	}
  }
  class Bdo extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "bdo";
  		super(o);
  	}
  }
  class Bgsound extends IgniterUnknownElement {
  	constructor(o) {
  		if(o) o.tag = "bgsound";
  		super(o);
  	}
  }
  class Big extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "big";
  		super(o);
  	}
  }
  class Blink extends IgniterUnknownElement {
  	constructor(o) {
  		if(o) o.tag = "blink";
  		super(o);
  	}
  }
  class Blockquote extends IgniterQuoteElement {
  	constructor(o) {
  		if(o) o.tag = "blockquote";
  		super(o);
  	}
  }
  class Body extends IgniterBodyElement {
  	constructor(o) {
  		if(o) o.tag = "body";
  		super(o);
  	}
  }
  class Br extends IgniterBRElement {
  	constructor(o) {
  		if(o) o.tag = "br";
  		super(o);
  	}
  }
  class Button extends IgniterButtonElement {
  	constructor(o) {
  		if(o) o.tag = "button";
  		super(o);
  	}
  }
  class Canvas extends IgniterCanvasElement {
  	constructor(o) {
  		if(o) o.tag = "canvas";
  		super(o);
  	}
  }
  class Caption extends IgniterTableCaptionElement {
  	constructor(o) {
  		if(o) o.tag = "caption";
  		super(o);
  	}
  }
  class Center extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "center";
  		super(o);
  	}
  }
  class Cite extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "cite";
  		super(o);
  	}
  }
  class Code extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "code";
  		super(o);
  	}
  }
  class Col extends IgniterTableColElement {
  	constructor(o) {
  		if(o) o.tag = "col";
  		super(o);
  	}
  }
  class Colgroup extends IgniterTableColElement {
  	constructor(o) {
  		if(o) o.tag = "colgroup";
  		super(o);
  	}
  }
  class Command extends IgniterUnknownElement {
  	constructor(o) {
  		if(o) o.tag = "command";
  		super(o);
  	}
  }
  class Content extends IgniterUnknownElement {
  	constructor(o) {
  		if(o) o.tag = "content";
  		super(o);
  	}
  }
  class Data extends IgniterDataElement {
  	constructor(o) {
  		if(o) o.tag = "data";
  		super(o);
  	}
  }
  class Datalist extends IgniterDataListElement {
  	constructor(o) {
  		if(o) o.tag = "datalist";
  		super(o);
  	}
  }
  class Dd extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "dd";
  		super(o);
  	}
  }
  class Del extends IgniterModElement {
  	constructor(o) {
  		if(o) o.tag = "del";
  		super(o);
  	}
  }
  class Details extends IgniterDetailsElement {
  	constructor(o) {
  		if(o) o.tag = "details";
  		super(o);
  	}
  }
  class Dfn extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "dfn";
  		super(o);
  	}
  }
  class Dialog extends IgniterUnknownElement {
  	constructor(o) {
  		if(o) o.tag = "dialog";
  		super(o);
  	}
  }
  class Dir extends IgniterDirectoryElement {
  	constructor(o) {
  		if(o) o.tag = "dir";
  		super(o);
  	}
  }
  class Div extends IgniterDivElement {
  	constructor(o) {
  		if(o) o.tag = "div";
  		super(o);
  	}
  }
  class Dl extends IgniterDListElement {
  	constructor(o) {
  		if(o) o.tag = "dl";
  		super(o);
  	}
  }
  class Dt extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "dt";
  		super(o);
  	}
  }
  class Em extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "em";
  		super(o);
  	}
  }
  class Embed extends IgniterEmbedElement {
  	constructor(o) {
  		if(o) o.tag = "embed";
  		super(o);
  	}
  }
  class Fieldset extends IgniterFieldSetElement {
  	constructor(o) {
  		if(o) o.tag = "fieldset";
  		super(o);
  	}
  }
  class Figcaption extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "figcaption";
  		super(o);
  	}
  }
  class Figure extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "figure";
  		super(o);
  	}
  }
  class Font extends IgniterFontElement {
  	constructor(o) {
  		if(o) o.tag = "font";
  		super(o);
  	}
  }
  class Footer extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "footer";
  		super(o);
  	}
  }
  class Form extends IgniterFormElement {
  	constructor(o) {
  		if(o) o.tag = "form";
  		super(o);
  	}
  }
  class Frame extends IgniterFrameElement {
  	constructor(o) {
  		if(o) o.tag = "frame";
  		super(o);
  	}
  }
  class Frameset extends IgniterFrameSetElement {
  	constructor(o) {
  		if(o) o.tag = "frameset";
  		super(o);
  	}
  }
  class H1 extends IgniterHeadingElement {
  	constructor(o) {
  		if(o) o.tag = "h1";
  		super(o);
  	}
  }
  class H2 extends IgniterHeadingElement {
  	constructor(o) {
  		if(o) o.tag = "h2";
  		super(o);
  	}
  }
  class H3 extends IgniterHeadingElement {
  	constructor(o) {
  		if(o) o.tag = "h3";
  		super(o);
  	}
  }
  class H4 extends IgniterHeadingElement {
  	constructor(o) {
  		if(o) o.tag = "h4";
  		super(o);
  	}
  }
  class H5 extends IgniterHeadingElement {
  	constructor(o) {
  		if(o) o.tag = "h5";
  		super(o);
  	}
  }
  class H6 extends IgniterHeadingElement {
  	constructor(o) {
  		if(o) o.tag = "h6";
  		super(o);
  	}
  }
  class Head extends IgniterHeadElement {
  	constructor(o) {
  		if(o) o.tag = "head";
  		super(o);
  	}
  }
  class Header extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "header";
  		super(o);
  	}
  }
  class Hgroup extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "hgroup";
  		super(o);
  	}
  }
  class Hr extends IgniterHRElement {
  	constructor(o) {
  		if(o) o.tag = "hr";
  		super(o);
  	}
  }
  class Html extends IgniterHtmlElement {
  	constructor(o) {
  		if(o) o.tag = "html";
  		super(o);
  	}
  }
  class I extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "i";
  		super(o);
  	}
  }
  class Iframe extends IgniterIFrameElement {
  	constructor(o) {
  		if(o) o.tag = "iframe";
  		super(o);
  	}
  }
  class Image extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "image";
  		super(o);
  	}
  }
  class Img extends IgniterImageElement {
  	constructor(o) {
  		if(o) o.tag = "img";
  		super(o);
  	}
  }
  class Input extends IgniterInputElement {
  	constructor(o) {
  		if(o) o.tag = "input";
  		super(o);
  	}
  }
  class Ins extends IgniterModElement {
  	constructor(o) {
  		if(o) o.tag = "ins";
  		super(o);
  	}
  }
  class Isindex extends IgniterUnknownElement {
  	constructor(o) {
  		if(o) o.tag = "isindex";
  		super(o);
  	}
  }
  class Kbd extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "kbd";
  		super(o);
  	}
  }
  class Keygen extends IgniterUnknownElement {
  	constructor(o) {
  		if(o) o.tag = "keygen";
  		super(o);
  	}
  }
  class Label extends IgniterLabelElement {
  	constructor(o) {
  		if(o) o.tag = "label";
  		super(o);
  	}
  }
  class Legend extends IgniterLegendElement {
  	constructor(o) {
  		if(o) o.tag = "legend";
  		super(o);
  	}
  }
  class Li extends IgniterLIElement {
  	constructor(o) {
  		if(o) o.tag = "li";
  		super(o);
  	}
  }
  class Link extends IgniterLinkElement {
  	constructor(o) {
  		if(o) o.tag = "link";
  		super(o);
  	}
  }
  class Listing extends IgniterPreElement {
  	constructor(o) {
  		if(o) o.tag = "listing";
  		super(o);
  	}
  }
  class Main extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "main";
  		super(o);
  	}
  }
  class Map extends IgniterMapElement {
  	constructor(o) {
  		if(o) o.tag = "map";
  		super(o);
  	}
  }
  class Mark extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "mark";
  		super(o);
  	}
  }
  class Marquee extends IgniterMarqueeElement {
  	constructor(o) {
  		if(o) o.tag = "marquee";
  		super(o);
  	}
  }
  class Menu extends IgniterMenuElement {
  	constructor(o) {
  		if(o) o.tag = "menu";
  		super(o);
  	}
  }
  class Menuitem extends IgniterMenuItemElement {
  	constructor(o) {
  		if(o) o.tag = "menuitem";
  		super(o);
  	}
  }
  class Meta extends IgniterMetaElement {
  	constructor(o) {
  		if(o) o.tag = "meta";
  		super(o);
  	}
  }
  class Meter extends IgniterMeterElement {
  	constructor(o) {
  		if(o) o.tag = "meter";
  		super(o);
  	}
  }
  class Multicol extends IgniterUnknownElement {
  	constructor(o) {
  		if(o) o.tag = "multicol";
  		super(o);
  	}
  }
  class Nav extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "nav";
  		super(o);
  	}
  }
  class Nextid extends IgniterUnknownElement {
  	constructor(o) {
  		if(o) o.tag = "nextid";
  		super(o);
  	}
  }
  class Nobr extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "nobr";
  		super(o);
  	}
  }
  class Noembed extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "noembed";
  		super(o);
  	}
  }
  class Noframes extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "noframes";
  		super(o);
  	}
  }
  class Noscript extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "noscript";
  		super(o);
  	}
  }
  class ObjectEl extends IgniterObjectElement {
  	constructor(o) {
  		if(o) o.tag = "object";
  		super(o);
  	}
  }
  class Ol extends IgniterOListElement {
  	constructor(o) {
  		if(o) o.tag = "ol";
  		super(o);
  	}
  }
  class Optgroup extends IgniterOptGroupElement {
  	constructor(o) {
  		if(o) o.tag = "optgroup";
  		super(o);
  	}
  }
  class Option extends IgniterOptionElement {
  	constructor(o) {
  		if(o) o.tag = "option";
  		super(o);
  	}
  }
  class Output extends IgniterOutputElement {
  	constructor(o) {
  		if(o) o.tag = "output";
  		super(o);
  	}
  }
  class P extends IgniterParagraphElement {
  	constructor(o) {
  		if(o) o.tag = "p";
  		super(o);
  	}
  }
  class Param extends IgniterParamElement {
  	constructor(o) {
  		if(o) o.tag = "param";
  		super(o);
  	}
  }
  class Picture extends IgniterPictureElement {
  	constructor(o) {
  		if(o) o.tag = "picture";
  		super(o);
  	}
  }
  class Plaintext extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "plaintext";
  		super(o);
  	}
  }
  class Pre extends IgniterPreElement {
  	constructor(o) {
  		if(o) o.tag = "pre";
  		super(o);
  	}
  }
  class Progress extends IgniterProgressElement {
  	constructor(o) {
  		if(o) o.tag = "progress";
  		super(o);
  	}
  }
  class Q extends IgniterQuoteElement {
  	constructor(o) {
  		if(o) o.tag = "q";
  		super(o);
  	}
  }
  class Rb extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "rb";
  		super(o);
  	}
  }
  class Rp extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "rp";
  		super(o);
  	}
  }
  class Rt extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "rt";
  		super(o);
  	}
  }
  class Rtc extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "rtc";
  		super(o);
  	}
  }
  class Ruby extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "ruby";
  		super(o);
  	}
  }
  class S extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "s";
  		super(o);
  	}
  }
  class Samp extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "samp";
  		super(o);
  	}
  }
  class Script extends IgniterScriptElement {
  	constructor(o) {
  		if(o) o.tag = "script";
  		super(o);
  	}
  }
  class Section extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "section";
  		super(o);
  	}
  }
  class Select extends IgniterSelectElement {
  	constructor(o) {
  		if(o) o.tag = "select";
  		super(o);
  	}
  }
  class Shadow extends IgniterUnknownElement {
  	constructor(o) {
  		if(o) o.tag = "shadow";
  		super(o);
  	}
  }
  class Slot extends IgniterSlotElement {
  	constructor(o) {
  		if(o) o.tag = "slot";
  		super(o);
  	}
  }
  class Small extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "small";
  		super(o);
  	}
  }
  class Source extends IgniterSourceElement {
  	constructor(o) {
  		if(o) o.tag = "source";
  		super(o);
  	}
  }
  class Spacer extends IgniterUnknownElement {
  	constructor(o) {
  		if(o) o.tag = "spacer";
  		super(o);
  	}
  }
  class Span extends IgniterSpanElement {
  	constructor(o) {
  		if(o) o.tag = "span";
  		super(o);
  	}
  }
  class Strike extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "strike";
  		super(o);
  	}
  }
  class Strong extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "strong";
  		super(o);
  	}
  }
  class Style extends IgniterStyleElement {
  	constructor(o) {
  		if(o) o.tag = "style";
  		super(o);
  	}
  }
  class Sub extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "sub";
  		super(o);
  	}
  }
  class Summary extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "summary";
  		super(o);
  	}
  }
  class Sup extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "sup";
  		super(o);
  	}
  }
  class Table extends IgniterTableElement {
  	constructor(o) {
  		if(o) o.tag = "table";
  		super(o);
  	}
  }
  class Tbody extends IgniterTableSectionElement {
  	constructor(o) {
  		if(o) o.tag = "tbody";
  		super(o);
  	}
  }
  class Td extends IgniterTableCellElement {
  	constructor(o) {
  		if(o) o.tag = "td";
  		super(o);
  	}
  }
  class Template extends IgniterTemplateElement {
  	constructor(o) {
  		if(o) o.tag = "template";
  		super(o);
  	}
  }
  class Textarea extends IgniterTextAreaElement {
  	constructor(o) {
  		if(o) o.tag = "textarea";
  		super(o);
  	}
  }
  class Tfoot extends IgniterTableSectionElement {
  	constructor(o) {
  		if(o) o.tag = "tfoot";
  		super(o);
  	}
  }
  class Th extends IgniterTableCellElement {
  	constructor(o) {
  		if(o) o.tag = "th";
  		super(o);
  	}
  }
  class Thead extends IgniterTableSectionElement {
  	constructor(o) {
  		if(o) o.tag = "thead";
  		super(o);
  	}
  }
  class Time extends IgniterTimeElement {
  	constructor(o) {
  		if(o) o.tag = "time";
  		super(o);
  	}
  }
  class Title extends IgniterTitleElement {
  	constructor(o) {
  		if(o) o.tag = "title";
  		super(o);
  	}
  }
  class Tr extends IgniterTableRowElement {
  	constructor(o) {
  		if(o) o.tag = "tr";
  		super(o);
  	}
  }
  class Track extends IgniterTrackElement {
  	constructor(o) {
  		if(o) o.tag = "track";
  		super(o);
  	}
  }
  class Tt extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "tt";
  		super(o);
  	}
  }
  class U extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "u";
  		super(o);
  	}
  }
  class Ul extends IgniterUListElement {
  	constructor(o) {
  		if(o) o.tag = "ul";
  		super(o);
  	}
  }
  class Var extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "var";
  		super(o);
  	}
  }
  class Video extends IgniterVideoElement {
  	constructor(o) {
  		if(o) o.tag = "video";
  		super(o);
  	}
  }
  class Wbr extends IgniterElement {
  	constructor(o) {
  		if(o) o.tag = "wbr";
  		super(o);
  	}
  }
  class Xmp extends IgniterPreElement {
  	constructor(o) {
  		if(o) o.tag = "xmp";
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
  exports.ObjectEl = ObjectEl;
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

}({}));
