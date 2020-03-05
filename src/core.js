class Ignite {}

// 0 - [off]
// 1 - [errors]
// 2 - [errors, warnings]
// 3 or more - [errors, warnings, info]
Ignite.VERBOSE_LEVEL = 0;

Ignite.LOG = function() {
	if(Ignite.VERBOSE_LEVEL >= arguments[0]) {
		for(var i = 1; i < arguments.length; i++) {
			if(arguments[0] == 1) {
				console.error(arguments[i]);
			} else if(arguments[0] == 2) {
				console.warn(arguments[i]);
			} else if(arguments[0] == 3) {
				console.info(arguments[i]);
			} else {
				console.log(arguments[i]);
			}
		}
	}
}

Ignite.Node = class Node {
	constructor(name, items, data) {
  	var target = Object.getPrototypeOf(this);
  	while(target.constructor != Ignite.Node) {
    	if(target == Object.getPrototypeOf(Object)) {
				Ignite.LOG(1, "Wrong constructor call");
				return null;
      }
    	target = Object.getPrototypeOf(target);
    }
		target.props = {};
  	let el = (name) ? document.createElement(name) : document.createDocumentFragment();
    function appendAll(t, a) {
    	if(!a) {
      } else if (typeof a == "string") {
        t.appendChild(document.createTextNode(a));
      } else if (a instanceof Node) {
        t.appendChild(a);
      } else if (a instanceof Array) {
        a.forEach(b => appendAll(t, b));
      }
    }
    appendAll(el, items);
		if(data) {
			for(let b of Object.keys(data)) {
				if(!data[b]) { } else if (b == "props") {
					target.props = data[b];
				} else {
					try {
					  el.setAttribute(b, data[b]);
					}
					catch(error) {
						Ignite.LOG(2, error.toString());
					}
				}
			}
		}
		Object.setPrototypeOf(
			target.constructor.prototype,
			Object.getPrototypeOf(el)
		);
		Object.setPrototypeOf(
			el,
			Object.getPrototypeOf(this).constructor.prototype
		);
    let c = {
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
      drop: this.onDrop,
      dragover: this.onDragOver,
      dragstart: this.onDragStart,
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
    };
    for (let b of Object.keys(c)) {
      if (c[b]) {
        el.addEventListener(b, c[b]);
      }
    }
  	return el;
  }
}

Ignite.Empty = class Empty extends Ignite.Node {
  constructor(items, data) {
    super(null, items, data);
  }
};
