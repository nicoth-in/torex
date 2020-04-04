<p align="center"> <img src="https://github.com/nicoth-in/torex/raw/master/content/Logo.png" height="80px"> </p>
<h1 align="center">Torex 1.0 release</h1>
<p align="center"><a href="https://github.com/nicoth-in/torex/blob/master/LICENSE.md"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a> <a href="https://circleci.com/gh/nicoth-in/torex/tree/master"><img src="https://circleci.com/gh/nicoth-in/torex/tree/master.svg?style=shield"></a> <a href="https://www.npmjs.com/package/@torexjs/torex"><img src="https://img.shields.io/npm/dt/@torexjs/torex"></a></p>
<p align="center">Build rapid & powerful web apps easily with Torex, an extremely fast frontend JS framework without abstractions.</p>
<hr>

## Installation

Torex is a frontend framework. You can use `./dist/torex.dist.js` or minified `./dist/torex.dist.min.js` files.
If you are using npm, run this command in terminal `npm i @torexjs/torex` or import torex in your package.json.

## Building

You can build your own bundle from src using.
First install package. Second run `npm run build`.

## Running examples locally

Type `npm run host-examples` to start local server and host examples.

## [Torex Documentation](https://github.com/nicoth-in/torex-docs)

## The why

Torex was created to make web applications lighter but still functional. Most of the small apps doesn't need to use heavy frameworks with layers of abstractions, hooks, virtualization and stuff like that. We believe that modern browsers provide a big number of solutions which can help you to build web. Torex is an adaptor between a browser features and easy to use components.

## Features

First of all, Torex doesn't use Objects between your application and DOM. All elements you use are already DOM components. So, here we can say that Torex is Reactive framework. Changing attribute of a Torex element will affect HTML tree immediately, and this done without any observers or hooks.

Secondly, Torex can be mixed with native HTML. You may create Torex element and attach it straight to your page with `appendChild` method. And this also can be done with Torex element inside it's constructor or outside. You can use shadow DOM, templates and all features of modern HTML.

At this point we should also talk about custom elements. Well, Torex is build using this elements. You should think about every element like it is a container with some data, children containers and methods. So, all Torex elements are custom.

## [License](/LICENSE.md)

Licensed under MIT.
