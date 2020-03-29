<p align="center"> <img src="https://github.com/nicoth-in/torex/raw/master/content/Logo.png" height="80px"> </p>
<h1 align="center">Torex 1.0 release</h1>
<p align="center"><a href="https://github.com/nicoth-in/torex/blob/master/LICENSE.md"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a> <a href="https://circleci.com/gh/nicoth-in/torex/tree/master"><img src="https://circleci.com/gh/nicoth-in/torex/tree/master.svg?style=shield"></a></p>

<p align="center">Torex is a rapid <i>frontend</i> JS framework without abstractions. It helps you to build and manage DOM in an object-oriented programming style.</p>
<hr>

## Installation

Torex is a frontend framework. You can use `./dist/torex.dist.js` or minified `./dist/torex.dist.min.js` files.
If you are using npm, run this command in terminal `npm i @torexjs/torex` or import torex in your package.json.

## Building

You can build your own bundle from src using.
First install package. Second run `npm run build`.

## Running examples locally

Type `npm run host-examples` to start local server and host examples.

## Torex Documentation

This section describes possible ways of using Torex.

### Construction

The core feature is that **Torex element == DOM element**.
So, you can construct elements and attach them like any other element.

```
let { Div } = Torex;
document.body.appendChild(new Div({}));
```

You can construct elements with some options.
The first option is `attr`, it should contain Object with element attributes.
For example:
```
let my_el = new Div({ attr: { "id": "my-super-app" } });
```
will be rendered as `<div id="my-super-app"></div>`
You can pass `items` containing Torex/DOM elements or Array of these elements.
```
let my_el = new Div({ items: new Span({ items: new Text("Text here.") }) });
```

### Extending Torex elements

Torex elements can be wrapped in user's classes.

```
class MyDiv extends Torex.Div {
  constructor(args) {
    super(args);
  }
}
new MyDiv(/* Some options */);
```

or

```
class MyDiv extends Torex.Div {
  constructor() {
    super({/* Constant options */});
  }
}
new MyDiv();
```

### Shared storage

Shared storage is a build-in class attached to every Torex element.
It is basically storage with `set()` and `get()` methods, but the data it stores is shared with children.
So, if you set/get some data on children it will be actually set/get on the root parent.
Shared storage can be accessed via `sharedStorage` field on Torex elements.

## Reference

Torex consists of build-in elements. They all can be created with some options.
The main concept here, that the first construction is an **initializing process** too.
So, the first construction **must** be done with options.
```
new Torex.Div(options)

// The first call of any Torex element must be done with options(even if it is an empty object).
// I recommend you always call elements with options.

```
Where `options` is an `Object` with fields:
  - custom *[optional]* - name of the custom element.
  It is helpful then you need to use classes on existing elements.
  For example, if you have an element `<my-button></my-button>` or `<button is="my-button"></button>`
  and JS:
  ```
  class MyButton extends Torex.Button {
    constructor(args) {
      super(args);
      this.appendChild(new Text("text"));
    }
  }
  new MyButton({ custom: "my-button" }) // We are not using this element, we just want to initialize it
  ```
  And after running that script your button will become `<button is="my-button">Text</button>`.

  - attr *[optional]* - `Object` with attributes which will be attached in construction process.
  `new Torex.Div({ attr: {id: "app"} })` will return `<div id="app"></div>`
