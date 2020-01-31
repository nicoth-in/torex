class Ignite {}

Ignite.Element = class {
  /* Main constructor for all elements */
  constructor(a) {
    this.node = document.createDocumentFragment();
    this.items = arguments[0] || null;
    this.props = arguments[1] || {};
  }
  /* Add child or children to the node. Private method. */

  addChildren(a) {
    if (!a) {
    } else if (typeof a == "string") {
      this.node.appendChild(document.createTextNode(a));
    } else if (a instanceof Ignite.Element) {
      this.node.appendChild(a.render());
    } else if (a instanceof Array) {
      a.forEach(a => this.addChildren(a));
    }
  }
  /* Basic renderer. Private method. */
  
  plainRender(a) {
    if (!this.node) {
      this.node = document.createDocumentFragment();
    }

    this.addEvents();
    this.node.dispatchEvent(
      new CustomEvent("willmount", {
        detail: null
      })
    );
    this.addProps();
    this.addChildren(this.items);

    if (a) {
      a.appendChild(this.node);
    }

    this.node.dispatchEvent(
      new CustomEvent("didmount", {
        detail: null
      })
    );
    return this.node;
  }
  /* Add props to the node. Private method. */

  addProps() {
    for (let a in this.props) {
      this.node.setAttribute(a, this.props[a]);
    }
  }
  /* Event generator. Private method. */

  addEvents() {
    let a = {
      abort: this.onAbort,
      afterscriptexecute: this.onAfterScriptExecute,
      animationcancel: this.onAnimationCancel,
      animationend: this.onAnimationEnd,
      animationiteration: this.onAnimationIteration,
      auxclick: this.onAuxClick,
      beforescriptexecute: this.onBeforeScriptExecute,
      blur: this.onBlur,
      cancel: this.onCancel,
      canplay: this.onCanPlay,
      canplaythrough: this.onCanPlayThrough,
      change: this.onChange,
      click: this.onClick,
      close: this.onClose,
      contextmenu: this.onContextMenu,
      cuechange: this.onCueChange,
      dblclick: this.onDbClick,
      durationchange: this.onDurationChange,
      ended: this.onEnded,
      error: this.onError,
      focus: this.onFocus,
      fullscreenchange: this.onFullScreenChange,
      fullscreenerror: this.onFullScreenError,
      gotpointercapture: this.onGotPointerCapture,
      input: this.onInput,
      invalid: this.onInvalid,
      keydown: this.onKeyDown,
      keypress: this.onKeyPress,
      keyup: this.onKeyUp,
      load: this.onLoad,
      loadeddata: this.onLoadedData,
      loadedmetadata: this.onLoadedMetaData,
      loadend: this.onLoadEnd,
      loadstart: this.onLoadStart,
      lostpointercapture: this.onLostPointerCapture,
      mousedown: this.onMouseDown,
      mouseenter: this.onMouseEnter,
      mouseleave: this.onMouseLeave,
      mousemove: this.onMouseMove,
      mouseout: this.onMouseOut,
      mouseover: this.onMouseOver,
      mouseup: this.onMouseUp,
      offline: this.onOffline,
      online: this.onOnline,
      pause: this.onPause,
      play: this.onPlay,
      pointercancel: this.onPointerCancel,
      pointerdown: this.onPointerDown,
      pointerenter: this.onPointerEnter,
      pointerleave: this.onPointerLeave,
      pointermove: this.onPointerMove,
      pointerout: this.onPointerOut,
      pointerover: this.onPointerOver,
      pointerup: this.onPointerUp,
      reset: this.onReset,
      resize: this.onResize,
      scroll: this.onScroll,
      select: this.onSelect,
      selectionchange: this.onSelectionChange,
      selectstart: this.onSelectStart,
      submit: this.onSubmit,
      touchcancel: this.onTouchCancel,
      touchstart: this.onTouchStart,
      transitioncancel: this.onTransitionCancel,
      transitionend: this.onTransitionEnd,
      visibilitychange: this.onVisibilityChange,
      wheel: this.onWheel,
      // Custom
      willmount: this.willMount,
      didmount: this.didMount
    };

    for (let b of Object.keys(a)) {
      if (!this.node) return;

      if (a[b]) {
        a[b] = a[b].bind(this);
        this.node.addEventListener(b, a[b]);
      }
    }
  }
  /* Basic entery point for rendering elements. */

  render(a) {
    return this.plainRender(a);
  }
  /* Smooth transform current node type to other. */

  transform(a) {
    if (this.node instanceof Element) {
      this.node.replaceWith(a);
    }

    this.node = a;
  }
  /* Add child or children */

  add(a) {
    if (!a) return this;

    if (!this.items) {
      this.items = a;
    } else if (this.items instanceof Array) {
      if (a instanceof Array) {
        this.items.append(a);
      } else {
        this.items.push(a);
      }
    } else {
      this.items = [this.items, a];
    }

    return this;
  }
  /* Add prop */

  prop(a, b) {
    this.props[a] = b;
    return this;
  }
  /* Shows current info about this class */

  help() {
    if (this.desc) {
      console.info(this.constructor.name, "-", this.desc);
    } else {
      console.info(this.constructor.name, "has no description.");
    }
  }
  /* Shows current class tree in console. */

  tree() {
    let a = this.__log_tree(this, 0);

    return a;
  }
  /* Private method. */

  __log_tree(a, b) {
    if (!a) {
      return false;
    } else if (typeof a == "string") {
      let c = " ".repeat(b++);
      this.log(c + "Text Node `" + a + "`");
    } else if (a instanceof Ignite.Element) {
      let c = " ".repeat(b++);
      this.log(c + "<" + a.constructor.name + ">");

      this.__log_tree(a.items, b);

      this.log(c + "<" + a.constructor.name + "/>");
    } else if (a instanceof Array) {
      a.forEach(a => this.__log_tree(a, b));
    }

    return true;
  }
  /* Wrapper over console.info */

  log(a) {
    this.__log_buffer__ = this.__log_buffer__ || "";
    this.__log_buffer__ += a;

    this.__log_push__(a);
  }

  __log_push__(a) {
    console.info(a);
  }
};
Ignite.Bind = class extends Ignite.Element {
  constructor(a) {
    super();
    this.node = a;

    for (let b of this.node.attributes) {
      this.props[b.name] = b.value;
    }

    this._name =
      this.node.tagName[0].toUpperCase() +
      this.node.tagName.slice(1).toLowerCase();

    if (this._name in Ignite) {
      this.__proto__ = Ignite[this._name].prototype;
    }
  }

  render(a) {
    this.transform(document.createElement(this._name));
    return this.plainRender(a);
  }
};
