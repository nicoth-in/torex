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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
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

  var NodeConstructor = /*#__PURE__*/function () {
    function NodeConstructor(ray) {
      _classCallCheck(this, NodeConstructor);

      this.c = ray.c;

      switch (ray.type) {
        case "native":
          break;

        case "tag":
          if (!customElements.get(ray.custom)) {
            this.customize(ray.custom, ray.tag);
          }

          break;

        case "custom":
          if (!customElements.get(ray.custom)) {
            try {
              this.customize(ray.custom, ray.tag);
            } catch (e) {//console.error(e);
            }
          }

          break;

        case "default":
          try {
            this.customize("igniter-" + ray.custom, ray.tag);
          } catch (e) {//console.error(e);
          }

          break;
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

      if (answer) this.storageSet(answer);
      return answer;
    }

    _createClass(NodeConstructor, [{
      key: "customize",
      value: function customize(name, from) {
        customElements.define(name, this.c, {
          "extends": from
        });
      }
    }, {
      key: "storageSet",
      value: function storageSet(node) {
        node.sharedStorage = new SharedStorage(node);
      }
    }]);

    return NodeConstructor;
  }();
  var Ray = /*#__PURE__*/function () {
    function Ray(options) {
      _classCallCheck(this, Ray);

      this.tag = options.tag;
      this.c = options.c;
      this.from = options.from;

      if (options["native"]) {
        this.type = "native";
      } else if (this.c.name.toLowerCase() == this.tag.toLowerCase()) {
        if (this.custom) console.error("You can't customize default elements. Create a new class and extend this element.");
        this.type = "tag";
        this.custom = "igniter-" + this.tag;
      } else if (options.custom) {
        this.type = "custom";
        this.custom = options.custom;
      } else {
        this.type = "default";
        this.custom = false;
        this.genCustom();
      }

      this.attr = options.attr || {};
      this.items = options.items || [];

      if (!(this.items instanceof Array)) {
        this.items = [this.items];
      }
    }

    _createClass(Ray, [{
      key: "genCustom",
      value: function genCustom() {
        while (customElements.get(this.custom) || !this.custom) {
          this.custom = Randomize();
        }
      }
    }]);

    return Ray;
  }();

  var ElementKeys = ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"];

  var Torex = {};

  var Generator = /*#__PURE__*/function () {
    function Generator() {
      _classCallCheck(this, Generator);

      var scope = this;

      var _iterator = _createForOfIteratorHelper(this.getElements()),
          _step;

      try {
        var _loop = function _loop() {
          var key = _step.value;
          var className = key[0].toUpperCase() + key.slice(1);
          var prototypeName = document.createElement(key).constructor;
          var classPrototypeName = "Torex" + prototypeName.name.substring(4, prototypeName.name.length);

          if (!scope[classPrototypeName]) {
            scope[classPrototypeName] = /*#__PURE__*/function () {
              function _class(i) {
                _classCallCheck(this, _class);

                return new NodeConstructor(scope.createRay(this.constructor, prototypeName, i));
              }

              return _class;
            }();

            Reflect.setPrototypeOf(scope[classPrototypeName].prototype, prototypeName.prototype);
            Reflect.setPrototypeOf(scope[classPrototypeName], prototypeName);
            Reflect.defineProperty(scope[classPrototypeName], "name", {
              value: classPrototypeName
            });
          }

          Torex[className] = /*#__PURE__*/function (_scope$classPrototype) {
            _inherits(_class2, _scope$classPrototype);

            var _super = _createSuper(_class2);

            function _class2(o) {
              _classCallCheck(this, _class2);

              if (o) o.tag = key;
              return _super.call(this, o);
            }

            return _class2;
          }(scope[classPrototypeName]);

          Reflect.defineProperty(Torex[className], "name", {
            value: className
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    _createClass(Generator, [{
      key: "createRay",
      value: function createRay(c, from, opt) {
        return opt ? new Ray(_objectSpread2({
          "native": false,
          from: from,
          c: c
        }, opt)) : new Ray(_objectSpread2({
          "native": true,
          from: from,
          c: c
        }, opt));
      }
    }, {
      key: "getElements",
      value: function getElements() {
        return ElementKeys;
      }
    }]);

    return Generator;
  }();

  var generatorContext = new Generator();

  return Torex;

}());
