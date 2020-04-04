var Torex = (function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    return function () {
      var Super = _getPrototypeOf(Derived),
          result;

      if (_isNativeReflectConstruct()) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o) {
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var it,
        normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var SharedStorage = /*#__PURE__*/function (_EventTarget) {
    _inherits(SharedStorage, _EventTarget);

    var _super = _createSuper(SharedStorage);

    function SharedStorage(parent) {
      var _this;

      _classCallCheck(this, SharedStorage);

      _this = _super.call(this);
      _this.storage = {};
      _this.parent = parent;
      return _this;
    }

    _createClass(SharedStorage, [{
      key: "set",
      value: function set(name, value) {
        var st = this.getParentStorage();

        if (st) {
          return st.set(name, value);
        } else {
          this.storage[name] = value;
          this.parent.dispatchEvent(new Event("sharedstoragechanged", {
            bubbles: true,
            cancelable: false
          }));
        }
      }
    }, {
      key: "get",
      value: function get(name) {
        var st = this.getParentStorage();

        if (st) {
          return st.get(name);
        } else {
          return this.storage[name];
        }
      }
    }, {
      key: "clear",
      value: function clear() {
        var st = this.getParentStorage();

        if (st) {
          return st.clear();
        } else {
          var s = this.storage;
          this.storage = {};
          return s;
        }
      }
    }, {
      key: "getParentStorage",
      value: function getParentStorage() {
        if (!this.parent.parentNode) ; else if (this.parent.parentNode.sharedStorage) {
          return this.parent.parentNode.sharedStorage;
        }

        return false;
      }
    }]);

    return SharedStorage;
  }( /*#__PURE__*/_wrapNativeSuper(EventTarget));

  function Randomize() {
    return Array.apply(0, Array(16)).map(function () {
      return function (charset) {
        return charset.charAt(Math.floor(Math.random() * charset.length));
      }('abcdefghijklmnopqrstuvwxyz-');
    }).join('');
  }

  function NodeConstructor(ray) {
    var customize = function customize(name, from) {
      if (from != null) {
        customElements.define(name, ray.c, {
          "extends": from
        });
      } else {
        customElements.define(name, ray.c);
      }
    };

    var storageSet = function storageSet(node) {
      node.sharedStorage = new SharedStorage(node);
    };

    if (ray.type != "native") {
      if (!customElements.get(ray.custom)) {
        try {
          customize(ray.custom, ray.tag);
        } catch (e) {
          /* PASS */
        }
      }
    }

    var answer = Reflect.construct(ray.from, [], ray.c);

    for (var v in ray.attr) {
      answer.setAttribute(v, ray.attr[v]);
    }

    var _iterator = _createForOfIteratorHelper(ray.items),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        answer.appendChild(item);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    storageSet(answer);
    return answer;
  } // Function which generates input for NodeGenerator

  function Ray(constructor, from, tag, options) {
    var answer = {};

    var genCustom = function genCustom() {
      while (customElements.get(answer.custom) || !answer.custom) {
        answer.custom = "torex-" + Randomize();
      }
    };

    answer.c = constructor;
    answer.from = from;
    answer.tag = tag;
    var isTorexConstructor = tag ? constructor.name.toLowerCase() == tag.toLowerCase() : false;

    if (options == undefined) {
      // Call was made by Document
      this.type = "native";
    } else if (isTorexConstructor) {
      // Call was made on Torex element constructor
      answer.type = "tag"; // We can't customize Torex element constructor

      if (options.custom != undefined) console.error(new TypeError("You can't customize default elements. " + "Create a new class and extend this element."));
      answer.custom = "igniter-" + tag;
    } else if (options.custom != undefined && constructor != Torex.Autonomous) {
      // Customize user's constructor
      answer.type = "custom";
      answer.custom = options.custom;
    } else if (constructor != Torex.Autonomous) {
      // Create element
      answer.type = "default";
      answer.custom = false; // Set random custom field

      genCustom();
    } else {
      console.error("Illegal Torex constructor.");
    }

    answer.attr = options.attr || {};
    answer.items = options.items || [];

    if (!(answer.items instanceof Array)) {
      answer.items = [answer.items];
    }

    return answer;
  }

  var ElementKeys = ["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dir", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "menu", "meta", "meter", "nav", "nobr", "noembed", "noframes", "noscript", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"];

  function Factory(elements) {
    var scope = {}; // This scope will be returned in future as output

    var tempScope = {}; // This scope will be deleted after exiting Factory

    var _iterator = _createForOfIteratorHelper(elements),
        _step;

    try {
      var _loop = function _loop() {
        var key = _step.value;
        var className = key[0].toUpperCase() + key.slice(1),
            prototypeName = document.createElement(key).constructor,
            classPrototypeName = "Torex" + prototypeName.name.substring(4, prototypeName.name.length);

        if (!tempScope[classPrototypeName]) {
          // If we still not have this class prototype
          tempScope[classPrototypeName] = /*#__PURE__*/function () {
            // Create prototype class for our elements
            function _class(tag, inner) {
              _classCallCheck(this, _class);

              return NodeConstructor(Ray(this.constructor, prototypeName, tag, inner));
            }

            return _class;
          }();

          Reflect.setPrototypeOf(tempScope[classPrototypeName].prototype, prototypeName.prototype); // Append chain for this class

          Reflect.setPrototypeOf(tempScope[classPrototypeName], prototypeName);
          Reflect.defineProperty(tempScope[classPrototypeName], "name", {
            value: classPrototypeName
          }); // Append name property
        }

        scope[className] = /*#__PURE__*/function (_tempScope$classProto) {
          _inherits(_class2, _tempScope$classProto);

          var _super2 = _createSuper(_class2);

          // Crete class for every element
          function _class2(options) {
            _classCallCheck(this, _class2);

            return _super2.call(this, key, options);
          }

          return _class2;
        }(tempScope[classPrototypeName]);

        Reflect.defineProperty(scope[className], "name", {
          value: className
        }); // Append name property
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    scope.Autonomous = /*#__PURE__*/function (_tempScope$TorexEleme) {
      _inherits(Autonomous, _tempScope$TorexEleme);

      var _super = _createSuper(Autonomous);

      // Autonomus element (custom dom element)
      function Autonomous(options) {
        _classCallCheck(this, Autonomous);

        return _super.call(this, null, options);
      }

      return Autonomous;
    }(tempScope["TorexElement"]);

    scope.Fragment = // Fragment Element (DocumentFragment constructor)
    function Fragment(options) {
      _classCallCheck(this, Fragment);

      var self = this;
      var output = Reflect.construct(DocumentFragment, [], self.constructor);
      options.items = options.items || [];

      if (!(options.items instanceof Array)) {
        options.items = [options.items];
      }

      var _iterator2 = _createForOfIteratorHelper(options.items),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          output.appendChild(item);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return output;
    };

    Reflect.setPrototypeOf(scope.Fragment.prototype, HTMLElement.prototype);
    Reflect.setPrototypeOf(scope.Fragment, HTMLElement);
    return scope;
  }

  var Torex$1 = Factory(ElementKeys);

  return Torex$1;

}());
