function _instanceof(a,b){return b!=null&&typeof Symbol!=="undefined"&&b[Symbol.hasInstance]?!!b[Symbol.hasInstance](a):a instanceof b}
function _classCallCheck(a,b){if(!_instanceof(a,b))throw new TypeError("Cannot call a class as a function")}
var Ignite=function a(){"use strict";_classCallCheck(this,a)};Ignite.Node=function d(e,f){"use strict";function g(c,b){!b||(typeof b=="string"?c.appendChild(document.createTextNode(b)):_instanceof(b,d)?c.appendChild(b):_instanceof(b,Array)&&b.forEach(function(a){return g(c,a)}))}
_classCallCheck(this,d);for(var h=Object.getPrototypeOf(this);h.constructor!=Ignite.Node&&!(h==Object.getPrototypeOf(Object));)h=Object.getPrototypeOf(h);var i=document.createElement(e);Object.setPrototypeOf(h.constructor.prototype,Object.getPrototypeOf(i)),Object.setPrototypeOf(i,Object.getPrototypeOf(this).constructor.prototype),g(i,f);var a={abort:this.onAbort,afterscriptexecute:this.onAfterScriptExecute,animationcancel:this.onAnimationCancel,animationend:this.onAnimationEnd,animationiteration:this.onAnimationIteration,auxclick:this.onAuxClick,beforescriptexecute:this.onBeforeScriptExecute,blur:this.onBlur,cancel:this.onCancel,canplay:this.onCanPlay,canplaythrough:this.onCanPlayThrough,change:this.onChange,click:this.onClick,close:this.onClose,contextmenu:this.onContextMenu,cuechange:this.onCueChange,dblclick:this.onDbClick,drop:this.onDrop,dragover:this.onDragOver,dragstart:this.onDragStart,durationchange:this.onDurationChange,ended:this.onEnded,error:this.onError,focus:this.onFocus,fullscreenchange:this.onFullScreenChange,fullscreenerror:this.onFullScreenError,gotpointercapture:this.onGotPointerCapture,input:this.onInput,invalid:this.onInvalid,keydown:this.onKeyDown,keypress:this.onKeyPress,keyup:this.onKeyUp,load:this.onLoad,loadeddata:this.onLoadedData,loadedmetadata:this.onLoadedMetaData,loadend:this.onLoadEnd,loadstart:this.onLoadStart,lostpointercapture:this.onLostPointerCapture,mousedown:this.onMouseDown,mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave,mousemove:this.onMouseMove,mouseout:this.onMouseOut,mouseover:this.onMouseOver,mouseup:this.onMouseUp,offline:this.onOffline,online:this.onOnline,pause:this.onPause,play:this.onPlay,pointercancel:this.onPointerCancel,pointerdown:this.onPointerDown,pointerenter:this.onPointerEnter,pointerleave:this.onPointerLeave,pointermove:this.onPointerMove,pointerout:this.onPointerOut,pointerover:this.onPointerOver,pointerup:this.onPointerUp,reset:this.onReset,resize:this.onResize,scroll:this.onScroll,select:this.onSelect,selectionchange:this.onSelectionChange,selectstart:this.onSelectStart,submit:this.onSubmit,touchcancel:this.onTouchCancel,touchstart:this.onTouchStart,transitioncancel:this.onTransitionCancel,transitionend:this.onTransitionEnd,visibilitychange:this.onVisibilityChange,wheel:this.onWheel,willmount:this.willMount,didmount:this.didMount,newinstancecreated:this.instanceCreated};for(var c=0,j=Object.keys(a);c<j.length;c++){var k=j[c];a[k]&&i.addEventListener(k,a[k])}
return i}
