import { NodeConstructor, Ray } from './constructor';


class IgniterAnchorElement {
	constructor(inp) {
		let from = HTMLAnchorElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterAnchorElement.prototype, HTMLAnchorElement.prototype);
Object.setPrototypeOf(IgniterAnchorElement, HTMLAnchorElement);

class IgniterElement {
	constructor(inp) {
		let from = HTMLElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(IgniterElement, HTMLElement);

class IgniterUnknownElement {
	constructor(inp) {
		let from = HTMLUnknownElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterUnknownElement.prototype, HTMLUnknownElement.prototype);
Object.setPrototypeOf(IgniterUnknownElement, HTMLUnknownElement);

class IgniterAreaElement {
	constructor(inp) {
		let from = HTMLAreaElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterAreaElement.prototype, HTMLAreaElement.prototype);
Object.setPrototypeOf(IgniterAreaElement, HTMLAreaElement);

class IgniterAudioElement {
	constructor(inp) {
		let from = HTMLAudioElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterAudioElement.prototype, HTMLAudioElement.prototype);
Object.setPrototypeOf(IgniterAudioElement, HTMLAudioElement);

class IgniterBaseElement {
	constructor(inp) {
		let from = HTMLBaseElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterBaseElement.prototype, HTMLBaseElement.prototype);
Object.setPrototypeOf(IgniterBaseElement, HTMLBaseElement);

class IgniterQuoteElement {
	constructor(inp) {
		let from = HTMLQuoteElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterQuoteElement.prototype, HTMLQuoteElement.prototype);
Object.setPrototypeOf(IgniterQuoteElement, HTMLQuoteElement);

class IgniterBodyElement {
	constructor(inp) {
		let from = HTMLBodyElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterBodyElement.prototype, HTMLBodyElement.prototype);
Object.setPrototypeOf(IgniterBodyElement, HTMLBodyElement);

class IgniterBRElement {
	constructor(inp) {
		let from = HTMLBRElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterBRElement.prototype, HTMLBRElement.prototype);
Object.setPrototypeOf(IgniterBRElement, HTMLBRElement);

class IgniterButtonElement {
	constructor(inp) {
		let from = HTMLButtonElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterButtonElement.prototype, HTMLButtonElement.prototype);
Object.setPrototypeOf(IgniterButtonElement, HTMLButtonElement);

class IgniterCanvasElement {
	constructor(inp) {
		let from = HTMLCanvasElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterCanvasElement.prototype, HTMLCanvasElement.prototype);
Object.setPrototypeOf(IgniterCanvasElement, HTMLCanvasElement);

class IgniterTableCaptionElement {
	constructor(inp) {
		let from = HTMLTableCaptionElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterTableCaptionElement.prototype, HTMLTableCaptionElement.prototype);
Object.setPrototypeOf(IgniterTableCaptionElement, HTMLTableCaptionElement);

class IgniterTableColElement {
	constructor(inp) {
		let from = HTMLTableColElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterTableColElement.prototype, HTMLTableColElement.prototype);
Object.setPrototypeOf(IgniterTableColElement, HTMLTableColElement);

class IgniterDataElement {
	constructor(inp) {
		let from = HTMLDataElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterDataElement.prototype, HTMLDataElement.prototype);
Object.setPrototypeOf(IgniterDataElement, HTMLDataElement);

class IgniterDataListElement {
	constructor(inp) {
		let from = HTMLDataListElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterDataListElement.prototype, HTMLDataListElement.prototype);
Object.setPrototypeOf(IgniterDataListElement, HTMLDataListElement);

class IgniterModElement {
	constructor(inp) {
		let from = HTMLModElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterModElement.prototype, HTMLModElement.prototype);
Object.setPrototypeOf(IgniterModElement, HTMLModElement);

class IgniterDetailsElement {
	constructor(inp) {
		let from = HTMLDetailsElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterDetailsElement.prototype, HTMLDetailsElement.prototype);
Object.setPrototypeOf(IgniterDetailsElement, HTMLDetailsElement);

class IgniterDirectoryElement {
	constructor(inp) {
		let from = HTMLDirectoryElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterDirectoryElement.prototype, HTMLDirectoryElement.prototype);
Object.setPrototypeOf(IgniterDirectoryElement, HTMLDirectoryElement);

class IgniterDivElement {
	constructor(inp) {
		let from = HTMLDivElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterDivElement.prototype, HTMLDivElement.prototype);
Object.setPrototypeOf(IgniterDivElement, HTMLDivElement);

class IgniterDListElement {
	constructor(inp) {
		let from = HTMLDListElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterDListElement.prototype, HTMLDListElement.prototype);
Object.setPrototypeOf(IgniterDListElement, HTMLDListElement);

class IgniterEmbedElement {
	constructor(inp) {
		let from = HTMLEmbedElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterEmbedElement.prototype, HTMLEmbedElement.prototype);
Object.setPrototypeOf(IgniterEmbedElement, HTMLEmbedElement);

class IgniterFieldSetElement {
	constructor(inp) {
		let from = HTMLFieldSetElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterFieldSetElement.prototype, HTMLFieldSetElement.prototype);
Object.setPrototypeOf(IgniterFieldSetElement, HTMLFieldSetElement);

class IgniterFontElement {
	constructor(inp) {
		let from = HTMLFontElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterFontElement.prototype, HTMLFontElement.prototype);
Object.setPrototypeOf(IgniterFontElement, HTMLFontElement);

class IgniterFormElement {
	constructor(inp) {
		let from = HTMLFormElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterFormElement.prototype, HTMLFormElement.prototype);
Object.setPrototypeOf(IgniterFormElement, HTMLFormElement);

class IgniterFrameElement {
	constructor(inp) {
		let from = HTMLFrameElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterFrameElement.prototype, HTMLFrameElement.prototype);
Object.setPrototypeOf(IgniterFrameElement, HTMLFrameElement);

class IgniterFrameSetElement {
	constructor(inp) {
		let from = HTMLFrameSetElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterFrameSetElement.prototype, HTMLFrameSetElement.prototype);
Object.setPrototypeOf(IgniterFrameSetElement, HTMLFrameSetElement);

class IgniterHeadingElement {
	constructor(inp) {
		let from = HTMLHeadingElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterHeadingElement.prototype, HTMLHeadingElement.prototype);
Object.setPrototypeOf(IgniterHeadingElement, HTMLHeadingElement);

class IgniterHeadElement {
	constructor(inp) {
		let from = HTMLHeadElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterHeadElement.prototype, HTMLHeadElement.prototype);
Object.setPrototypeOf(IgniterHeadElement, HTMLHeadElement);

class IgniterHRElement {
	constructor(inp) {
		let from = HTMLHRElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterHRElement.prototype, HTMLHRElement.prototype);
Object.setPrototypeOf(IgniterHRElement, HTMLHRElement);

class IgniterHtmlElement {
	constructor(inp) {
		let from = HTMLHtmlElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterHtmlElement.prototype, HTMLHtmlElement.prototype);
Object.setPrototypeOf(IgniterHtmlElement, HTMLHtmlElement);

class IgniterIFrameElement {
	constructor(inp) {
		let from = HTMLIFrameElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterIFrameElement.prototype, HTMLIFrameElement.prototype);
Object.setPrototypeOf(IgniterIFrameElement, HTMLIFrameElement);

class IgniterImageElement {
	constructor(inp) {
		let from = HTMLImageElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterImageElement.prototype, HTMLImageElement.prototype);
Object.setPrototypeOf(IgniterImageElement, HTMLImageElement);

class IgniterInputElement {
	constructor(inp) {
		let from = HTMLInputElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterInputElement.prototype, HTMLInputElement.prototype);
Object.setPrototypeOf(IgniterInputElement, HTMLInputElement);

class IgniterLabelElement {
	constructor(inp) {
		let from = HTMLLabelElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterLabelElement.prototype, HTMLLabelElement.prototype);
Object.setPrototypeOf(IgniterLabelElement, HTMLLabelElement);

class IgniterLegendElement {
	constructor(inp) {
		let from = HTMLLegendElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterLegendElement.prototype, HTMLLegendElement.prototype);
Object.setPrototypeOf(IgniterLegendElement, HTMLLegendElement);

class IgniterLIElement {
	constructor(inp) {
		let from = HTMLLIElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterLIElement.prototype, HTMLLIElement.prototype);
Object.setPrototypeOf(IgniterLIElement, HTMLLIElement);

class IgniterLinkElement {
	constructor(inp) {
		let from = HTMLLinkElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterLinkElement.prototype, HTMLLinkElement.prototype);
Object.setPrototypeOf(IgniterLinkElement, HTMLLinkElement);

class IgniterPreElement {
	constructor(inp) {
		let from = HTMLPreElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterPreElement.prototype, HTMLPreElement.prototype);
Object.setPrototypeOf(IgniterPreElement, HTMLPreElement);

class IgniterMapElement {
	constructor(inp) {
		let from = HTMLMapElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterMapElement.prototype, HTMLMapElement.prototype);
Object.setPrototypeOf(IgniterMapElement, HTMLMapElement);

class IgniterMarqueeElement {
	constructor(inp) {
		let from = HTMLMarqueeElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterMarqueeElement.prototype, HTMLMarqueeElement.prototype);
Object.setPrototypeOf(IgniterMarqueeElement, HTMLMarqueeElement);

class IgniterMenuElement {
	constructor(inp) {
		let from = HTMLMenuElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterMenuElement.prototype, HTMLMenuElement.prototype);
Object.setPrototypeOf(IgniterMenuElement, HTMLMenuElement);

class IgniterMenuItemElement {
	constructor(inp) {
		let from = HTMLMenuItemElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterMenuItemElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(IgniterMenuItemElement, HTMLElement);

class IgniterMetaElement {
	constructor(inp) {
		let from = HTMLMetaElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterMetaElement.prototype, HTMLMetaElement.prototype);
Object.setPrototypeOf(IgniterMetaElement, HTMLMetaElement);

class IgniterMeterElement {
	constructor(inp) {
		let from = HTMLMeterElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterMeterElement.prototype, HTMLMeterElement.prototype);
Object.setPrototypeOf(IgniterMeterElement, HTMLMeterElement);

class IgniterObjectElement {
	constructor(inp) {
		let from = HTMLObjectElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterObjectElement.prototype, HTMLObjectElement.prototype);
Object.setPrototypeOf(IgniterObjectElement, HTMLObjectElement);

class IgniterOListElement {
	constructor(inp) {
		let from = HTMLOListElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterOListElement.prototype, HTMLOListElement.prototype);
Object.setPrototypeOf(IgniterOListElement, HTMLOListElement);

class IgniterOptGroupElement {
	constructor(inp) {
		let from = HTMLOptGroupElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterOptGroupElement.prototype, HTMLOptGroupElement.prototype);
Object.setPrototypeOf(IgniterOptGroupElement, HTMLOptGroupElement);

class IgniterOptionElement {
	constructor(inp) {
		let from = HTMLOptionElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterOptionElement.prototype, HTMLOptionElement.prototype);
Object.setPrototypeOf(IgniterOptionElement, HTMLOptionElement);

class IgniterOutputElement {
	constructor(inp) {
		let from = HTMLOutputElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterOutputElement.prototype, HTMLOutputElement.prototype);
Object.setPrototypeOf(IgniterOutputElement, HTMLOutputElement);

class IgniterParagraphElement {
	constructor(inp) {
		let from = HTMLParagraphElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterParagraphElement.prototype, HTMLParagraphElement.prototype);
Object.setPrototypeOf(IgniterParagraphElement, HTMLParagraphElement);

class IgniterParamElement {
	constructor(inp) {
		let from = HTMLParamElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterParamElement.prototype, HTMLParamElement.prototype);
Object.setPrototypeOf(IgniterParamElement, HTMLParamElement);

class IgniterPictureElement {
	constructor(inp) {
		let from = HTMLPictureElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterPictureElement.prototype, HTMLPictureElement.prototype);
Object.setPrototypeOf(IgniterPictureElement, HTMLPictureElement);

class IgniterProgressElement {
	constructor(inp) {
		let from = HTMLProgressElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterProgressElement.prototype, HTMLProgressElement.prototype);
Object.setPrototypeOf(IgniterProgressElement, HTMLProgressElement);

class IgniterScriptElement {
	constructor(inp) {
		let from = HTMLScriptElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterScriptElement.prototype, HTMLScriptElement.prototype);
Object.setPrototypeOf(IgniterScriptElement, HTMLScriptElement);

class IgniterSelectElement {
	constructor(inp) {
		let from = HTMLSelectElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterSelectElement.prototype, HTMLSelectElement.prototype);
Object.setPrototypeOf(IgniterSelectElement, HTMLSelectElement);

class IgniterSlotElement {
	constructor(inp) {
		let from = HTMLSlotElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterSlotElement.prototype, HTMLSlotElement.prototype);
Object.setPrototypeOf(IgniterSlotElement, HTMLSlotElement);

class IgniterSourceElement {
	constructor(inp) {
		let from = HTMLSourceElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterSourceElement.prototype, HTMLSourceElement.prototype);
Object.setPrototypeOf(IgniterSourceElement, HTMLSourceElement);

class IgniterSpanElement {
	constructor(inp) {
		let from = HTMLSpanElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterSpanElement.prototype, HTMLSpanElement.prototype);
Object.setPrototypeOf(IgniterSpanElement, HTMLSpanElement);

class IgniterStyleElement {
	constructor(inp) {
		let from = HTMLStyleElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterStyleElement.prototype, HTMLStyleElement.prototype);
Object.setPrototypeOf(IgniterStyleElement, HTMLStyleElement);

class IgniterTableElement {
	constructor(inp) {
		let from = HTMLTableElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterTableElement.prototype, HTMLTableElement.prototype);
Object.setPrototypeOf(IgniterTableElement, HTMLTableElement);

class IgniterTableSectionElement {
	constructor(inp) {
		let from = HTMLTableSectionElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterTableSectionElement.prototype, HTMLTableSectionElement.prototype);
Object.setPrototypeOf(IgniterTableSectionElement, HTMLTableSectionElement);

class IgniterTableCellElement {
	constructor(inp) {
		let from = HTMLTableCellElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterTableCellElement.prototype, HTMLTableCellElement.prototype);
Object.setPrototypeOf(IgniterTableCellElement, HTMLTableCellElement);

class IgniterTemplateElement {
	constructor(inp) {
		let from = HTMLTemplateElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterTemplateElement.prototype, HTMLTemplateElement.prototype);
Object.setPrototypeOf(IgniterTemplateElement, HTMLTemplateElement);

class IgniterTextAreaElement {
	constructor(inp) {
		let from = HTMLTextAreaElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterTextAreaElement.prototype, HTMLTextAreaElement.prototype);
Object.setPrototypeOf(IgniterTextAreaElement, HTMLTextAreaElement);

class IgniterTimeElement {
	constructor(inp) {
		let from = HTMLTimeElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterTimeElement.prototype, HTMLTimeElement.prototype);
Object.setPrototypeOf(IgniterTimeElement, HTMLTimeElement);

class IgniterTitleElement {
	constructor(inp) {
		let from = HTMLTitleElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterTitleElement.prototype, HTMLTitleElement.prototype);
Object.setPrototypeOf(IgniterTitleElement, HTMLTitleElement);

class IgniterTableRowElement {
	constructor(inp) {
		let from = HTMLTableRowElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterTableRowElement.prototype, HTMLTableRowElement.prototype);
Object.setPrototypeOf(IgniterTableRowElement, HTMLTableRowElement);

class IgniterTrackElement {
	constructor(inp) {
		let from = HTMLTrackElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterTrackElement.prototype, HTMLTrackElement.prototype);
Object.setPrototypeOf(IgniterTrackElement, HTMLTrackElement);

class IgniterUListElement {
	constructor(inp) {
		let from = HTMLUListElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterUListElement.prototype, HTMLUListElement.prototype);
Object.setPrototypeOf(IgniterUListElement, HTMLUListElement);

class IgniterVideoElement {
	constructor(inp) {
		let from = HTMLVideoElement;
		let opt = (inp) ? {native:false,from:from,c:this.constructor,...inp} : {native: true,from: from,c:this.constructor};
		let ray = new Ray(opt);
		return new NodeConstructor(ray);
	}
};
Object.setPrototypeOf(IgniterVideoElement.prototype, HTMLVideoElement.prototype);
Object.setPrototypeOf(IgniterVideoElement, HTMLVideoElement);

export class A extends IgniterAnchorElement {
	constructor(o) {
		if(o) o.tag = "a";
		super(o);
	}
}
export class Abbr extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "abbr";
		super(o);
	}
}
export class Acronym extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "acronym";
		super(o);
	}
}
export class Address extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "address";
		super(o);
	}
}
export class Applet extends IgniterUnknownElement {
	constructor(o) {
		if(o) o.tag = "applet";
		super(o);
	}
}
export class Area extends IgniterAreaElement {
	constructor(o) {
		if(o) o.tag = "area";
		super(o);
	}
}
export class Article extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "article";
		super(o);
	}
}
export class Aside extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "aside";
		super(o);
	}
}
export class Audio extends IgniterAudioElement {
	constructor(o) {
		if(o) o.tag = "audio";
		super(o);
	}
}
export class B extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "b";
		super(o);
	}
}
export class Base extends IgniterBaseElement {
	constructor(o) {
		if(o) o.tag = "base";
		super(o);
	}
}
export class Basefont extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "basefont";
		super(o);
	}
}
export class Bdi extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "bdi";
		super(o);
	}
}
export class Bdo extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "bdo";
		super(o);
	}
}
export class Bgsound extends IgniterUnknownElement {
	constructor(o) {
		if(o) o.tag = "bgsound";
		super(o);
	}
}
export class Big extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "big";
		super(o);
	}
}
export class Blink extends IgniterUnknownElement {
	constructor(o) {
		if(o) o.tag = "blink";
		super(o);
	}
}
export class Blockquote extends IgniterQuoteElement {
	constructor(o) {
		if(o) o.tag = "blockquote";
		super(o);
	}
}
export class Body extends IgniterBodyElement {
	constructor(o) {
		if(o) o.tag = "body";
		super(o);
	}
}
export class Br extends IgniterBRElement {
	constructor(o) {
		if(o) o.tag = "br";
		super(o);
	}
}
export class Button extends IgniterButtonElement {
	constructor(o) {
		if(o) o.tag = "button";
		super(o);
	}
}
export class Canvas extends IgniterCanvasElement {
	constructor(o) {
		if(o) o.tag = "canvas";
		super(o);
	}
}
export class Caption extends IgniterTableCaptionElement {
	constructor(o) {
		if(o) o.tag = "caption";
		super(o);
	}
}
export class Center extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "center";
		super(o);
	}
}
export class Cite extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "cite";
		super(o);
	}
}
export class Code extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "code";
		super(o);
	}
}
export class Col extends IgniterTableColElement {
	constructor(o) {
		if(o) o.tag = "col";
		super(o);
	}
}
export class Colgroup extends IgniterTableColElement {
	constructor(o) {
		if(o) o.tag = "colgroup";
		super(o);
	}
}
export class Command extends IgniterUnknownElement {
	constructor(o) {
		if(o) o.tag = "command";
		super(o);
	}
}
export class Content extends IgniterUnknownElement {
	constructor(o) {
		if(o) o.tag = "content";
		super(o);
	}
}
export class Data extends IgniterDataElement {
	constructor(o) {
		if(o) o.tag = "data";
		super(o);
	}
}
export class Datalist extends IgniterDataListElement {
	constructor(o) {
		if(o) o.tag = "datalist";
		super(o);
	}
}
export class Dd extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "dd";
		super(o);
	}
}
export class Del extends IgniterModElement {
	constructor(o) {
		if(o) o.tag = "del";
		super(o);
	}
}
export class Details extends IgniterDetailsElement {
	constructor(o) {
		if(o) o.tag = "details";
		super(o);
	}
}
export class Dfn extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "dfn";
		super(o);
	}
}
export class Dialog extends IgniterUnknownElement {
	constructor(o) {
		if(o) o.tag = "dialog";
		super(o);
	}
}
export class Dir extends IgniterDirectoryElement {
	constructor(o) {
		if(o) o.tag = "dir";
		super(o);
	}
}
export class Div extends IgniterDivElement {
	constructor(o) {
		if(o) o.tag = "div";
		super(o);
	}
}
export class Dl extends IgniterDListElement {
	constructor(o) {
		if(o) o.tag = "dl";
		super(o);
	}
}
export class Dt extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "dt";
		super(o);
	}
}
export class Em extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "em";
		super(o);
	}
}
export class Embed extends IgniterEmbedElement {
	constructor(o) {
		if(o) o.tag = "embed";
		super(o);
	}
}
export class Fieldset extends IgniterFieldSetElement {
	constructor(o) {
		if(o) o.tag = "fieldset";
		super(o);
	}
}
export class Figcaption extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "figcaption";
		super(o);
	}
}
export class Figure extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "figure";
		super(o);
	}
}
export class Font extends IgniterFontElement {
	constructor(o) {
		if(o) o.tag = "font";
		super(o);
	}
}
export class Footer extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "footer";
		super(o);
	}
}
export class Form extends IgniterFormElement {
	constructor(o) {
		if(o) o.tag = "form";
		super(o);
	}
}
export class Frame extends IgniterFrameElement {
	constructor(o) {
		if(o) o.tag = "frame";
		super(o);
	}
}
export class Frameset extends IgniterFrameSetElement {
	constructor(o) {
		if(o) o.tag = "frameset";
		super(o);
	}
}
export class H1 extends IgniterHeadingElement {
	constructor(o) {
		if(o) o.tag = "h1";
		super(o);
	}
}
export class H2 extends IgniterHeadingElement {
	constructor(o) {
		if(o) o.tag = "h2";
		super(o);
	}
}
export class H3 extends IgniterHeadingElement {
	constructor(o) {
		if(o) o.tag = "h3";
		super(o);
	}
}
export class H4 extends IgniterHeadingElement {
	constructor(o) {
		if(o) o.tag = "h4";
		super(o);
	}
}
export class H5 extends IgniterHeadingElement {
	constructor(o) {
		if(o) o.tag = "h5";
		super(o);
	}
}
export class H6 extends IgniterHeadingElement {
	constructor(o) {
		if(o) o.tag = "h6";
		super(o);
	}
}
export class Head extends IgniterHeadElement {
	constructor(o) {
		if(o) o.tag = "head";
		super(o);
	}
}
export class Header extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "header";
		super(o);
	}
}
export class Hgroup extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "hgroup";
		super(o);
	}
}
export class Hr extends IgniterHRElement {
	constructor(o) {
		if(o) o.tag = "hr";
		super(o);
	}
}
export class Html extends IgniterHtmlElement {
	constructor(o) {
		if(o) o.tag = "html";
		super(o);
	}
}
export class I extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "i";
		super(o);
	}
}
export class Iframe extends IgniterIFrameElement {
	constructor(o) {
		if(o) o.tag = "iframe";
		super(o);
	}
}
export class Image extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "image";
		super(o);
	}
}
export class Img extends IgniterImageElement {
	constructor(o) {
		if(o) o.tag = "img";
		super(o);
	}
}
export class Input extends IgniterInputElement {
	constructor(o) {
		if(o) o.tag = "input";
		super(o);
	}
}
export class Ins extends IgniterModElement {
	constructor(o) {
		if(o) o.tag = "ins";
		super(o);
	}
}
export class Isindex extends IgniterUnknownElement {
	constructor(o) {
		if(o) o.tag = "isindex";
		super(o);
	}
}
export class Kbd extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "kbd";
		super(o);
	}
}
export class Keygen extends IgniterUnknownElement {
	constructor(o) {
		if(o) o.tag = "keygen";
		super(o);
	}
}
export class Label extends IgniterLabelElement {
	constructor(o) {
		if(o) o.tag = "label";
		super(o);
	}
}
export class Legend extends IgniterLegendElement {
	constructor(o) {
		if(o) o.tag = "legend";
		super(o);
	}
}
export class Li extends IgniterLIElement {
	constructor(o) {
		if(o) o.tag = "li";
		super(o);
	}
}
export class Link extends IgniterLinkElement {
	constructor(o) {
		if(o) o.tag = "link";
		super(o);
	}
}
export class Listing extends IgniterPreElement {
	constructor(o) {
		if(o) o.tag = "listing";
		super(o);
	}
}
export class Main extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "main";
		super(o);
	}
}
export class Map extends IgniterMapElement {
	constructor(o) {
		if(o) o.tag = "map";
		super(o);
	}
}
export class Mark extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "mark";
		super(o);
	}
}
export class Marquee extends IgniterMarqueeElement {
	constructor(o) {
		if(o) o.tag = "marquee";
		super(o);
	}
}
export class Menu extends IgniterMenuElement {
	constructor(o) {
		if(o) o.tag = "menu";
		super(o);
	}
}
export class Menuitem extends IgniterMenuItemElement {
	constructor(o) {
		if(o) o.tag = "menuitem";
		super(o);
	}
}
export class Meta extends IgniterMetaElement {
	constructor(o) {
		if(o) o.tag = "meta";
		super(o);
	}
}
export class Meter extends IgniterMeterElement {
	constructor(o) {
		if(o) o.tag = "meter";
		super(o);
	}
}
export class Multicol extends IgniterUnknownElement {
	constructor(o) {
		if(o) o.tag = "multicol";
		super(o);
	}
}
export class Nav extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "nav";
		super(o);
	}
}
export class Nextid extends IgniterUnknownElement {
	constructor(o) {
		if(o) o.tag = "nextid";
		super(o);
	}
}
export class Nobr extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "nobr";
		super(o);
	}
}
export class Noembed extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "noembed";
		super(o);
	}
}
export class Noframes extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "noframes";
		super(o);
	}
}
export class Noscript extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "noscript";
		super(o);
	}
}
export class ObjectEl extends IgniterObjectElement {
	constructor(o) {
		if(o) o.tag = "object";
		super(o);
	}
}
export class Ol extends IgniterOListElement {
	constructor(o) {
		if(o) o.tag = "ol";
		super(o);
	}
}
export class Optgroup extends IgniterOptGroupElement {
	constructor(o) {
		if(o) o.tag = "optgroup";
		super(o);
	}
}
export class Option extends IgniterOptionElement {
	constructor(o) {
		if(o) o.tag = "option";
		super(o);
	}
}
export class Output extends IgniterOutputElement {
	constructor(o) {
		if(o) o.tag = "output";
		super(o);
	}
}
export class P extends IgniterParagraphElement {
	constructor(o) {
		if(o) o.tag = "p";
		super(o);
	}
}
export class Param extends IgniterParamElement {
	constructor(o) {
		if(o) o.tag = "param";
		super(o);
	}
}
export class Picture extends IgniterPictureElement {
	constructor(o) {
		if(o) o.tag = "picture";
		super(o);
	}
}
export class Plaintext extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "plaintext";
		super(o);
	}
}
export class Pre extends IgniterPreElement {
	constructor(o) {
		if(o) o.tag = "pre";
		super(o);
	}
}
export class Progress extends IgniterProgressElement {
	constructor(o) {
		if(o) o.tag = "progress";
		super(o);
	}
}
export class Q extends IgniterQuoteElement {
	constructor(o) {
		if(o) o.tag = "q";
		super(o);
	}
}
export class Rb extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "rb";
		super(o);
	}
}
export class Rp extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "rp";
		super(o);
	}
}
export class Rt extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "rt";
		super(o);
	}
}
export class Rtc extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "rtc";
		super(o);
	}
}
export class Ruby extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "ruby";
		super(o);
	}
}
export class S extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "s";
		super(o);
	}
}
export class Samp extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "samp";
		super(o);
	}
}
export class Script extends IgniterScriptElement {
	constructor(o) {
		if(o) o.tag = "script";
		super(o);
	}
}
export class Section extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "section";
		super(o);
	}
}
export class Select extends IgniterSelectElement {
	constructor(o) {
		if(o) o.tag = "select";
		super(o);
	}
}
export class Shadow extends IgniterUnknownElement {
	constructor(o) {
		if(o) o.tag = "shadow";
		super(o);
	}
}
export class Slot extends IgniterSlotElement {
	constructor(o) {
		if(o) o.tag = "slot";
		super(o);
	}
}
export class Small extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "small";
		super(o);
	}
}
export class Source extends IgniterSourceElement {
	constructor(o) {
		if(o) o.tag = "source";
		super(o);
	}
}
export class Spacer extends IgniterUnknownElement {
	constructor(o) {
		if(o) o.tag = "spacer";
		super(o);
	}
}
export class Span extends IgniterSpanElement {
	constructor(o) {
		if(o) o.tag = "span";
		super(o);
	}
}
export class Strike extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "strike";
		super(o);
	}
}
export class Strong extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "strong";
		super(o);
	}
}
export class Style extends IgniterStyleElement {
	constructor(o) {
		if(o) o.tag = "style";
		super(o);
	}
}
export class Sub extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "sub";
		super(o);
	}
}
export class Summary extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "summary";
		super(o);
	}
}
export class Sup extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "sup";
		super(o);
	}
}
export class Table extends IgniterTableElement {
	constructor(o) {
		if(o) o.tag = "table";
		super(o);
	}
}
export class Tbody extends IgniterTableSectionElement {
	constructor(o) {
		if(o) o.tag = "tbody";
		super(o);
	}
}
export class Td extends IgniterTableCellElement {
	constructor(o) {
		if(o) o.tag = "td";
		super(o);
	}
}
export class Template extends IgniterTemplateElement {
	constructor(o) {
		if(o) o.tag = "template";
		super(o);
	}
}
export class Textarea extends IgniterTextAreaElement {
	constructor(o) {
		if(o) o.tag = "textarea";
		super(o);
	}
}
export class Tfoot extends IgniterTableSectionElement {
	constructor(o) {
		if(o) o.tag = "tfoot";
		super(o);
	}
}
export class Th extends IgniterTableCellElement {
	constructor(o) {
		if(o) o.tag = "th";
		super(o);
	}
}
export class Thead extends IgniterTableSectionElement {
	constructor(o) {
		if(o) o.tag = "thead";
		super(o);
	}
}
export class Time extends IgniterTimeElement {
	constructor(o) {
		if(o) o.tag = "time";
		super(o);
	}
}
export class Title extends IgniterTitleElement {
	constructor(o) {
		if(o) o.tag = "title";
		super(o);
	}
}
export class Tr extends IgniterTableRowElement {
	constructor(o) {
		if(o) o.tag = "tr";
		super(o);
	}
}
export class Track extends IgniterTrackElement {
	constructor(o) {
		if(o) o.tag = "track";
		super(o);
	}
}
export class Tt extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "tt";
		super(o);
	}
}
export class U extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "u";
		super(o);
	}
}
export class Ul extends IgniterUListElement {
	constructor(o) {
		if(o) o.tag = "ul";
		super(o);
	}
}
export class Var extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "var";
		super(o);
	}
}
export class Video extends IgniterVideoElement {
	constructor(o) {
		if(o) o.tag = "video";
		super(o);
	}
}
export class Wbr extends IgniterElement {
	constructor(o) {
		if(o) o.tag = "wbr";
		super(o);
	}
}
export class Xmp extends IgniterPreElement {
	constructor(o) {
		if(o) o.tag = "xmp";
		super(o);
	}
}
