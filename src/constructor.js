import SharedStorage from './storage';
import Randomize from './random';

class NodeConstructor {
	constructor(c, t) {
  	var answer;
		this.c = c;
		// If this is a script call
  	if(!t.is_native) {
    	if(t.custom) {
				// If we want a custom el
				if(this.checkSelfConstruction(t.tag)) {
					console.error("You can't customize default elements. Create a new class and extend this element.");
				} else if(!customElements.get(t.custom)) {
					// If it not exists try to create
					try {
						this.customize(t.custom, t.tag);
						answer = document.createElement(t.custom);
					}
					catch(e) {
						console.error(e);
					}
				} else {
					// If it exists just create
					console.error("Custom element", t.custom, "already exists. Created with prev constructor.");
					answer = document.createElement(t.custom);
				}
      } else {
				// If this is not a custom element
      	t.custom = Randomize();
      	while(customElements.get(t.custom)) {
        	t.custom = Randomize();
        }
        t.custom = "igniter-"+t.custom;
				// If it is not a default one
				if(!this.checkSelfConstruction(t.tag)) {
					try {
						this.customize(t.custom, t.tag);
						answer = document.createElement(t.tag, { extends: t.custom });
					}
					catch(e) {
						console.error(e);
					}
				}
      }
			if(!answer) {
				t.custom = "igniter-"+t.tag;
				// If it is a default constructor
				if(this.checkSelfConstruction(t.tag)) {
					if(!customElements.get(t.custom)) this.customize(t.custom, t.tag);
					answer = document.createElement(t.tag, { extends: t.custom });
				} else {
					console.error("Can't create an element.")
				}
			}
    } else {
			// If this is a DOM call
			answer = Reflect.construct(t.from, [], this.c);
		}
		// Set shared storage
		if(answer) this.storageSet(answer);

    return answer;
  }
  customize(name, from) {
  	customElements.define(name, this.c, { extends: from });
  }
  storageSet(node) {
  	node.sharedStorage = new SharedStorage(node);
  }
	/* Checks if it was a default node constructor by cheking prototype level */
	checkSelfConstruction(tag) {
		return (this.c.name.toLowerCase() == tag.toLowerCase());
	}
}

export default NodeConstructor
