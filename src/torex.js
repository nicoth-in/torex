import { NodeConstructor, Ray } from './constructor';
import { ElementKeys } from './elements';

const Torex = {};

class Generator {
	constructor() {

		const scope = this;

		for (let key of this.getElements()) {
			let className = key[0].toUpperCase() + key.slice(1);
			let prototypeName = document.createElement(key).constructor;
			let classPrototypeName = "Torex" + prototypeName.name.substring(4, prototypeName.name.length);

			if(!scope[classPrototypeName]) {
				scope[classPrototypeName] = class {
					constructor(i) {
						return new NodeConstructor(scope.createRay(this.constructor, prototypeName, i));
					}
				}
				Reflect.setPrototypeOf(scope[classPrototypeName].prototype, prototypeName.prototype);
				Reflect.setPrototypeOf(scope[classPrototypeName], prototypeName);
				Reflect.defineProperty(scope[classPrototypeName], "name", { value: classPrototypeName });
			}

			Torex[className] = class extends scope[classPrototypeName] {
				constructor(o) {
					if(o) o.tag = key;
					super(o);
				}
			}

			Reflect.defineProperty(Torex[className], "name", { value: className });

		}
	}
	createRay(c, from, opt) {
		return (opt) ?
			new Ray({
				native:false,
				from: from,
				c: c,
				...opt
			}) :
			new Ray({
				native: true,
				from: from,
				c: c,
				...opt
			});
	}
	getElements() {
		return ElementKeys;
	}
}

let generatorContext = new Generator();

export default Torex
