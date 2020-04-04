import { NodeConstructor, Ray } from './constructor';
import { ElementKeys } from './elements';

function Factory(elements) {

	let scope = {}; // This scope will be returned in future as output

	let tempScope = {}; // This scope will be deleted after exiting Factory

	for (let key of elements) {

			let className = key[0].toUpperCase() + key.slice(1),
					prototypeName = document.createElement(key).constructor,
					classPrototypeName = "Torex" + prototypeName.name.substring(
						4, prototypeName.name.length
					);

			if(!tempScope[classPrototypeName]) {
				// If we still not have this class prototype
				tempScope[classPrototypeName] = class {
					// Create prototype class for our elements
					constructor(tag, inner) {
						return NodeConstructor(
							Ray(this.constructor, prototypeName, tag, inner)
						);
					}
				}
				Reflect.setPrototypeOf(
					tempScope[classPrototypeName].prototype,
					prototypeName.prototype
				); 	// Append chain for this class
				Reflect.setPrototypeOf(
					tempScope[classPrototypeName],
					prototypeName
				);
				Reflect.defineProperty(
					tempScope[classPrototypeName],
					"name", { value: classPrototypeName }
				); // Append name property
			}

			scope[className] = class extends tempScope[classPrototypeName] {
				// Crete class for every element
				constructor(options) {
					super(key, options);
				}
			}
			Reflect.defineProperty(
				scope[className],
				"name", { value: className }
			); // Append name property
	}

	scope.Autonomous = class Autonomous extends tempScope["TorexElement"] {
		// Autonomus element (custom dom element)
		constructor(options) {
			super(null, options);
		}
	}

	scope.Fragment = class Fragment {
		// Fragment Element (DocumentFragment constructor)
		constructor(options) {
			let self = this;

			var output = Reflect.construct(DocumentFragment, [], self.constructor);

			options.items = options.items || [];

			if(!(options.items instanceof Array)) {
				options.items = [options.items];
			}

			for(let item of options.items) {
				output.appendChild(item);
			}

			return output;
		}
	}

	Reflect.setPrototypeOf(
		scope.Fragment.prototype,
		HTMLElement.prototype
	);

	Reflect.setPrototypeOf(
		scope.Fragment,
		HTMLElement
	);

	return scope;
}

var Torex = Factory(ElementKeys);

export default Torex
