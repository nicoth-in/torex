import NodeConstructor from './constructor';

const SuperP = NodeConstructor;
Object.setPrototypeOf(SuperP.prototype, HTMLParagraphElement.prototype);
Object.setPrototypeOf(SuperP, HTMLParagraphElement);

export class P extends SuperP {
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
