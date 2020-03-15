import NodeConstructor from './constructor';



class SuperAnchorElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLAnchorElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperAnchorElement.prototype, HTMLAnchorElement.prototype);
Object.setPrototypeOf(SuperAnchorElement, HTMLAnchorElement);

class SuperElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(SuperElement, HTMLElement);

class SuperUnknownElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLUnknownElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperUnknownElement.prototype, HTMLUnknownElement.prototype);
Object.setPrototypeOf(SuperUnknownElement, HTMLUnknownElement);

class SuperAreaElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLAreaElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperAreaElement.prototype, HTMLAreaElement.prototype);
Object.setPrototypeOf(SuperAreaElement, HTMLAreaElement);

class SuperAudioElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLAudioElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperAudioElement.prototype, HTMLAudioElement.prototype);
Object.setPrototypeOf(SuperAudioElement, HTMLAudioElement);

class SuperBaseElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLBaseElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperBaseElement.prototype, HTMLBaseElement.prototype);
Object.setPrototypeOf(SuperBaseElement, HTMLBaseElement);

class SuperQuoteElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLQuoteElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperQuoteElement.prototype, HTMLQuoteElement.prototype);
Object.setPrototypeOf(SuperQuoteElement, HTMLQuoteElement);

class SuperBodyElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLBodyElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperBodyElement.prototype, HTMLBodyElement.prototype);
Object.setPrototypeOf(SuperBodyElement, HTMLBodyElement);

class SuperBRElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLBRElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperBRElement.prototype, HTMLBRElement.prototype);
Object.setPrototypeOf(SuperBRElement, HTMLBRElement);

class SuperButtonElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLButtonElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperButtonElement.prototype, HTMLButtonElement.prototype);
Object.setPrototypeOf(SuperButtonElement, HTMLButtonElement);

class SuperCanvasElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLCanvasElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperCanvasElement.prototype, HTMLCanvasElement.prototype);
Object.setPrototypeOf(SuperCanvasElement, HTMLCanvasElement);

class SuperTableCaptionElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLTableCaptionElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperTableCaptionElement.prototype, HTMLTableCaptionElement.prototype);
Object.setPrototypeOf(SuperTableCaptionElement, HTMLTableCaptionElement);

class SuperTableColElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLTableColElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperTableColElement.prototype, HTMLTableColElement.prototype);
Object.setPrototypeOf(SuperTableColElement, HTMLTableColElement);

class SuperDataElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLDataElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperDataElement.prototype, HTMLDataElement.prototype);
Object.setPrototypeOf(SuperDataElement, HTMLDataElement);

class SuperDataListElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLDataListElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperDataListElement.prototype, HTMLDataListElement.prototype);
Object.setPrototypeOf(SuperDataListElement, HTMLDataListElement);

class SuperModElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLModElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperModElement.prototype, HTMLModElement.prototype);
Object.setPrototypeOf(SuperModElement, HTMLModElement);

class SuperDetailsElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLDetailsElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperDetailsElement.prototype, HTMLDetailsElement.prototype);
Object.setPrototypeOf(SuperDetailsElement, HTMLDetailsElement);

class SuperDirectoryElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLDirectoryElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperDirectoryElement.prototype, HTMLDirectoryElement.prototype);
Object.setPrototypeOf(SuperDirectoryElement, HTMLDirectoryElement);

class SuperDivElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLDivElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperDivElement.prototype, HTMLDivElement.prototype);
Object.setPrototypeOf(SuperDivElement, HTMLDivElement);

class SuperDListElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLDListElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperDListElement.prototype, HTMLDListElement.prototype);
Object.setPrototypeOf(SuperDListElement, HTMLDListElement);

class SuperEmbedElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLEmbedElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperEmbedElement.prototype, HTMLEmbedElement.prototype);
Object.setPrototypeOf(SuperEmbedElement, HTMLEmbedElement);

class SuperFieldSetElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLFieldSetElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperFieldSetElement.prototype, HTMLFieldSetElement.prototype);
Object.setPrototypeOf(SuperFieldSetElement, HTMLFieldSetElement);

class SuperFontElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLFontElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperFontElement.prototype, HTMLFontElement.prototype);
Object.setPrototypeOf(SuperFontElement, HTMLFontElement);

class SuperFormElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLFormElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperFormElement.prototype, HTMLFormElement.prototype);
Object.setPrototypeOf(SuperFormElement, HTMLFormElement);

class SuperFrameElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLFrameElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperFrameElement.prototype, HTMLFrameElement.prototype);
Object.setPrototypeOf(SuperFrameElement, HTMLFrameElement);

class SuperFrameSetElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLFrameSetElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperFrameSetElement.prototype, HTMLFrameSetElement.prototype);
Object.setPrototypeOf(SuperFrameSetElement, HTMLFrameSetElement);

class SuperHeadingElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLHeadingElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperHeadingElement.prototype, HTMLHeadingElement.prototype);
Object.setPrototypeOf(SuperHeadingElement, HTMLHeadingElement);

class SuperHeadElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLHeadElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperHeadElement.prototype, HTMLHeadElement.prototype);
Object.setPrototypeOf(SuperHeadElement, HTMLHeadElement);

class SuperHRElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLHRElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperHRElement.prototype, HTMLHRElement.prototype);
Object.setPrototypeOf(SuperHRElement, HTMLHRElement);

class SuperHtmlElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLHtmlElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperHtmlElement.prototype, HTMLHtmlElement.prototype);
Object.setPrototypeOf(SuperHtmlElement, HTMLHtmlElement);

class SuperIFrameElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLIFrameElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperIFrameElement.prototype, HTMLIFrameElement.prototype);
Object.setPrototypeOf(SuperIFrameElement, HTMLIFrameElement);

class SuperImageElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLImageElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperImageElement.prototype, HTMLImageElement.prototype);
Object.setPrototypeOf(SuperImageElement, HTMLImageElement);

class SuperInputElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLInputElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperInputElement.prototype, HTMLInputElement.prototype);
Object.setPrototypeOf(SuperInputElement, HTMLInputElement);

class SuperLabelElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLLabelElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperLabelElement.prototype, HTMLLabelElement.prototype);
Object.setPrototypeOf(SuperLabelElement, HTMLLabelElement);

class SuperLegendElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLLegendElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperLegendElement.prototype, HTMLLegendElement.prototype);
Object.setPrototypeOf(SuperLegendElement, HTMLLegendElement);

class SuperLIElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLLIElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperLIElement.prototype, HTMLLIElement.prototype);
Object.setPrototypeOf(SuperLIElement, HTMLLIElement);

class SuperLinkElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLLinkElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperLinkElement.prototype, HTMLLinkElement.prototype);
Object.setPrototypeOf(SuperLinkElement, HTMLLinkElement);

class SuperPreElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLPreElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperPreElement.prototype, HTMLPreElement.prototype);
Object.setPrototypeOf(SuperPreElement, HTMLPreElement);

class SuperMapElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLMapElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperMapElement.prototype, HTMLMapElement.prototype);
Object.setPrototypeOf(SuperMapElement, HTMLMapElement);

class SuperMarqueeElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLMarqueeElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperMarqueeElement.prototype, HTMLMarqueeElement.prototype);
Object.setPrototypeOf(SuperMarqueeElement, HTMLMarqueeElement);

class SuperMenuElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLMenuElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperMenuElement.prototype, HTMLMenuElement.prototype);
Object.setPrototypeOf(SuperMenuElement, HTMLMenuElement);

class SuperMenuItemElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLMenuItemElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperMenuItemElement.prototype, HTMLMenuItemElement.prototype);
Object.setPrototypeOf(SuperMenuItemElement, HTMLMenuItemElement);

class SuperMetaElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLMetaElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperMetaElement.prototype, HTMLMetaElement.prototype);
Object.setPrototypeOf(SuperMetaElement, HTMLMetaElement);

class SuperMeterElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLMeterElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperMeterElement.prototype, HTMLMeterElement.prototype);
Object.setPrototypeOf(SuperMeterElement, HTMLMeterElement);

class SuperObjectElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLObjectElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperObjectElement.prototype, HTMLObjectElement.prototype);
Object.setPrototypeOf(SuperObjectElement, HTMLObjectElement);

class SuperOListElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLOListElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperOListElement.prototype, HTMLOListElement.prototype);
Object.setPrototypeOf(SuperOListElement, HTMLOListElement);

class SuperOptGroupElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLOptGroupElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperOptGroupElement.prototype, HTMLOptGroupElement.prototype);
Object.setPrototypeOf(SuperOptGroupElement, HTMLOptGroupElement);

class SuperOptionElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLOptionElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperOptionElement.prototype, HTMLOptionElement.prototype);
Object.setPrototypeOf(SuperOptionElement, HTMLOptionElement);

class SuperOutputElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLOutputElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperOutputElement.prototype, HTMLOutputElement.prototype);
Object.setPrototypeOf(SuperOutputElement, HTMLOutputElement);

class SuperParagraphElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLParagraphElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperParagraphElement.prototype, HTMLParagraphElement.prototype);
Object.setPrototypeOf(SuperParagraphElement, HTMLParagraphElement);

class SuperParamElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLParamElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperParamElement.prototype, HTMLParamElement.prototype);
Object.setPrototypeOf(SuperParamElement, HTMLParamElement);

class SuperPictureElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLPictureElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperPictureElement.prototype, HTMLPictureElement.prototype);
Object.setPrototypeOf(SuperPictureElement, HTMLPictureElement);

class SuperProgressElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLProgressElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperProgressElement.prototype, HTMLProgressElement.prototype);
Object.setPrototypeOf(SuperProgressElement, HTMLProgressElement);

class SuperScriptElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLScriptElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperScriptElement.prototype, HTMLScriptElement.prototype);
Object.setPrototypeOf(SuperScriptElement, HTMLScriptElement);

class SuperSelectElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLSelectElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperSelectElement.prototype, HTMLSelectElement.prototype);
Object.setPrototypeOf(SuperSelectElement, HTMLSelectElement);

class SuperSlotElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLSlotElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperSlotElement.prototype, HTMLSlotElement.prototype);
Object.setPrototypeOf(SuperSlotElement, HTMLSlotElement);

class SuperSourceElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLSourceElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperSourceElement.prototype, HTMLSourceElement.prototype);
Object.setPrototypeOf(SuperSourceElement, HTMLSourceElement);

class SuperSpanElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLSpanElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperSpanElement.prototype, HTMLSpanElement.prototype);
Object.setPrototypeOf(SuperSpanElement, HTMLSpanElement);

class SuperStyleElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLStyleElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperStyleElement.prototype, HTMLStyleElement.prototype);
Object.setPrototypeOf(SuperStyleElement, HTMLStyleElement);

class SuperTableElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLTableElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperTableElement.prototype, HTMLTableElement.prototype);
Object.setPrototypeOf(SuperTableElement, HTMLTableElement);

class SuperTableSectionElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLTableSectionElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperTableSectionElement.prototype, HTMLTableSectionElement.prototype);
Object.setPrototypeOf(SuperTableSectionElement, HTMLTableSectionElement);

class SuperTableCellElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLTableCellElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperTableCellElement.prototype, HTMLTableCellElement.prototype);
Object.setPrototypeOf(SuperTableCellElement, HTMLTableCellElement);

class SuperTemplateElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLTemplateElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperTemplateElement.prototype, HTMLTemplateElement.prototype);
Object.setPrototypeOf(SuperTemplateElement, HTMLTemplateElement);

class SuperTextAreaElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLTextAreaElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperTextAreaElement.prototype, HTMLTextAreaElement.prototype);
Object.setPrototypeOf(SuperTextAreaElement, HTMLTextAreaElement);

class SuperTimeElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLTimeElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperTimeElement.prototype, HTMLTimeElement.prototype);
Object.setPrototypeOf(SuperTimeElement, HTMLTimeElement);

class SuperTitleElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLTitleElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperTitleElement.prototype, HTMLTitleElement.prototype);
Object.setPrototypeOf(SuperTitleElement, HTMLTitleElement);

class SuperTableRowElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLTableRowElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperTableRowElement.prototype, HTMLTableRowElement.prototype);
Object.setPrototypeOf(SuperTableRowElement, HTMLTableRowElement);

class SuperTrackElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLTrackElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperTrackElement.prototype, HTMLTrackElement.prototype);
Object.setPrototypeOf(SuperTrackElement, HTMLTrackElement);

class SuperUListElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLUListElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperUListElement.prototype, HTMLUListElement.prototype);
Object.setPrototypeOf(SuperUListElement, HTMLUListElement);

class SuperVideoElement {
	constructor(o) {
		if(o) {
			o.is_native = false
		} else {
			o = {
				is_native: true,
				from: HTMLVideoElement,
			};
		}
		return new NodeConstructor(this.constructor, o);
	}
};
Object.setPrototypeOf(SuperVideoElement.prototype, HTMLVideoElement.prototype);
Object.setPrototypeOf(SuperVideoElement, HTMLVideoElement);

export class A extends SuperAnchorElement {
	constructor(o) {
		if(o) o.tag = "a";
		super(o);
	}
}
export class Abbr extends SuperElement {
	constructor(o) {
		if(o) o.tag = "abbr";
		super(o);
	}
}
export class Acronym extends SuperElement {
	constructor(o) {
		if(o) o.tag = "acronym";
		super(o);
	}
}
export class Address extends SuperElement {
	constructor(o) {
		if(o) o.tag = "address";
		super(o);
	}
}
export class Applet extends SuperUnknownElement {
	constructor(o) {
		if(o) o.tag = "applet";
		super(o);
	}
}
export class Area extends SuperAreaElement {
	constructor(o) {
		if(o) o.tag = "area";
		super(o);
	}
}
export class Article extends SuperElement {
	constructor(o) {
		if(o) o.tag = "article";
		super(o);
	}
}
export class Aside extends SuperElement {
	constructor(o) {
		if(o) o.tag = "aside";
		super(o);
	}
}
export class Audio extends SuperAudioElement {
	constructor(o) {
		if(o) o.tag = "audio";
		super(o);
	}
}
export class B extends SuperElement {
	constructor(o) {
		if(o) o.tag = "b";
		super(o);
	}
}
export class Base extends SuperBaseElement {
	constructor(o) {
		if(o) o.tag = "base";
		super(o);
	}
}
export class Basefont extends SuperElement {
	constructor(o) {
		if(o) o.tag = "basefont";
		super(o);
	}
}
export class Bdi extends SuperElement {
	constructor(o) {
		if(o) o.tag = "bdi";
		super(o);
	}
}
export class Bdo extends SuperElement {
	constructor(o) {
		if(o) o.tag = "bdo";
		super(o);
	}
}
export class Bgsound extends SuperUnknownElement {
	constructor(o) {
		if(o) o.tag = "bgsound";
		super(o);
	}
}
export class Big extends SuperElement {
	constructor(o) {
		if(o) o.tag = "big";
		super(o);
	}
}
export class Blink extends SuperUnknownElement {
	constructor(o) {
		if(o) o.tag = "blink";
		super(o);
	}
}
export class Blockquote extends SuperQuoteElement {
	constructor(o) {
		if(o) o.tag = "blockquote";
		super(o);
	}
}
export class Body extends SuperBodyElement {
	constructor(o) {
		if(o) o.tag = "body";
		super(o);
	}
}
export class Br extends SuperBRElement {
	constructor(o) {
		if(o) o.tag = "br";
		super(o);
	}
}
export class Button extends SuperButtonElement {
	constructor(o) {
		if(o) o.tag = "button";
		super(o);
	}
}
export class Canvas extends SuperCanvasElement {
	constructor(o) {
		if(o) o.tag = "canvas";
		super(o);
	}
}
export class Caption extends SuperTableCaptionElement {
	constructor(o) {
		if(o) o.tag = "caption";
		super(o);
	}
}
export class Center extends SuperElement {
	constructor(o) {
		if(o) o.tag = "center";
		super(o);
	}
}
export class Cite extends SuperElement {
	constructor(o) {
		if(o) o.tag = "cite";
		super(o);
	}
}
export class Code extends SuperElement {
	constructor(o) {
		if(o) o.tag = "code";
		super(o);
	}
}
export class Col extends SuperTableColElement {
	constructor(o) {
		if(o) o.tag = "col";
		super(o);
	}
}
export class Colgroup extends SuperTableColElement {
	constructor(o) {
		if(o) o.tag = "colgroup";
		super(o);
	}
}
export class Command extends SuperUnknownElement {
	constructor(o) {
		if(o) o.tag = "command";
		super(o);
	}
}
export class Content extends SuperUnknownElement {
	constructor(o) {
		if(o) o.tag = "content";
		super(o);
	}
}
export class Data extends SuperDataElement {
	constructor(o) {
		if(o) o.tag = "data";
		super(o);
	}
}
export class Datalist extends SuperDataListElement {
	constructor(o) {
		if(o) o.tag = "datalist";
		super(o);
	}
}
export class Dd extends SuperElement {
	constructor(o) {
		if(o) o.tag = "dd";
		super(o);
	}
}
export class Del extends SuperModElement {
	constructor(o) {
		if(o) o.tag = "del";
		super(o);
	}
}
export class Details extends SuperDetailsElement {
	constructor(o) {
		if(o) o.tag = "details";
		super(o);
	}
}
export class Dfn extends SuperElement {
	constructor(o) {
		if(o) o.tag = "dfn";
		super(o);
	}
}
export class Dialog extends SuperUnknownElement {
	constructor(o) {
		if(o) o.tag = "dialog";
		super(o);
	}
}
export class Dir extends SuperDirectoryElement {
	constructor(o) {
		if(o) o.tag = "dir";
		super(o);
	}
}
export class Div extends SuperDivElement {
	constructor(o) {
		if(o) o.tag = "div";
		super(o);
	}
}
export class Dl extends SuperDListElement {
	constructor(o) {
		if(o) o.tag = "dl";
		super(o);
	}
}
export class Dt extends SuperElement {
	constructor(o) {
		if(o) o.tag = "dt";
		super(o);
	}
}
export class Em extends SuperElement {
	constructor(o) {
		if(o) o.tag = "em";
		super(o);
	}
}
export class Embed extends SuperEmbedElement {
	constructor(o) {
		if(o) o.tag = "embed";
		super(o);
	}
}
export class Fieldset extends SuperFieldSetElement {
	constructor(o) {
		if(o) o.tag = "fieldset";
		super(o);
	}
}
export class Figcaption extends SuperElement {
	constructor(o) {
		if(o) o.tag = "figcaption";
		super(o);
	}
}
export class Figure extends SuperElement {
	constructor(o) {
		if(o) o.tag = "figure";
		super(o);
	}
}
export class Font extends SuperFontElement {
	constructor(o) {
		if(o) o.tag = "font";
		super(o);
	}
}
export class Footer extends SuperElement {
	constructor(o) {
		if(o) o.tag = "footer";
		super(o);
	}
}
export class Form extends SuperFormElement {
	constructor(o) {
		if(o) o.tag = "form";
		super(o);
	}
}
export class Frame extends SuperFrameElement {
	constructor(o) {
		if(o) o.tag = "frame";
		super(o);
	}
}
export class Frameset extends SuperFrameSetElement {
	constructor(o) {
		if(o) o.tag = "frameset";
		super(o);
	}
}
export class H1 extends SuperHeadingElement {
	constructor(o) {
		if(o) o.tag = "h1";
		super(o);
	}
}
export class H2 extends SuperHeadingElement {
	constructor(o) {
		if(o) o.tag = "h2";
		super(o);
	}
}
export class H3 extends SuperHeadingElement {
	constructor(o) {
		if(o) o.tag = "h3";
		super(o);
	}
}
export class H4 extends SuperHeadingElement {
	constructor(o) {
		if(o) o.tag = "h4";
		super(o);
	}
}
export class H5 extends SuperHeadingElement {
	constructor(o) {
		if(o) o.tag = "h5";
		super(o);
	}
}
export class H6 extends SuperHeadingElement {
	constructor(o) {
		if(o) o.tag = "h6";
		super(o);
	}
}
export class Head extends SuperHeadElement {
	constructor(o) {
		if(o) o.tag = "head";
		super(o);
	}
}
export class Header extends SuperElement {
	constructor(o) {
		if(o) o.tag = "header";
		super(o);
	}
}
export class Hgroup extends SuperElement {
	constructor(o) {
		if(o) o.tag = "hgroup";
		super(o);
	}
}
export class Hr extends SuperHRElement {
	constructor(o) {
		if(o) o.tag = "hr";
		super(o);
	}
}
export class Html extends SuperHtmlElement {
	constructor(o) {
		if(o) o.tag = "html";
		super(o);
	}
}
export class I extends SuperElement {
	constructor(o) {
		if(o) o.tag = "i";
		super(o);
	}
}
export class Iframe extends SuperIFrameElement {
	constructor(o) {
		if(o) o.tag = "iframe";
		super(o);
	}
}
export class Image extends SuperElement {
	constructor(o) {
		if(o) o.tag = "image";
		super(o);
	}
}
export class Img extends SuperImageElement {
	constructor(o) {
		if(o) o.tag = "img";
		super(o);
	}
}
export class Input extends SuperInputElement {
	constructor(o) {
		if(o) o.tag = "input";
		super(o);
	}
}
export class Ins extends SuperModElement {
	constructor(o) {
		if(o) o.tag = "ins";
		super(o);
	}
}
export class Isindex extends SuperUnknownElement {
	constructor(o) {
		if(o) o.tag = "isindex";
		super(o);
	}
}
export class Kbd extends SuperElement {
	constructor(o) {
		if(o) o.tag = "kbd";
		super(o);
	}
}
export class Keygen extends SuperUnknownElement {
	constructor(o) {
		if(o) o.tag = "keygen";
		super(o);
	}
}
export class Label extends SuperLabelElement {
	constructor(o) {
		if(o) o.tag = "label";
		super(o);
	}
}
export class Legend extends SuperLegendElement {
	constructor(o) {
		if(o) o.tag = "legend";
		super(o);
	}
}
export class Li extends SuperLIElement {
	constructor(o) {
		if(o) o.tag = "li";
		super(o);
	}
}
export class Link extends SuperLinkElement {
	constructor(o) {
		if(o) o.tag = "link";
		super(o);
	}
}
export class Listing extends SuperPreElement {
	constructor(o) {
		if(o) o.tag = "listing";
		super(o);
	}
}
export class Main extends SuperElement {
	constructor(o) {
		if(o) o.tag = "main";
		super(o);
	}
}
export class Map extends SuperMapElement {
	constructor(o) {
		if(o) o.tag = "map";
		super(o);
	}
}
export class Mark extends SuperElement {
	constructor(o) {
		if(o) o.tag = "mark";
		super(o);
	}
}
export class Marquee extends SuperMarqueeElement {
	constructor(o) {
		if(o) o.tag = "marquee";
		super(o);
	}
}
export class Menu extends SuperMenuElement {
	constructor(o) {
		if(o) o.tag = "menu";
		super(o);
	}
}
export class Menuitem extends SuperMenuItemElement {
	constructor(o) {
		if(o) o.tag = "menuitem";
		super(o);
	}
}
export class Meta extends SuperMetaElement {
	constructor(o) {
		if(o) o.tag = "meta";
		super(o);
	}
}
export class Meter extends SuperMeterElement {
	constructor(o) {
		if(o) o.tag = "meter";
		super(o);
	}
}
export class Multicol extends SuperUnknownElement {
	constructor(o) {
		if(o) o.tag = "multicol";
		super(o);
	}
}
export class Nav extends SuperElement {
	constructor(o) {
		if(o) o.tag = "nav";
		super(o);
	}
}
export class Nextid extends SuperUnknownElement {
	constructor(o) {
		if(o) o.tag = "nextid";
		super(o);
	}
}
export class Nobr extends SuperElement {
	constructor(o) {
		if(o) o.tag = "nobr";
		super(o);
	}
}
export class Noembed extends SuperElement {
	constructor(o) {
		if(o) o.tag = "noembed";
		super(o);
	}
}
export class Noframes extends SuperElement {
	constructor(o) {
		if(o) o.tag = "noframes";
		super(o);
	}
}
export class Noscript extends SuperElement {
	constructor(o) {
		if(o) o.tag = "noscript";
		super(o);
	}
}
export class Ol extends SuperOListElement {
	constructor(o) {
		if(o) o.tag = "ol";
		super(o);
	}
}
export class Optgroup extends SuperOptGroupElement {
	constructor(o) {
		if(o) o.tag = "optgroup";
		super(o);
	}
}
export class Option extends SuperOptionElement {
	constructor(o) {
		if(o) o.tag = "option";
		super(o);
	}
}
export class Output extends SuperOutputElement {
	constructor(o) {
		if(o) o.tag = "output";
		super(o);
	}
}
export class P extends SuperParagraphElement {
	constructor(o) {
		if(o) o.tag = "p";
		super(o);
	}
}
export class Param extends SuperParamElement {
	constructor(o) {
		if(o) o.tag = "param";
		super(o);
	}
}
export class Picture extends SuperPictureElement {
	constructor(o) {
		if(o) o.tag = "picture";
		super(o);
	}
}
export class Plaintext extends SuperElement {
	constructor(o) {
		if(o) o.tag = "plaintext";
		super(o);
	}
}
export class Pre extends SuperPreElement {
	constructor(o) {
		if(o) o.tag = "pre";
		super(o);
	}
}
export class Progress extends SuperProgressElement {
	constructor(o) {
		if(o) o.tag = "progress";
		super(o);
	}
}
export class Q extends SuperQuoteElement {
	constructor(o) {
		if(o) o.tag = "q";
		super(o);
	}
}
export class Rb extends SuperElement {
	constructor(o) {
		if(o) o.tag = "rb";
		super(o);
	}
}
export class Rp extends SuperElement {
	constructor(o) {
		if(o) o.tag = "rp";
		super(o);
	}
}
export class Rt extends SuperElement {
	constructor(o) {
		if(o) o.tag = "rt";
		super(o);
	}
}
export class Rtc extends SuperElement {
	constructor(o) {
		if(o) o.tag = "rtc";
		super(o);
	}
}
export class Ruby extends SuperElement {
	constructor(o) {
		if(o) o.tag = "ruby";
		super(o);
	}
}
export class S extends SuperElement {
	constructor(o) {
		if(o) o.tag = "s";
		super(o);
	}
}
export class Samp extends SuperElement {
	constructor(o) {
		if(o) o.tag = "samp";
		super(o);
	}
}
export class Script extends SuperScriptElement {
	constructor(o) {
		if(o) o.tag = "script";
		super(o);
	}
}
export class Section extends SuperElement {
	constructor(o) {
		if(o) o.tag = "section";
		super(o);
	}
}
export class Select extends SuperSelectElement {
	constructor(o) {
		if(o) o.tag = "select";
		super(o);
	}
}
export class Shadow extends SuperUnknownElement {
	constructor(o) {
		if(o) o.tag = "shadow";
		super(o);
	}
}
export class Slot extends SuperSlotElement {
	constructor(o) {
		if(o) o.tag = "slot";
		super(o);
	}
}
export class Small extends SuperElement {
	constructor(o) {
		if(o) o.tag = "small";
		super(o);
	}
}
export class Source extends SuperSourceElement {
	constructor(o) {
		if(o) o.tag = "source";
		super(o);
	}
}
export class Spacer extends SuperUnknownElement {
	constructor(o) {
		if(o) o.tag = "spacer";
		super(o);
	}
}
export class Span extends SuperSpanElement {
	constructor(o) {
		if(o) o.tag = "span";
		super(o);
	}
}
export class Strike extends SuperElement {
	constructor(o) {
		if(o) o.tag = "strike";
		super(o);
	}
}
export class Strong extends SuperElement {
	constructor(o) {
		if(o) o.tag = "strong";
		super(o);
	}
}
export class Style extends SuperStyleElement {
	constructor(o) {
		if(o) o.tag = "style";
		super(o);
	}
}
export class Sub extends SuperElement {
	constructor(o) {
		if(o) o.tag = "sub";
		super(o);
	}
}
export class Summary extends SuperElement {
	constructor(o) {
		if(o) o.tag = "summary";
		super(o);
	}
}
export class Sup extends SuperElement {
	constructor(o) {
		if(o) o.tag = "sup";
		super(o);
	}
}
export class Table extends SuperTableElement {
	constructor(o) {
		if(o) o.tag = "table";
		super(o);
	}
}
export class Tbody extends SuperTableSectionElement {
	constructor(o) {
		if(o) o.tag = "tbody";
		super(o);
	}
}
export class Td extends SuperTableCellElement {
	constructor(o) {
		if(o) o.tag = "td";
		super(o);
	}
}
export class Template extends SuperTemplateElement {
	constructor(o) {
		if(o) o.tag = "template";
		super(o);
	}
}
export class Textarea extends SuperTextAreaElement {
	constructor(o) {
		if(o) o.tag = "textarea";
		super(o);
	}
}
export class Tfoot extends SuperTableSectionElement {
	constructor(o) {
		if(o) o.tag = "tfoot";
		super(o);
	}
}
export class Th extends SuperTableCellElement {
	constructor(o) {
		if(o) o.tag = "th";
		super(o);
	}
}
export class Thead extends SuperTableSectionElement {
	constructor(o) {
		if(o) o.tag = "thead";
		super(o);
	}
}
export class Time extends SuperTimeElement {
	constructor(o) {
		if(o) o.tag = "time";
		super(o);
	}
}
export class Title extends SuperTitleElement {
	constructor(o) {
		if(o) o.tag = "title";
		super(o);
	}
}
export class Tr extends SuperTableRowElement {
	constructor(o) {
		if(o) o.tag = "tr";
		super(o);
	}
}
export class Track extends SuperTrackElement {
	constructor(o) {
		if(o) o.tag = "track";
		super(o);
	}
}
export class Tt extends SuperElement {
	constructor(o) {
		if(o) o.tag = "tt";
		super(o);
	}
}
export class U extends SuperElement {
	constructor(o) {
		if(o) o.tag = "u";
		super(o);
	}
}
export class Ul extends SuperUListElement {
	constructor(o) {
		if(o) o.tag = "ul";
		super(o);
	}
}
export class Var extends SuperElement {
	constructor(o) {
		if(o) o.tag = "var";
		super(o);
	}
}
export class Video extends SuperVideoElement {
	constructor(o) {
		if(o) o.tag = "video";
		super(o);
	}
}
export class Wbr extends SuperElement {
	constructor(o) {
		if(o) o.tag = "wbr";
		super(o);
	}
}
export class Xmp extends SuperPreElement {
	constructor(o) {
		if(o) o.tag = "xmp";
		super(o);
	}
}
