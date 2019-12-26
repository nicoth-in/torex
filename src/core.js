class Ignite {}

Ignite.Element = class {
  constructor(args) {
    this.node = document.createDocumentFragment();

    if (!args) {
      (this.props = {}), (this.items = null);
      return;
    }

    let { items, props } = args;
    this.items = items || null;
    this.props = props || {};
  }

  addChilds(items) {
    if (!items) {
      return;
    } else if (typeof items == "string") {
      this.node.appendChild(document.createTextNode(items));
    } else if (items instanceof Ignite.Element) {
      this.node.appendChild(items.render());
    } else if (items instanceof Array) {
      items.forEach(el => this.addChilds(el));
    }
  }

  plainRender(target) {
    this.willMount();
    this.addEvents();

    if (!this.node) {
      this.node = document.createDocumentFragment();
    }

    this.addProps();
    this.addChilds(this.items);

    if (target) {
      target.appendChild(this.node);
    }

    this.didMount();
    return this.node;
  }

  addProps() {
    let props = this.props;

    if (this.node instanceof Element) {
      for (let key of Object.keys(props)) {
        if (key in this.node) {
          this.node[key] = props[key];
        }
      }
    }
  }

  addEvents() {
    let events = {
      onabort: this.onAbort,
      onafterscriptexecute: this.onAfterScriptExecute,
      onanimationcancel: this.onAnimationCancel,
      onanimationend: this.onAnimationEnd,
      onanimationiteration: this.onAnimationIteration,
      onauxclick: this.onAuxClick,
      onbeforescriptexecute: this.onBeforeScriptExecute,
      onblur: this.onBlur,
      oncancel: this.onCancel,
      oncanplay: this.onCanPlay,
      oncanplaythrough: this.onCanPlayThrough,
      onchange: this.onChange,
      onclick: this.onClick,
      onclose: this.onClose,
      oncontextmenu: this.onContextMenu,
      oncuechange: this.onCueChange,
      ondblclick: this.onDbClick,
      ondurationchange: this.onDurationChange,
      onended: this.onEnded,
      onerror: this.onError,
      onfocus: this.onFocus,
      onfullscreenchange: this.onFullScreenChange,
      onfullscreenerror: this.onFullScreenError,
      ongotpointercapture: this.onGotPointerCapture,
      oninput: this.onInput,
      oninvalid: this.onInvalid,
      onkeydown: this.onKeyDown,
      onkeypress: this.onKeyPress,
      onkeyup: this.onKeyUp,
      onload: this.onLoad,
      onloadeddata: this.onLoadedData,
      onloadedmetadata: this.onLoadedMetaData,
      onloadend: this.onLoadEnd,
      onloadstart: this.onLoadStart,
      onlostpointercapture: this.onLostPointerCapture,
      onmousedown: this.onMouseDown,
      onmouseenter: this.onMouseEnter,
      onmouseleave: this.onMouseLeave,
      onmousemove: this.onMouseMove,
      onmouseout: this.onMouseOut,
      onmouseover: this.onMouseOver,
      onmouseup: this.onMouseUp,
      onoffline: this.onOffline,
      ononline: this.onOnline,
      onpause: this.onPause,
      onplay: this.onPlay,
      onpointercancel: this.onPointerCancel,
      onpointerdown: this.onPointerDown,
      onpointerenter: this.onPointerEnter,
      onpointerleave: this.onPointerLeave,
      onpointermove: this.onPointerMove,
      onpointerout: this.onPointerOut,
      onpointerover: this.onPointerOver,
      onpointerup: this.onPointerUp,
      onreset: this.onReset,
      onresize: this.onResize,
      onscroll: this.onScroll,
      onselect: this.onSelect,
      onselectionchange: this.onSelectionChange,
      onselectstart: this.onSelectStart,
      onsubmit: this.onSubmit,
      ontouchcancel: this.onTouchCancel,
      ontouchstart: this.onTouchStart,
      ontransitioncancel: this.onTransitionCancel,
      ontransitionend: this.onTransitionEnd,
      onvisibilitychange: this.onVisibilityChange,
      onwheel: this.onWheel
    };

    for (let key_value of Object.keys(events)) {
      if (!this.node) return;

      if (events[key_value]) {
        events[key_value] = events[key_value].bind(this);
        this.node[key_value] = events[key_value];
      }
    }
  }

  willMount() {}

  didMount() {}

  render(target) {
    return this.plainRender(target);
  }

  transform(node) {
    if (this.node instanceof Element) {
      this.node.replaceWith(node);
    }

    this.node = node;
  }

  help() {
    if (this.desc) {
      console.info(this.constructor.name, "-", this.desc);
    } else {
      console.info(this.constructor.name, "has no description.");
    }
  }

  tree() {
    return this.__log_tree(this, 0);
  }

  __log_tree(items, i) {
    if (!items) {
      return false;
    } else if (typeof items == "string") {
      let n = "| ".repeat(i++);
      this.log(n + "Text Node");
    } else if (items instanceof Ignite.Element) {
      let n = "| ".repeat(i++);
      this.log(n + items.constructor.name);

      this.__log_tree(items.items, i);
    } else if (items instanceof Array) {
      items.forEach(el => this.__log_tree(el, i));
    }

    return true;
  }

  log(format) {
    console.info(format);
  }
};
