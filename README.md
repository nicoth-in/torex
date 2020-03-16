<p align="center"> <img src="https://github.com/nicoth-in/igniter/raw/v0.3/content/Logo.png"></p>
<h1 align="center">Igniter v0.4-dev</h1>
<p align="center"><a href="https://github.com/nicoth-in/igniter/blob/v0.3/LICENSE.md"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a></p>

<p align="center">Ignite your pages! Igniter is a rapid <i>frontend</i> JS framework without abstractions.
It helps you to build and manage DOM in an object-oriented programming style.</p>
<hr>

## About Igniter

Igniter is rapid and powerful framework. Major features are:

- It uses the most advance node managing method. All JS objects created as Igniter Elements are native DOM Nodes.
- Igniter based on Custom Elements Registry. It can be mixed with native, cause it **is** native.
- It is reactive. If you change Igniter Element, you actually change DOM.
- No Virtual DOM by default, no abstractions.
- You can use templates, mix generated HTML with JS without pain.

## Igniter in examples

### Shared storage

Shared storage is a build-in class attached to every Igniter element.
It is basically storage with `set()` and `get()` methods, but the data it stores is shared with children.
So, if you set/get some data on children it will be actually set/get on the root parent.
Shared storage can be accessed via `sharedStorage` field on Igniter elements.

## Reference

Igniter consists of build-in elements. They all can be created with some options.
The main concept here, that the first construction is an **initializing process** too.
So, the first construction **must** be done with options.
```
new Igniter.Div(options)

// The first call of any Igniter element must be done with options(even if it is an empty object).
// I recommend you always call elements with options.

```
Where `options` is an `Object` with fields:
  - custom *[optional]* - name of the custom element.
  It is helpful then you need to use classes on existing elements.
  For example, if you have an element `<my-button></my-button>` or `<button is="my-button"></button>`
  and JS:
  ```
  class MyButton extends Igniter.Button {
    constructor(args) {
      super(args);
      this.appendChild(new Text("text"));
    }
  }
  new MyButton({ custom: "my-button" }) // We are not using this element, we just want to initialize it
  ```
  And after running that script your button will become `<button is="my-button">Text</button>`.

  - attr *[optional]* - `Object` with attributes which will be attached in construction process.
  `new Igniter.Div({ attr: {id: "app"} })` will return `<div id="app"></div>`
