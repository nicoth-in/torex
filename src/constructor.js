import { SharedStorage } from 'storage';
import { PseudoRand } from 'random';

const ps_rand = new PseudoRand();

export class NodeConstructor {
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
