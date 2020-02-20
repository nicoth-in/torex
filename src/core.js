class Ignite {}

Ignite.Node = class Node {
	constructor(name, items) {
  	var target = Object.getPrototypeOf(this);
  	while(target.constructor != Ignite.Node) {
    	if(target == Object.getPrototypeOf(Object)) {
      	break;
      }
    	target = Object.getPrototypeOf(target);
    }
  	let el = document.createElement(name);
		Object.setPrototypeOf(
    	target.constructor.prototype,
    	Object.getPrototypeOf(el)
    );
    Object.setPrototypeOf(
    	el,
      Object.getPrototypeOf(this).constructor.prototype
    );
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
      // Custom
      willmount: this.willMount,
      didmount: this.didMount,
      newinstancecreated: this.instanceCreated,
    };

    for (let b of Object.keys(c)) {
      if (c[b]) {
        el.addEventListener(b, c[b]);
      }
    }

  	return el;
  }
}
