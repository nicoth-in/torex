import SharedStorage from './storage';
import Randomize from './random';


export function NodeConstructor(ray) {

	var customize = (name, from) => {
		if(from != null) {
			customElements.define(name, ray.c, { extends: from });
		} else {
			customElements.define(name, ray.c);
		}
	};

	var storageSet = (node) => {
		node.sharedStorage = new SharedStorage(node);
	};

	if(ray.type != "native") {
		if(!customElements.get(ray.custom)) {
			try {
				customize(ray.custom, ray.tag);
			} catch(e) { /* PASS */ }
		}
	}

	let answer = Reflect.construct(ray.from, [], ray.c);

	for(let v in ray.attr) {
		answer.setAttribute(v, ray.attr[v]);
	}

	for(let item of ray.items) {
		answer.appendChild(item);
	}

	storageSet(answer);

  return answer;
}

// Function which generates input for NodeGenerator
export function Ray(constructor, from, tag, options) {

	var answer = {};

	var genCustom = () => {
		while(customElements.get(answer.custom)||(!answer.custom)) {
			answer.custom = "torex-" + Randomize();
		}
	};

	answer.c = constructor;
	answer.from = from;
	answer.tag = tag;

	const isTorexConstructor = (tag)
		? constructor.name.toLowerCase() == tag.toLowerCase()
		: false;

	if(options == undefined) {
		// Call was made by Document
		this.type = "native";
	} else if(isTorexConstructor) {
		// Call was made on Torex element constructor
		answer.type = "tag";
		// We can't customize Torex element constructor
		if(options.custom != undefined) console.error(
			new TypeError(
				"You can't customize default elements. " +
				"Create a new class and extend this element."
			)
		);
		answer.custom = "igniter-"+tag;
	} else if((options.custom != undefined)
	 	&& (constructor != Torex.Autonomous)) {
		// Customize user's constructor
		answer.type = "custom";
		answer.custom = options.custom;
	} else if(constructor != Torex.Autonomous) {
		// Create element
		answer.type = "default";
		answer.custom = false;
		// Set random custom field
		genCustom();
	} else {
		console.error("Illegal Torex constructor.");
	}

	answer.attr = options.attr || {};
	answer.items = options.items || [];

	if(!(answer.items instanceof Array)) {
		answer.items = [answer.items];
	}

	return answer;

}
