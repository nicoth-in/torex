import SharedStorage from './storage';
import Randomize from './random';

export class NodeConstructor {
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
				} else {
					//console.error("Custom element", ray.custom, "already exists. Created with prev constructor.");
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

export class Ray {
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
