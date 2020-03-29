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
  	if(!this.parent.parentNode) { }
    else if(this.parent.parentNode.sharedStorage) {
    	return this.parent.parentNode.sharedStorage;
    }
    return false;
  }
}

export default SharedStorage
